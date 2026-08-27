import React from 'react';

export const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const TwitterIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const FigmaIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
  </svg>
);

export const ReactIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

export const TypescriptIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="20" fill="#3178C6"/>
    <path d="M74.8 82.5c2.4 3.7 6.4 5.9 11.2 5.9 7 0 11.4-4 11.4-11.4V36h14.6v41c0 14.8-9.4 23-26 23-11.2 0-20.2-5.4-24.8-14.8l13.6-7.7zM16 36h48v12.4H42.4v50.8H27.8V48.4H16V36z" fill="#ffffff"/>
  </svg>
);

export const TailwindIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" fill="#38BDF8"/>
  </svg>
);

export const AwsIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 10.5C6.4 10.5 5.5 11.4 5.5 12.5C5.5 13.6 6.4 14.5 7.5 14.5C8.6 14.5 9.5 13.6 9.5 12.5C9.5 11.4 8.6 10.5 7.5 10.5Z" fill="#FF9900"/>
    <path d="M18.8 16.5C16.8 18 14.2 18.8 11.5 18.8C7.5 18.8 3.9 17.2 2 14.6C1.8 14.3 2 13.9 2.4 14.1C5.7 16 9.5 17.1 13.4 16.9C15.8 16.8 18.3 16.1 20.4 15C20.8 14.8 21.1 15.2 20.8 15.5C20.2 15.9 19.5 16.2 18.8 16.5Z" fill="#FF9900"/>
    <path d="M21.5 14.2C21.3 13.9 20.4 14.3 19.3 14.8C18.2 15.3 17.2 15.7 17.5 16C17.7 16.2 18.8 16 19.9 15.4C21 14.8 21.6 14.4 21.5 14.2Z" fill="#FF9900"/>
    <path d="M12 4L14 9H10L12 4Z" fill="#FF9900"/>
  </svg>
);

export const CanvaIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#00C4CC"/>
    <path d="M14.8 15.2C13.5 15.2 12.6 14.4 12.2 13.3C11.5 14.5 10.4 15.2 9 15.2C6.8 15.2 5.2 13.3 5.2 10.6C5.2 7.7 7.2 5.8 9.8 5.8C11.1 5.8 12.1 6.4 12.6 7.5C13.1 6.4 14.1 5.8 15.2 5.8C17 5.8 18.4 7.2 18.4 9.4C18.4 12.8 16.7 15.2 14.8 15.2ZM9.7 13.5C11 13.5 12 12.1 12 10.4C12 8.8 11.1 7.5 9.8 7.5C8.5 7.5 7.4 8.8 7.4 10.5C7.4 12.2 8.4 13.5 9.7 13.5Z" fill="white"/>
  </svg>
);

export const AdobeIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#FF0000"/>
    <path d="M14.9 4H19.5V20H15.8L12.9 12.8L14.9 4ZM9.1 4H4.5V20H8.2L11.1 12.8L9.1 4ZM12 14.9L14 20H10L12 14.9Z" fill="white"/>
  </svg>
);

export const ZscalerIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#0077C8"/>
    <path d="M7 17L14.5 7H17L9.5 17H7ZM9.5 7L7 11.5H9.5V7ZM14.5 17L17 12.5H14.5V17Z" fill="white"/>
  </svg>
);

export const AiVibeIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.4 7.6L20 10L14.4 12.4L12 18L9.6 12.4L4 10L9.6 7.6L12 2Z" fill="url(#aiVibeGrad)" />
    <path d="M19 14L20 16.5L22.5 17.5L20 18.5L19 21L18 18.5L15.5 17.5L18 16.5L19 14Z" fill="#38BDF8" />
    <path d="M5 14L5.8 16L7.8 16.8L5.8 17.6L5 19.6L4.2 17.6L2.2 16.8L4.2 16L5 14Z" fill="#F43F5E" />
    <defs>
      <linearGradient id="aiVibeGrad" x1="4" y1="2" x2="20" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B5CF6" />
        <stop offset="0.5" stopColor="#EC4899" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </svg>
);
