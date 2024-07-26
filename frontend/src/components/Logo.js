import React from 'react';

const Logo = ({ w = 300, h = 150 }) => {
  return (
    <svg width={w} height={h} viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#FF512F', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#DD2476', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <g id="logo-icon" transform="translate(30, 30)">
        <circle cx="50" cy="50" r="50" fill="url(#grad1)" />
        <text x="50" y="70" textAnchor="middle" fontSize="48" fill="#FFF" fontWeight="bold" fontFamily="Arial">
          DD
        </text>
      </g>
      <g id="logo-text" transform="translate(150, 90)">
        <text x="0" y="0" fontSize="70" fill="#292929" fontWeight="bold" fontFamily="Arial">
          Digital
        </text>
        <text x="0" y="70" fontSize="70" fill="url(#grad1)" fontWeight="bold" fontFamily="Arial">
          Deals
        </text>
      </g>
    </svg>
  );
};

export default Logo;
