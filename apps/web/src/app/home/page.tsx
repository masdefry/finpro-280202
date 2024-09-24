'use client'
import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";

export default function HomePage() {
  return (
    <>
      <div className="bg-slate-100 w-full">

        <div className="relative bg-[url('https://awsimages.detik.net.id/community/media/visual/2022/09/05/ilustrasi-mencari-kerja.jpeg?w=1200')] bg-yellow-800 w-full lg:h-[600px] h-[200px] sm:bg-no-repeat bg-center bg-cover flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative flex flex-col gap-[30px] p-10 lg:p-40 justify-center">
                <h3 className="text-white font-bold text-2xl lg:text-5xl text-center">
                    Find Job Vacancies in Indonesia
                </h3>
                <div className="flex gap-[20px]">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Position or Company"
                            className="w-full py-[15px] px-[30px] pr-10 text-gray-700 bg-white border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <IoSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
                    </div>
                    <button className="button bg-orange-400 text-white px-[20px]">
                        Search
                    </button>
                </div>

            </div>
        </div>

        <div className="py-[30px] flex justify-center text-3xl font-bold text-center">
            Most Popular Job Categories
        </div>
        <div className="pt-[30px] flex justify-center items-center pb-[60px]">
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[50px] font-bold">
                <Link href="/jobList" className="bg-orange-400  text-white shadow-xl px-[50px] py-[20px] rounded-2xl flex justify-center">
                    Marketing
                </Link>
                <Link href="/jobList" className="bg-orange-400  text-white shadow-xl px-[50px] py-[20px] rounded-2xl flex justify-center">
                    Human Resource
                </Link>
                <Link href="/jobList" className="bg-orange-400  text-white shadow-xl px-[50px] py-[20px] rounded-2xl flex justify-center">
                    Operations
                </Link>
                <Link href="/jobList" className="bg-orange-400  text-white shadow-xl px-[50px] py-[20px] rounded-2xl flex justify-center">
                    Supply Chain & Logistics
                </Link>
                <Link href="/jobList" className="bg-orange-400  text-white shadow-xl px-[50px] py-[20px] rounded-2xl flex justify-center">
                    Accounting & Finances
                </Link>
                <Link href="/jobList" className="bg-orange-400  text-white shadow-xl px-[50px] py-[20px] rounded-2xl flex justify-center">
                    Design
                </Link>
                <Link href="/jobList" className="bg-orange-400  text-white shadow-xl px-[50px] py-[20px] rounded-2xl flex justify-center">
                    Information Technology
                </Link>
                <Link href="/jobList" className="bg-orange-400  text-white shadow-xl px-[50px] py-[20px] rounded-2xl flex justify-center">
                    Media & Communication
                </Link>
                <Link href="/jobList" className="bg-orange-400  text-white shadow-xl px-[50px] py-[20px] rounded-2xl flex justify-center">
                    Sales
                </Link>
            </div>
        </div>
        
        <div className="bg-gray-700 w-full flex flex-col items-center justify-center py-[80px]">
            <div className="text-white text-3xl font-bold pb-[60px]">
                Why Choose Us
            </div>
            <div className="grid lg:grid-cols-3 lg:px-[40px] gap-[30px]">
                <div className="bg-orange-400 text-white flex flex-col justify-start items-center text-center gap-[20px] rounded py-[50px] shadow-2xl">
                    <div className="text-2xl text-black font-bold">
                    Wide Career Opportunities
                    </div>
                    <div className="text-xl">
                    Jobventure provides access to a wide range of job vacancies across various industries, helping you find positions that match your skills and interests.
                    </div>
                </div>
                <div className="bg-orange-400 text-white flex flex-col justify-start items-center text-center gap-[20px] rounded py-[50px] shadow-2xl">
                    <div className="text-2xl text-black font-bold">
                    Easy and Efficient Navigation
                    </div>
                    <div className="text-xl">
                    With an intuitive interface, Jobventure makes it easy for users to browse and apply for their dream jobs quickly and efficiently.
                    </div>
                </div>
                <div className="bg-orange-400 text-white flex flex-col justify-start items-center text-center gap-[20px] rounded py-[50px] shadow-2xl">
                    <div className="text-2xl text-black font-bold">
                    Accurate Job Recommendations
                    </div>
                    <div className="text-xl">
                    Jobventure uses smart algorithms to provide job recommendations that match your profile and preferences, helping you find the best opportunities more quickly.
                    </div>
                </div>
            </div>
        </div>


        <div className="relative bg-[url('https://preply.com/wp-content/uploads/2023/05/imgonline-com-ua-CompressBySize-GJIX5N9aYa9o-scaled.jpg')] bg-yellow-800 w-full lg:h-[600px] h-[600px] sm:bg-no-repeat bg-center bg-cover flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative flex flex-col gap-[50px] p-10 lg:py-[30px] lg:px-[160px] items-center justify-center">
                <h3 className="text-white font-bold text-2xl lg:text-4xl">
                About Us
                </h3>
                <div className="text-white text-xl lg:text-[30px] text-center">
                Welcome to Jobventure, the platform that helps you find your dream job. With features designed to simplify your career search, Jobventure is ready to bridge the gap between you and the best opportunities. Our motto, "Start your exciting career adventure," reflects our passion for guiding you on a journey full of opportunities and new adventures.
                </div>
            </div>
        </div>

        {/* <div className="bg-orange-400 py-[30px] px-[70px]">
            <div className="flex">
                <div className="flex flex-[50%] justify-center items-center">
                    <Image
                        src={"https://preply.com/wp-content/uploads/2023/05/imgonline-com-ua-CompressBySize-GJIX5N9aYa9o-scaled.jpg"}
                        width={650}
                        height={800}
                        alt="about"
                        className="flex items-center justify-center shadow-xl"
                    />
                </div>
                <div className="flex flex-col flex-[50%] justify-center items-center text-center gap-[50px] text-white">
                    <div className="text-4xl font-bold">
                        Tentang Kami
                    </div>
                    <div className="text-[25px]">
                        Selamat datang di Jobventure, platform yang membantu Anda menemukan pekerjaan impian Anda. Dengan fitur-fitur yang dirancang untuk memudahkan pencarian karier, Jobventure siap menjadi jembatan antara Anda dan peluang terbaik. Moto kami, "Start your exciting career adventure," mencerminkan semangat kami untuk mendampingi Anda memulai perjalanan karier yang penuh peluang dan petualangan baru.
                    </div>
                </div>
            </div>
        </div> */}


      </div>
    </>
  );
}
