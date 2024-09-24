export default function companyJob(){
    return(
        <>
            <div className="bg-slate-200 w-full h-[1000px] flex">
                <div className="w-full flex justify-center items-center">
                    <div className="bg-white flex flex-col w-[500px] rounded-2xl py-[30px] px-[20px]">
                        <div className="flex items-center justify-center text-2xl font-bold pb-[30px]">
                            Add Job
                        </div>

                        <div className="pb-[20px]">
                            <div>
                                Company Name
                            </div>
                            <input className="w-full px-[20px] border-black border-2 rounded h-[40px]" type="textbox">
                            </input>
                        </div>

                        <div className="pb-[20px]">
                            <div>
                                Job Name
                            </div>
                            <input className="w-full px-[20px] border-black border-2 rounded h-[40px]" type="textbox">
                            </input>
                        </div>

                        <div className="pb-[20px]">
                            <div>
                                Address
                            </div>
                            <input className="w-full px-[20px] border-black border-2 rounded h-[40px]" type="textbox">
                            </input>
                        </div>

                        <div className="pb-[20px]">
                            <div>
                                Job Category
                            </div>
                            <select className="w-full px-[20px] border-black border-2 rounded h-[40px]">
                                <option>Select Category</option>
                                <option>Marketing</option>
                                <option>Human Resource</option>
                                <option>Operations</option>
                                <option>Supply Chain & Logistics</option>
                                <option>Accounting & Finances</option>
                                <option>Design</option>
                                <option>Information Technology</option>
                                <option>Media & Communication</option>
                                <option>Sales</option>
                            </select>
                        </div>

                        <div className="pb-[20px]">
                            <div>
                                Job Description
                            </div>
                            <textarea className="w-full px-[20px] border-black border-2 rounded h-[150px]">
                            </textarea>
                        </div>

                        <button className="button bg-orange-400 py-[10px] rounded-2xl text-white">
                            Submit
                        </button>

                    </div>
                </div>

            </div>
        </>
    )
}