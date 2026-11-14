document.documentElement.classList.add('js');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setupNav() {
  const button = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (!button || !menu) return;

  const close = () => {
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open menu');
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    menu.setAttribute('inert', '');
    document.body.classList.remove('nav-open');
  };

  const open = () => {
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'Close menu');
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    menu.removeAttribute('inert');
    document.body.classList.add('nav-open');
    const first = menu.querySelector('a, button');
    if (first) first.focus();
  };

  button.addEventListener('click', () => {
    if (button.getAttribute('aria-expanded') === 'true') {
      close();
      button.focus();
    } else {
      open();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      close();
      button.focus();
    }
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', close);
  });

  menu.querySelectorAll('[data-sub-toggle]').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const panel = document.getElementById(toggle.getAttribute('aria-controls'));
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      if (panel) panel.hidden = isOpen;
    });
  });
}

function setupFaq() {
  const items = [...document.querySelectorAll('details.faq-item')];
  items.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      window.setTimeout(() => {
        items.forEach((other) => {
          if (other !== item && other.open) other.open = false;
        });
      }, 0);
    });
  });
}

function setupReveal() {
  const nodes = document.querySelectorAll('.fade-in');
  if (!nodes.length) return;
  if (reducedMotion || !('IntersectionObserver' in window)) {
    nodes.forEach((node) => node.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = Number(el.getAttribute('data-delay') || 0);
      window.setTimeout(() => el.classList.add('is-visible'), delay);
      observer.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  nodes.forEach((node) => observer.observe(node));
}

function fieldError(input, message) {
  const slot = input.closest('.field')?.querySelector('.error');
  if (message) {
    input.setAttribute('aria-invalid', 'true');
    if (slot) slot.textContent = message;
    return false;
  }
  input.removeAttribute('aria-invalid');
  if (slot) slot.textContent = '';
  return true;
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validPhone(value) {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

function fallbackMessage(form) {
  const phone = form.dataset.phone || '';
  const phoneHref = form.dataset.phoneHref || '#';
  const email = form.dataset.email || '';
  return `The online form is not connected yet, so this has not been sent. Call <a href="${phoneHref}">${phone}</a> or email <a href="mailto:${email}">${email}</a>.`;
}

function postQuote(endpoint, payload) {
  return fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    body: new URLSearchParams(payload),
  }).then((response) => {
    if (!response.ok) throw new Error('Request failed');
  });
}

// JSON POST. If the browser cannot read the response because of CORS, send the
// same payload in a no-cors request so it still arrives, and treat that as sent.
async function postGuide(endpoint, payload) {
  const body = JSON.stringify(payload);
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });
    if (!response.ok) throw new Error('Request failed');
  } catch (error) {
    if (!(error instanceof TypeError)) throw error;
    await fetch(endpoint, { method: 'POST', mode: 'no-cors', body });
  }
}

function showGuideSuccess(status, pdf) {
  if (status) {
    status.className = 'status is-ok';
    status.replaceChildren();
    status.append('Thanks. Your guide is ready. ');
    if (pdf) {
      const link = document.createElement('a');
      link.href = pdf;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Download the guide';
      status.append(link, '. ');
    }
    status.append('A copy is also on its way by email.');
  }
  if (!pdf) return;
  const opened = window.open(pdf, '_blank', 'noopener,noreferrer');
  if (opened) opened.opener = null;
}

function setupForms() {
  document.querySelectorAll('form[data-form]').forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const status = form.querySelector('[data-status]');
      const submit = form.querySelector('[type="submit"]');
      const honeypot = form.querySelector('[name="company_website"]');
      let ok = true;

      const required = form.querySelectorAll('[data-required]');
      required.forEach((input) => {
        const value = input.value.trim();
        const label = input.dataset.label || 'This field';
        if (!value) {
          ok = fieldError(input, `${label} is required.`) && ok;
          return;
        }
        if (input.type === 'email' && !validEmail(value)) {
          ok = fieldError(input, 'Enter a valid email address.') && ok;
          return;
        }
        if (input.dataset.kind === 'phone' && !validPhone(value)) {
          ok = fieldError(input, 'Enter a phone number we can call.') && ok;
          return;
        }
        if (input.dataset.min && value.length < Number(input.dataset.min)) {
          ok = fieldError(input, `${label} needs a little more detail.`) && ok;
          return;
        }
        fieldError(input, '');
      });

      if (!ok) {
        const first = form.querySelector('[aria-invalid="true"]');
        if (first) first.focus();
        return;
      }

      if (honeypot && honeypot.value) {
        form.reset();
        if (status) {
          status.className = 'status is-ok';
          status.textContent = 'Thanks. If you need us sooner, please call.';
        }
        return;
      }

      const fields = {};
      new FormData(form).forEach((value, key) => {
        if (key !== 'company_website') fields[key] = String(value).trim();
      });
      const page = form.dataset.page || window.location.pathname;
      const isGuide = form.dataset.form === 'buyers-guide';
      const payload = isGuide
        ? {
          first_name: fields.name || '',
          name: fields.name || '',
          email: fields.email || '',
          phone: fields.phone || '',
          source: 'New AC website - guide',
          formType: 'buyers-guide',
          page,
        }
        : { ...fields, formType: form.dataset.form, page };

      const endpoint = (form.dataset.endpoint || '').trim();
      if (!endpoint.startsWith('https://')) {
        if (status) {
          status.className = 'status is-bad';
          status.innerHTML = fallbackMessage(form);
        }
        return;
      }

      if (submit) submit.disabled = true;
      if (status) {
        status.className = 'status';
        status.textContent = 'Sending…';
      }

      const guidePdf = form.dataset.guidePdf || '';

      try {
        if (isGuide) await postGuide(endpoint, payload);
        else await postQuote(endpoint, payload);
        form.reset();
        if (isGuide) showGuideSuccess(status, guidePdf);
        else if (status) {
          status.className = 'status is-ok';
          status.textContent = form.dataset.success || 'Thanks. We have received this and will be in touch.';
        }
      } catch {
        if (status) {
          status.className = 'status is-bad';
          status.innerHTML = `We could not confirm the form was sent. Please call <a href="${form.dataset.phoneHref}">${form.dataset.phone}</a> or email <a href="mailto:${form.dataset.email}">${form.dataset.email}</a>.`;
        }
      } finally {
        if (submit) submit.disabled = false;
      }
    });
  });
}

