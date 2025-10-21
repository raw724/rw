import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 text-center text-[--muted] text-sm">
      © {new Date().getFullYear()} Russell Walton. All rights reserved.
    </footer>
  );
}
