// Site-wide behaviour: scroll reveals, the light-trail dividers, the header state and the phone menu.
// Everything here is progressive: without JavaScript the page is complete and fully visible.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Reveal [data-reveal] blocks and draw [data-trail] dividers once, as they enter the screen.
const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-trail]');

if (reduceMotion.matches || !('IntersectionObserver' in window)) {
  targets.forEach((el) => el.classList.add('is-in'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px' },
  );
  targets.forEach((el) => observer.observe(el));
}

// Header gets its solid ground and hairline once the page has scrolled.
const header = document.querySelector<HTMLElement>('[data-header]');
if (header) {
  const sentinel = document.createElement('div');
  sentinel.setAttribute('aria-hidden', 'true');
  sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:8px;pointer-events:none;';
  document.body.prepend(sentinel);
  new IntersectionObserver(([entry]) => {
    header.toggleAttribute('data-scrolled', !entry.isIntersecting);
  }).observe(sentinel);
}

// Phone menu: a native <dialog>, so focus is held inside and Escape closes it.
const menu = document.querySelector<HTMLDialogElement>('[data-menu]');
const openButton = document.querySelector<HTMLButtonElement>('[data-menu-open]');
const closeButton = document.querySelector<HTMLButtonElement>('[data-menu-close]');

if (menu && openButton) {
  openButton.addEventListener('click', () => {
    menu.showModal();
    openButton.setAttribute('aria-expanded', 'true');
  });
  closeButton?.addEventListener('click', () => menu.close());
  menu.addEventListener('close', () => {
    openButton.setAttribute('aria-expanded', 'false');
    openButton.focus();
  });
  // Links inside the menu close it so in-page anchors land correctly.
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => menu.close()));
}