function setupMaps() {
  document.querySelectorAll('[data-map-button]').forEach((button) => {
    button.addEventListener('click', () => {
      const wrap = button.closest('[data-map-wrap]');
      if (!wrap) return;
      const src = wrap.dataset.mapSrc;
      const frame = document.createElement('iframe');
      frame.title = 'Map showing the No1 Air Conditioning showroom in Ringwood';
      frame.src = src;
      frame.loading = 'lazy';
      frame.referrerPolicy = 'no-referrer-when-downgrade';
      wrap.replaceChildren(frame);
    });
  });
}

function setupGuideFocus() {
  const focusField = () => {
    const hash = window.location.hash;
    if (hash !== '#guide' && hash !== '#guide-form') return;
    const form = document.getElementById('guide-form');
    const field = form && form.querySelector('input[name="name"]');
    if (!field) return;
    window.requestAnimationFrame(() => {
      field.focus({ preventScroll: true });
    });
  };
  focusField();
  window.addEventListener('hashchange', focusField);
}

function setupInstalls() {
  document.querySelectorAll('[data-install-root]').forEach((group) => {
    const root = group.querySelector('[data-install-carousel]');
    const dialog = group.querySelector('[data-install-lightbox]');
    if (!root || !dialog) return;
    setupInstall(root, dialog);
  });
}

function setupInstall(root, dialog) {
  const viewport = root.querySelector('.install-viewport');
  const track = root.querySelector('.install-track');
  const cards = [...track.children];
  const prev = root.querySelector('[data-install-prev]');
  const next = root.querySelector('[data-install-next]');
  const dotsWrap = root.querySelector('[data-install-dots]');
  const full = dialog.querySelector('[data-install-full]');
  const caption = dialog.querySelector('[data-install-caption]');
  let index = 0;
  let moved = false;

  const perView = () => (window.matchMedia('(min-width: 900px)').matches ? 3 : 1);
  const maxIndex = () => Math.max(0, cards.length - perView());

  const go = (nextIndex) => {
    index = Math.max(0, Math.min(maxIndex(), nextIndex));
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
    const step = cards[0].getBoundingClientRect().width + gap;
    track.style.transform = `translateX(${-index * step}px)`;
    prev.disabled = index === 0;
    next.disabled = index === maxIndex();
    dotsWrap.querySelectorAll('button').forEach((dot, dotIndex) => {
      dot.setAttribute('aria-current', dotIndex === index ? 'true' : 'false');
    });
  };

  const buildDots = () => {
    dotsWrap.replaceChildren();
    const count = maxIndex() + 1;
    for (let i = 0; i < count; i += 1) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Show installation group ${i + 1}`);
      dot.addEventListener('click', () => go(i));
      dotsWrap.append(dot);
    }
    go(Math.min(index, maxIndex()));
  };

  prev.addEventListener('click', () => go(index - 1));
  next.addEventListener('click', () => go(index + 1));

  let startX = 0;
  let dragging = false;
  viewport.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    dragging = true;
    moved = false;
    startX = event.clientX;
  });
  viewport.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    if (Math.abs(event.clientX - startX) > 10) moved = true;
  });
  const endDrag = (event) => {
    if (!dragging) return;
    dragging = false;
    const delta = event.clientX - startX;
    if (delta <= -40) go(index + 1);
    else if (delta >= 40) go(index - 1);
  };
  viewport.addEventListener('pointerup', endDrag);
  viewport.addEventListener('pointercancel', () => { dragging = false; });
  viewport.addEventListener('click', (event) => {
    if (!moved) return;
    event.preventDefault();
    event.stopPropagation();
    moved = false;
  }, true);

  root.querySelectorAll('[data-install-open]').forEach((button) => {
    button.addEventListener('click', () => {
      if (moved) return;
      full.src = button.dataset.src;
      full.alt = button.dataset.alt;
      caption.textContent = button.dataset.caption;
      if (typeof dialog.showModal === 'function') dialog.showModal();
    });
  });
  dialog.querySelector('[data-install-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  buildDots();
  window.addEventListener('resize', buildDots);
}

setupNav();
setupFaq();
setupReveal();
setupForms();
setupMaps();
setupGuideFocus();
setupInstalls();
