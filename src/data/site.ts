// Single source of truth for business details. Change a value here and every page updates.

// Temporary free Cloudflare Pages address. Replace once a domain is chosen.
export const SITE_URL = 'https://atlantic-co-media.pages.dev';

export const business = {
  name: 'Atlantic & Co. Media',
  city: 'Moncton',
  province: 'New Brunswick',
  provinceCode: 'NB',
  country: 'CA',
  instagramHandle: '@atlantic.co.media',
  instagramUrl: 'https://www.instagram.com/atlantic.co.media',
  // Opens a direct message in the Instagram app on phones.
  instagramDmUrl: 'https://ig.me/m/atlantic.co.media',
  // No public email yet. Set to 'hello@example.ca' style string to show email links site-wide.
  email: null as string | null,
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Work', href: '/work/' },
  { label: 'About', href: '/about/' },
  { label: 'Process', href: '/process/' },
  { label: 'Contact', href: '/contact/' },
];

export const messageUs = { label: 'Message us', href: '/contact/' };
