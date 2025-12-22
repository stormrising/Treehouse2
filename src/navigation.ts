import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
   {
      text: 'What we do',
      href: getPermalink('/#whatwedo'),
    },
    {
      text: 'Projects',
      href: getPermalink('/#projects'),
    },
    {
      text: 'Collaborate',
      href: getPermalink('/#collab'),
    },
    {
      text: 'Partnerships',
      href: getPermalink('/#partnerships'),
    },
  ],
  actions: [{ text: 'Contact', href: getPermalink('/#contact'), target: '_self' }],
};

export const footerData = {
  links: [
    
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
   
  ],
  footNote: `
     © 2025 ANRF· All rights reserved.
  `,
};
