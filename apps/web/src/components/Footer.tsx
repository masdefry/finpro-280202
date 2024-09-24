'use client'
import Link from "next/link"

export const Footer = () => {
  return(
  <>
    <div className="bg-slate-200 w-full h-full flex items-center shadow-2xl sticky">
      <div className="flex lg:flex-row flex-col w-full h-full py-[50px]">
        <div className="flex flex-1 ">
          <div className="flex flex-1 pl-[100px] text-5xl items-center justify-center">
            <span className="text-orange-400 font-bold">
              Job
            </span>
            <span className="text-gray-700 font-bold">
              Venture
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-1 text-xl gap-[20px] lg:gap-[50px] pt-[40px] lg:pt-0">
        <Link href="/home" className="hover:text-orange-400 cursor-pointer">HOME</Link>
        <Link href="/jobList" className="hover:text-orange-400 cursor-pointer">JOBS</Link>
        <Link href="/companyJob" className="hover:text-orange-400 cursor-pointer">FOR COMPANY</Link>
        </div>

        <div className="flex flex-col flex-1 gap-[30px] pt-[40px] lg:pt-0">
          <div className="font-bold text-xl">
            Tentang JobVenture
          </div>
          <div className="lg:pr-[200px] text-justify">
          JobVenture is a job search platform that connects you with the best career opportunities across various industries. Start your career adventure with JobVenture and achieve a brighter future.
          </div>
        </div>
      </div>
    </div>
  </>
  )
};
