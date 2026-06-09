import React from 'react';

interface LogoIconProps {
  className?: string;
}

export default function LogoIcon({ className = "w-10 h-10" }: LogoIconProps) {
  return (
    <svg
      id="formmitra-visual-logo"
      viewBox="0 0 200 200"
      className={`${className} transition-transform duration-300 hover:rotate-2`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Golden-Yellow Container with smooth rounded corners */}
      <rect
        id="logo-bg"
        width="200"
        height="200"
        rx="54"
        fill="#F0B216"
      />

      {/* Cream-White Document Sheet */}
      <path
        id="logo-document"
        d="M 60 45 L 115 45 L 140 70 L 140 155 L 60 155 Z"
        fill="#FAF5E4"
        stroke="#232E48"
        strokeWidth="10"
        strokeLinejoin="round"
      />

      {/* Dark Slate Folded Corner */}
      <path
        id="logo-fold"
        d="M 115 45 L 115 70 L 140 70 Z"
        fill="#232E48"
        stroke="#232E48"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Horizontal Document lines */}
      <path
        id="logo-text-lines"
        d="M 75 80 H 125 M 75 98 H 125 M 75 116 H 125 M 75 134 H 105"
        stroke="#232E48"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Bottom Right Deep Blue Security/Verify Shield Badge Overlay */}
      <g id="logo-badge-group">
        {/* Outer dark blue border shield circle */}
        <circle
          cx="135"
          cy="145"
          r="26"
          fill="#232E48"
        />
        {/* Golden-Yellow Star/Crest inside */}
        <path
          d="M 135 129 L 138 138 L 147 138 L 140 144 L 143 153 L 135 147 L 127 153 L 130 144 L 123 138 L 132 138 Z"
          fill="#F0B216"
        />
      </g>
    </svg>
  );
}
