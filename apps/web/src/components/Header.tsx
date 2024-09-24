'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'; // Import ikon burger dari react-icons

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Menambahkan tipe boolean untuk state

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-slate-100 w-full h-[full] flex items-center shadow-2xl sticky top-0 z-50">
        <div className="w-full flex justify-between items-center py-[20px]">
          <div className="flex flex-1 pl-[100px] text-3xl">
            <span className="text-orange-400 font-bold">Job</span>
            <span className="text-gray-700 font-bold">Venture</span>
          </div>

          <div className="hidden lg:flex text-[25px] flex-1 gap-[80px] justify-center items-center">
            <Link href="/home" className="hover:text-orange-400 cursor-pointer">HOME</Link>
            <Link href="/jobList" className="hover:text-orange-400 cursor-pointer">JOBS</Link>
            <Link href="/companyJob" className="hover:text-orange-400 cursor-pointer">FOR COMPANY</Link>
          </div>

          <div className="hidden lg:flex text-[25px] gap-[30px] flex-1 items-center justify-end pr-[100px]">
            <Link href="/register" className="bg-orange-400 py-[10px] w-[130px] rounded-xl flex items-center justify-center">
              Register
            </Link>
            <Link href="/authenticate" className="bg-orange-400 py-[10px] w-[130px] rounded-xl flex items-center justify-center">
              Login
            </Link>
          </div>

          <div className="lg:hidden pr-[50px]">
            <FaBars className="text-3xl cursor-pointer" onClick={toggleDropdown} />
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden absolute top-full right-0 bg-slate-100 shadow-lg rounded-lg py-4 w-48 mt-2">
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/home" className="block px-4 py-2 hover:bg-gray-200">HOME</Link>
              </li>
              <li>
                <Link href="/jobList" className="block px-4 py-2 hover:bg-gray-200">JOBS</Link>
              </li>
              <li>
                <Link href="/companyJob" className="block px-4 py-2 hover:bg-gray-200">FOR COMPANY</Link>
              </li>
              <li>
                <Link href="/register" className="block px-4 py-2 hover:bg-gray-200">Register</Link>
              </li>
              <li>
                <Link href="/authenticate" className="block px-4 py-2 hover:bg-gray-200">Login</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
