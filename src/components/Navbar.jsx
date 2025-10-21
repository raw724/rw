import React from 'react';

export default function Navbar({ theme, setTheme }) {
  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 glass px-4 py-2 rounded-full">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[--accent-from] to-[--accent-to] flex items-center justify-center text-white font-bold">RW</div>
          <div>
            <div className="text-sm font-semibold">Russell Walton</div>
            <div className="text-xs text-[--muted]">Activator. Visionary. Do-er.</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="btn btn-ghost">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
    </header>
  );
}
