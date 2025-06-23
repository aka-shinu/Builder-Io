"use client";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="w-full h-full pb-3 bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="WeFRAME Tech Logo"
                width={120}
                height={28}
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/ai-consulting" className="text-[#475467] hover:text-black text-base font-medium">
              AI Consulting
            </Link>
            <Link href="/ai-toolbox" className="text-[#475467] hover:text-black text-base font-medium">
              AI Toolbox
            </Link>
            <Link href="/content-health" className="text-[#475467] hover:text-black text-base font-medium">
              Content Health
            </Link>
            <div className="relative">
              <button className="flex items-center text-[#475467] hover:text-black text-base font-medium">
                Resources
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="/login"
              className="text-[#00D2C6] border border-[#00D2C6] rounded-lg hover:text-black text-base font-medium px-6 py-2"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-[#00D2C6] text-white text-base font-medium px-5 py-2.5 rounded-lg hover:bg-[#00bfb3] transition-colors"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#475467]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
