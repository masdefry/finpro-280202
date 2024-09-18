import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import { MdArrowDropDown, MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link"

export default function jobList(){
    return(
        <>
            <div className="relative bg-[url('https://awsimages.detik.net.id/community/media/visual/2022/09/05/ilustrasi-mencari-kerja.jpeg?w=1200')] bg-yellow-800 w-full lg:h-[200px] h-[130px] sm:bg-no-repeat bg-center bg-cover flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative flex p-10 justify-center w-full">
                    <div className="flex gap-[20px] w-[1000px]">
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

            <div className="bg-slate-100 ">
                <div className="bg-white w-full pt-10 flex flex-col lg:flex-row">
                    <div className="hidden lg:block w-[15%]"></div>
                    
                    <div className="w-full h-full lg:w-[25%] px-4 lg:px-4 py-[10px] mb-8 lg:mb-0 flex flex-col gap-2 shadow-2xl rounded-xl">
                        <div>
                            <div className="pb-[5px] flex text-[25px] justify-between items-center border-b-[5px] border-orange-400">
                                <div>
                                    Sort
                                </div>
                                <div className="text-gray-700 text-[18px]">
                                    Reset
                                </div>
                            </div>
                        </div>
                        <div className=""><input type='radio' name="price" className="mr-[5px]"/>Newest</div>
                        <div className=""><input type='radio' name="price" className="mr-[5px]"/>Relevance</div>
                    
                        <div className="pt-[10px]">
                            <div className="pb-[5px] flex text-[25px] justify-between items-center border-b-[5px] border-orange-400">
                                <div>
                                    Categories
                                </div>
                            </div>
                        </div>
                        <div className="button text-black bg-orange-400 rounded-xl p-[5px]">
                            Marketing
                        </div>
                        <div className="button text-black rounded-xl p-[5px]">
                            Human Resource
                        </div>
                        <div className="button text-black rounded-xl p-[5px]">
                            Operation
                        </div>
                        <div className="button text-black rounded-xl p-[5px]">
                            Supply Chain & Logistics
                        </div>
                        <div className="button text-black rounded-xl p-[5px]">
                            Accounting & Finances
                        </div>
                        <div className="button text-black rounded-xl p-[5px]">
                            Design
                        </div>
                        <div className="button text-black rounded-xl p-[5px]">
                            Information Technology
                        </div>
                        <div className="button text-black rounded-xl p-[5px]">
                            Media & Communication
                        </div>
                        <div className="button text-black rounded-xl p-[5px]">
                            Sales
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3 px-4 lg:px-8">

                    <div className="flex">
                        <div className="w-full py-[10px] text-2xl font-bold border-b-4 border-orange-400">
                            Marketing
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 py-10">
                        <div className="pt-[20px] px-[20px] py-[25px] gap-[5px] flex flex-col items-start justify bg-white shadow-xl rounded-lg">
                            <Image
                                    src="https://creator.design/_logos/65/logo-65_07.png"
                                    width={130}
                                    height={255}
                                    alt="company"
                                />
                                <div className="font-bold text-[23px]">
                                Social Media Specialist / Marketing Communication
                                </div>
                                <div className="pb-[15px] text-[21px]">
                                PT Noah Budi Sejahtera
                                </div>
                                <div className="text-[21px]">
                                Tangerang, Banten
                                </div>
                                <div className="text-[21px] pb-[20px]">
                                Rp 5.000.000
                                </div>

                                <div className="bg-blue-500 w-full text-[21px] flex items-center justify-center">
                                    <Link href="/jobDetail" className="bg-orange-400 w-full text-[21px] py-[10px] flex justify-center">
                                    More Detail
                                    </Link>
                                </div>

                        </div>

                        <div className="pt-[20px] px-[20px] py-[25px] gap-[5px] flex flex-col items-start justify bg-white shadow-xl rounded-lg">
                            <Image
                                    src="https://creator.design/_logos/65/logo-65_07.png"
                                    width={130}
                                    height={255}
                                    alt="company"
                                />
                                <div className="font-bold text-[23px]">
                                Social Media Specialist / Marketing Communication
                                </div>
                                <div className="pb-[15px] text-[21px]">
                                PT Noah Budi Sejahtera
                                </div>
                                <div className="text-[21px]">
                                Tangerang, Banten
                                </div>
                                <div className="text-[21px] pb-[20px]">
                                Rp 5.000.000
                                </div>

                                <div className="bg-blue-500 w-full text-[21px] flex items-center justify-center">
                                    <Link href="/jobDetail" className="bg-orange-400 w-full text-[21px] py-[10px] flex justify-center">
                                    More Detail
                                    </Link>
                                </div>

                        </div>

                        <div className="pt-[20px] px-[20px] py-[25px] gap-[5px] flex flex-col items-start justify bg-white shadow-xl rounded-lg">
                            <Image
                                    src="https://creator.design/_logos/65/logo-65_07.png"
                                    width={130}
                                    height={255}
                                    alt="company"
                                />
                                <div className="font-bold text-[23px]">
                                Social Media Specialist / Marketing Communication
                                </div>
                                <div className="pb-[15px] text-[21px]">
                                PT Noah Budi Sejahtera
                                </div>
                                <div className="text-[21px]">
                                Tangerang, Banten
                                </div>
                                <div className="text-[21px] pb-[20px]">
                                Rp 5.000.000
                                </div>

                                <div className="bg-blue-500 w-full text-[21px] flex items-center justify-center">
                                    <Link href="/jobDetail" className="bg-orange-400 w-full text-[21px] py-[10px] flex justify-center">
                                    More Detail
                                    </Link>
                                </div>

                        </div>

                        <div className="pt-[20px] px-[20px] py-[25px] gap-[5px] flex flex-col items-start justify bg-white shadow-xl rounded-lg">
                            <Image
                                    src="https://creator.design/_logos/65/logo-65_07.png"
                                    width={130}
                                    height={255}
                                    alt="company"
                                />
                                <div className="font-bold text-[23px]">
                                Social Media Specialist / Marketing Communication
                                </div>
                                <div className="pb-[15px] text-[21px]">
                                PT Noah Budi Sejahtera
                                </div>
                                <div className="text-[21px]">
                                Tangerang, Banten
                                </div>
                                <div className="text-[21px] pb-[20px]">
                                Rp 5.000.000
                                </div>

                                <div className="bg-blue-500 w-full text-[21px] flex items-center justify-center">
                                    <Link href="/jobDetail" className="bg-orange-400 w-full text-[21px] py-[10px] flex justify-center">
                                    More Detail
                                    </Link>
                                </div>

                        </div>

                        <div className="pt-[20px] px-[20px] py-[25px] gap-[5px] flex flex-col items-start justify bg-white shadow-xl rounded-lg">
                            <Image
                                    src="https://creator.design/_logos/65/logo-65_07.png"
                                    width={130}
                                    height={255}
                                    alt="company"
                                />
                                <div className="font-bold text-[23px]">
                                Social Media Specialist / Marketing Communication
                                </div>
                                <div className="pb-[15px] text-[21px]">
                                PT Noah Budi Sejahtera
                                </div>
                                <div className="text-[21px]">
                                Tangerang, Banten
                                </div>
                                <div className="text-[21px] pb-[20px]">
                                Rp 5.000.000
                                </div>

                                <div className="bg-blue-500 w-full text-[21px] flex items-center justify-center">
                                    <Link href="/jobDetail" className="bg-orange-400 w-full text-[21px] py-[10px] flex justify-center">
                                    More Detail
                                    </Link>
                                </div>

                        </div>

                        <div className="pt-[20px] px-[20px] py-[25px] gap-[5px] flex flex-col items-start justify bg-white shadow-xl rounded-lg">
                            <Image
                                    src="https://creator.design/_logos/65/logo-65_07.png"
                                    width={130}
                                    height={255}
                                    alt="company"
                                />
                                <div className="font-bold text-[23px]">
                                Social Media Specialist / Marketing Communication
                                </div>
                                <div className="pb-[15px] text-[21px]">
                                PT Noah Budi Sejahtera
                                </div>
                                <div className="text-[21px]">
                                Tangerang, Banten
                                </div>
                                <div className="text-[21px] pb-[20px]">
                                Rp 5.000.000
                                </div>

                                <div className="bg-blue-500 w-full text-[21px] flex items-center justify-center">
                                    <Link href="/jobDetail" className="bg-orange-400 w-full text-[21px] py-[10px] flex justify-center">
                                    More Detail
                                    </Link>
                                </div>

                        </div>

                        <div className="pt-[20px] px-[20px] py-[25px] gap-[5px] flex flex-col items-start justify bg-white shadow-xl rounded-lg">
                            <Image
                                    src="https://creator.design/_logos/65/logo-65_07.png"
                                    width={130}
                                    height={255}
                                    alt="company"
                                />
                                <div className="font-bold text-[23px]">
                                Social Media Specialist / Marketing Communication
                                </div>
                                <div className="pb-[15px] text-[21px]">
                                PT Noah Budi Sejahtera
                                </div>
                                <div className="text-[21px]">
                                Tangerang, Banten
                                </div>
                                <div className="text-[21px] pb-[20px]">
                                Rp 5.000.000
                                </div>

                                <div className="bg-blue-500 w-full text-[21px] flex items-center justify-center">
                                    <Link href="/jobDetail" className="bg-orange-400 w-full text-[21px] py-[10px] flex justify-center">
                                    More Detail
                                    </Link>
                                </div>

                        </div>

                        <div className="pt-[20px] px-[20px] py-[25px] gap-[5px] flex flex-col items-start justify bg-white shadow-xl rounded-lg">
                            <Image
                                    src="https://creator.design/_logos/65/logo-65_07.png"
                                    width={130}
                                    height={255}
                                    alt="company"
                                />
                                <div className="font-bold text-[23px]">
                                Social Media Specialist / Marketing Communication
                                </div>
                                <div className="pb-[15px] text-[21px]">
                                PT Noah Budi Sejahtera
                                </div>
                                <div className="text-[21px]">
                                Tangerang, Banten
                                </div>
                                <div className="text-[21px] pb-[20px]">
                                Rp 5.000.000
                                </div>

                                <div className="bg-blue-500 w-full text-[21px] flex items-center justify-center">
                                    <Link href="/jobDetail" className="bg-orange-400 w-full text-[21px] py-[10px] flex justify-center">
                                    More Detail
                                    </Link>
                                </div>

                        </div>

                        <div className="pt-[20px] px-[20px] py-[25px] gap-[5px] flex flex-col items-start justify bg-white shadow-xl rounded-lg">
                            <Image
                                    src="https://creator.design/_logos/65/logo-65_07.png"
                                    width={130}
                                    height={255}
                                    alt="company"
                                />
                                <div className="font-bold text-[23px]">
                                Social Media Specialist / Marketing Communication
                                </div>
                                <div className="pb-[15px] text-[21px]">
                                PT Noah Budi Sejahtera
                                </div>
                                <div className="text-[21px]">
                                Tangerang, Banten
                                </div>
                                <div className="text-[21px] pb-[20px]">
                                Rp 5.000.000
                                </div>

                                <div className="bg-blue-500 w-full text-[21px] flex items-center justify-center">
                                    <Link href="/jobDetail" className="bg-orange-400 w-full text-[21px] py-[10px] flex justify-center">
                                    More Detail
                                    </Link>
                                </div>

                        </div>
                    </div>

                    <div className="flex justify-end items-center py-10">
                        <div className="flex ">
                        <button className="button w-full h-full px-[10px] py-[10px] flex items-center justify-center text-black bg-orange-400">
                            Next Page
                        </button>
                        </div>
                    </div>
                    </div>

                    <div className="hidden lg:block w-1/6"></div>
                </div>
            </div>
        </>
    )
}