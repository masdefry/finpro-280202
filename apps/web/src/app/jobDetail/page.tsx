import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import { MdArrowDropDown, MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";

export default function jobDetail(){
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

        <div className="bg-slate-100 lg:px-[350px] py-[30px]">
            <div className="bg-white w-full flex flex-col px-[30px] rounded-2xl shadow-xl">
                <Image
                    src="https://creator.design/_logos/65/logo-65_07.png"
                    width={300}
                    height={255}
                    alt="company"
                />
                <div className="text-3xl font-bold pb-[20px]">
                Social Media Specialist / Marketing Communication
                </div>
                <div className="text-xl pb-[50px]">
                PT Noah Budi Sejahtera
                </div>
                <div className="flex gap-[20px] pb-[10px]">
                    <IoLocationSharp className="text-[30px] text-gray-700"/>
                    <div className="text-l">
                    Tangerang, Banten
                    </div>
                </div>
                <div className="flex gap-[20px] pb-[50px]">
                    <MdOutlineAttachMoney className="text-[30px] text-gray-700"/>
                    <div>
                        Rp 5.000.000
                    </div>
                </div>

                <button className="bg-orange-400 h-[50px] w-[200px]">
                    Apply Job
                </button>

                <div className="pt-[50px]">
                    <div>
                        Job Description:
                    </div>
                    <ol className="list-decimal pl-[20px]">
                        <li>Develop Social Media Strategies</li>
                        <li>Content Creation</li>
                        <li>Manage Social Media Accounts</li>
                        <li>Analyze Performance</li>
                        <li>Collaborate with Marketing Team</li>
                    </ol>
                </div>

                <div className="pt-[50px] pb-[50px]">
                    <div>
                        Job Qualification:
                    </div>
                    <ol className="list-decimal pl-[20px]">
                        <li>Bachelor's degree in Marketing, Communications, or a related field</li>
                        <li>Minimum 2 years of experience in social media management</li>
                        <li>Proficiency in social media platforms and tools</li>
                        <li>Strong content creation and writing skills</li>
                        <li>Excellent communication and analytical abilities</li>
                    </ol>
                </div>
            </div>
        </div>

   
        </>
    )
}