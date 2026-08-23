import React from 'react';

export interface ToolItem {
  id: string;
  name: string;
  category?: string;
  percentage: string;
  percentNum: number;
  iconSvg: React.ReactNode;
}

export const INITIAL_TOOLS: ToolItem[] = [
  {
    id: 'figma',
    name: 'Figma',
    category: 'Design & Prototyping',
    percentage: '98%',
    percentNum: 98,
    iconSvg: (
      <svg viewBox="0 0 38 57" className="w-5 h-7 fill-current">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'Development',
    percentage: '95%',
    percentNum: 95,
    iconSvg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path
          d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.227a1 1 0 0 0-.006 1.42l3.92 3.683-3.92 3.68a1 1 0 0 0 .006 1.42l1.322 1.168a1 1 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 20.6V3.93a1.5 1.5 0 0 0-.85-1.343zM18 17.587l-6.863-5.25L18 7.087v10.5z"
          fill="#007ACC"
        />
      </svg>
    ),
  },
  {
    id: 'react',
    name: 'React',
    category: 'Front-End Library',
    percentage: '92%',
    percentNum: 92,
    iconSvg: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-7 h-7 text-[#61DAFB] fill-none animate-[spin_12s_linear_infinite]">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Styling & Design',
    percentage: '90%',
    percentNum: 90,
    iconSvg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#38BDF8]">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    id: 'photoshop',
    name: 'Photoshop',
    category: 'Creative Cloud',
    percentage: '90%',
    percentNum: 90,
    iconSvg: (
      <div className="w-8 h-8 rounded-lg bg-[#001E36] border border-[#31A8FF]/50 flex items-center justify-center font-bold text-[#31A8FF] text-xs tracking-tighter shadow-sm">
        Ps
      </div>
    ),
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Version Control',
    percentage: '95%',
    percentNum: 95,
    iconSvg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#F05032]">
        <path d="M21.62 10.74L13.26 2.38a1.69 1.69 0 0 0-2.39 0l-1.9 1.9 2.52 2.52c.6-.2 1.3-.06 1.78.42.48.48.62 1.18.42 1.78l2.43 2.43c.6-.2 1.3-.06 1.78.42.66.66.66 1.73 0 2.39s-1.73.66-2.39 0a1.69 1.69 0 0 1-.42-1.78l-2.43-2.43c-.2.06-.41.09-.62.09s-.42-.03-.62-.09l-2.43 2.43c.2.6.06 1.3-.42 1.78-.66.66-1.73.66-2.39 0s-.66-1.73 0-2.39c.48-.48 1.18-.62 1.78-.42l2.43-2.43a1.69 1.69 0 0 1-.09-.62c0-.21.03-.42.09-.62L6.8 4.88 2.38 9.3a1.69 1.69 0 0 0 0 2.39l8.36 8.36a1.69 1.69 0 0 0 2.39 0l8.49-8.49a1.69 1.69 0 0 0 0-2.82z" />
      </svg>
    ),
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Language',
    percentage: '90%',
    percentNum: 90,
    iconSvg: (
      <div className="w-8 h-8 rounded-lg bg-[#3178C6] flex items-center justify-center font-bold text-white text-xs tracking-tighter shadow-sm">
        TS
      </div>
    ),
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Framework',
    percentage: '88%',
    percentNum: 88,
    iconSvg: (
      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-black text-xs shadow-sm">
        N
      </div>
    ),
  },
  {
    id: 'framer',
    name: 'Framer',
    category: 'Interaction Design',
    percentage: '92%',
    percentNum: 92,
    iconSvg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#0055FF]">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'illustrator',
    name: 'Illustrator',
    category: 'Vector Graphics',
    percentage: '86%',
    percentNum: 86,
    iconSvg: (
      <div className="w-8 h-8 rounded-lg bg-[#330000] border border-[#FF9A00]/50 flex items-center justify-center font-bold text-[#FF9A00] text-xs tracking-tighter shadow-sm">
        Ai
      </div>
    ),
  },
];
