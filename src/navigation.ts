import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

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
      text: 'Contact',
      href: getPermalink('/#contact'),
    },
  ],
  actions: [{ text: 'Contact', href: getPermalink('/#contact'), target: '_blank' }],
};

export const footerData = {
 <div class="space-y-2 text-sm leading-relaxed">
      <p>
       We’d love to hear from you. Whether you are a researcher, student, farmer, or policymaker — let’s restore ecosystems together.
      </p>

      <p>
        📍 23, Srinivasa Raghavan Road, Srinivasa Nagar, Old Perungalathur,
        Tambaram, Chennai – 600063, Tamil Nadu
      </p>

      <p>
        📧
        <a href="mailto:contact@ambathy.in" class="underline hover:no-underline">
          contact@ambathy.in
        </a>
        |
        <a href="mailto:landfortrees@gmail.com" class="underline hover:no-underline">
          landfortrees@gmail.com
        </a>
      </p>

      <p>
        📱
        <a href="tel:+918668084763" class="underline hover:no-underline">
          +91 86680 84763
        </a>
      </p>
    </div>
  
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  
  links: [
    // You can keep this minimal or add columns later
    ],

  socialLinks: [
    // Add later if you want (LinkedIn, Instagram, etc.)
    // Example:
    // { text: 'LinkedIn', href: 'https://linkedin.com/company/...' , icon: 'tabler:brand-linkedin' },
  ],
  ],
  
  footNote: `
    © 2025 ANRF· All rights reserved.
  `,
};
