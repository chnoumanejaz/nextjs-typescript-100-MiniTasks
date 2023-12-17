import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex flex-row gap-3 items-center justify-center md:justify-start md:px-6 border-b group border-violet-200 h-[51px] w-full">
      <span className="h-7 w-7 overflow-hidden rounded-md flex justify-center items-center p-4">
        <Image
          src="/logo.png"
          alt="Logo"
          height={50}
          width={50}
          className="rounded-md min-h-[30px] min-w-[30px] h-[30px] w-[30px] group-hover:brightness-125 origin-center transition"
        />
      </span>
      <span className="font-semibold text-lg hidden md:flex relative group-hover:tracking-wide transition-all">
        Mini Solutions
        <p className="text-xs absolute bottom-[-0.6rem] text-black/40 right-0">
          by{' '}
          <span className="group-hover:text-black transition group-hover:tracking-wide">
            Nouman
          </span>
        </p>
      </span>
    </Link>
  );
};

export default Logo;
