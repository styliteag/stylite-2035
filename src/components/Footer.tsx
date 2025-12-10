// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-50 p-8 text-center mt-auto border-t border-zinc-800">
      <div className="container mx-auto">
        <p className="text-sm text-zinc-400">
          &copy; {new Date().getFullYear()} Stylite 2035. All rights reserved.
        </p>
        <p className="text-sm text-zinc-400 mt-2">
          Pioneering the future of IT infrastructure with AI and sustainable practices.
        </p>
      </div>
    </footer>
  );
}
