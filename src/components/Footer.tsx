export default function Footer() {
  return (
    <footer className="bg-background py-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 w-full max-w-[900px] mx-auto gap-4 text-[9px] uppercase tracking-[0.1em] text-[#353535]">
        <div>© {new Date().getFullYear()} THE DIGITAL CURATOR.</div>
        <div className="flex gap-8">
          <a className="hover:text-secondary transition-colors" href="#">Archive</a>
          <a className="hover:text-secondary transition-colors" href="#">Contact</a>
          <a className="hover:text-secondary transition-colors" href="#">Colophon</a>
        </div>
      </div>
    </footer>
  );
}
