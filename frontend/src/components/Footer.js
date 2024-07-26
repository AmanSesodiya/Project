import React from 'react';
import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const SITEMAP = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', path: '/about-us' },
      { name: 'Careers', path: '/careers' },
      { name: 'Our Team', path: '/our-team' },
      { name: 'Projects', path: '/project' }
    ],
  },
  {
    title: 'Help Center',
    links: [
      { name: 'Discord', path: 'https://www.discord.com' },
      { name: 'Twitter', path: 'https://www.Twitter.com' },
      { name: 'GitHub', path: 'https://www.GitHub.com' },
      { name: 'Contact Us', path: '/contact-us' }
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', path: '/blog' },
      { name: 'Newsletter', path: '/news-letter' },
      { name: 'Free Products', path: '/free-products' },
      { name: 'Affiliate Program', path: '/affiliate-program' }
    ],
  },
  {
    title: 'Products',
    links: [
      { name: 'Templates', path: '/templates' },
      { name: 'UI Kits', path: '/ui-kits' },
      { name: 'Icons', path: '/icons' },
      { name: 'Mockups', path: '/mocks-up' }
    ],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, index) => (
            <div key={index}>
              <Typography
                variant="h6"
                color="lightBlue"
                className="mb-4 font-semibold uppercase"
              >
                {title}
              </Typography>
              <ul className="space-y-2">
                {links.map(({ name, path }, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={path}
                      className="text-gray-300 hover:text-lightBlue-400 transition-colors duration-200"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <Typography
              variant="small"
              className="text-center font-normal text-gray-400"
            >
              &copy; {currentYear}{' '}
              <a
                href="https://material-tailwind.com/"
                className="text-lightBlue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Material Tailwind
              </a>
              . All Rights Reserved.
            </Typography>
            <div className="flex gap-4 mt-4 md:mt-0 text-gray-400">
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="opacity-80 transition-opacity hover:opacity-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.444 4.834c-.835.37-1.73.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.536-1.897.924-2.958 1.135-.85-.904-2.06-1.47-3.397-1.47-2.577 0-4.665 2.09-4.665 4.667 0 .366.04.722.122 1.064-3.88-.194-7.32-2.056-9.63-4.883-.4.692-.63 1.49-.63 2.34 0 1.616.823 3.045 2.073 3.883-.765-.025-1.48-.234-2.105-.58v.057c0 2.257 1.607 4.142 3.743 4.568-.392.107-.805.163-1.23.163-.302 0-.596-.03-.884-.085.596 1.857 2.325 3.206 4.375 3.244-1.604 1.256-3.63 2-5.827 2-.378 0-.75-.023-1.12-.066 2.078 1.334 4.548 2.11 7.193 2.11 8.62 0 13.328-7.145 13.328-13.328 0-.204-.005-.41-.014-.61.918-.662 1.717-1.49 2.35-2.43z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="opacity-80 transition-opacity hover:opacity-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.153-1.772 4.902 4.902 0 01-1.772-1.153c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.231 2.013 9.571 2 12.315 2z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M12 5.838c-3.413 0-6.176 2.763-6.176 6.176S8.587 18.19 12 18.19s6.176-2.763 6.176-6.176S15.413 5.838 12 5.838zM12 16.19a4.014 4.014 0 100-8.028 4.014 4.014 0 000 8.028zm7.846-10.604a1.396 1.396 0 11-2.792 0 1.396 1.396 0 012.792 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://github.com"
                aria-label="GitHub"
                className="opacity-80 transition-opacity hover:opacity-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.88.617.113.843-.267.843-.595 0-.293-.011-1.07-.017-2.1-3.338.726-4.042-1.612-4.042-1.612-.561-1.428-1.373-1.808-1.373-1.808-1.122-.768.085-.753.085-.753 1.24.087 1.892 1.273 1.892 1.273 1.103 1.888 2.891 1.342 3.595 1.026.112-.798.432-1.343.787-1.653-2.665-.304-5.467-1.334-5.467-5.932 0-1.311.47-2.382 1.236-3.222-.124-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.047.137 3.005.403 2.291-1.552 3.297-1.23 3.297-1.23.653 1.649.241 2.873.118 3.176.77.84 1.234 1.911 1.234 3.222 0 4.61-2.807 5.625-5.479 5.922.443.38.837 1.134.837 2.287 0 1.65-.014 2.982-.014 3.386 0 .33.225.713.847.592C18.344 21.127 22 16.99 22 12c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
