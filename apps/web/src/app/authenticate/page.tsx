'use Client'

export default function logIn(){
    return(
        <>
            <div className="bg-slate-200 w-full h-[1000px] flex">
                <div className="w-full flex justify-center items-center">
                    <div className="bg-white flex flex-col w-[500px] rounded-2xl py-[30px] px-[20px]">
                        <div className="flex items-center justify-center text-2xl font-bold pb-[30px]">
                            Log In
                        </div>
                        <div className="pb-[20px]">
                            <div>
                                E-Mail
                            </div>
                            <input className="w-full px-[20px] border-black border-2 rounded h-[40px]" type="textbox">
                            </input>
                        </div>

                        <div className="pb-[50px]">
                            <div>
                                Password
                            </div>
                            <input className="w-full px-[20px] border-black border-2 rounded h-[40px]" type="password">
                            </input>
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