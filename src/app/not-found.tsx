import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A08] text-[#D8D2C4] flex flex-col items-center justify-center space-y-6 text-center p-6">
      <h1 className="font-bebas text-7xl sm:text-9xl text-[#9FD8FF]">404</h1>
      <h2 className="font-garamond text-3xl text-[#D8D2C4]">Page Not Found</h2>
      <p className="text-[#9D988B] text-sm max-w-md font-light">
        The requested neural coordinate does not exist in this galaxy.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-[#D8D2C4] text-[#0A0A08] font-mono text-xs uppercase tracking-widest hover:bg-[#9FD8FF] transition-all"
      >
        Return to Home
      </Link>
    </div>
  );
}
