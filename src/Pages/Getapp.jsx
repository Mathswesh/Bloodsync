import React from 'react'

export const Getapp = () => {
    return (
        <div class="container p-5 w-[1000px] mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-2 grid-rows-2 gap-3">
            <div class="items-center justify-center flex col-span-2 row-span-1 rounded-md">
                <div className="container text-[30px] h-[100px] text-white flex justify-center items-center">Get the App from Playstore</div>
            </div>
            <div class="items-center justify-center text-center flex-row col-span-1 row-span-1 rounded-md bg-red-900">
                <div className="text-white text-2x"><i class="fa-brands fa-microsoft"></i></div>
                <div className="btn bg-white text-red-900">Get App From Microsoft Store.</div>
            </div>
            <div class="flex-row items-center justify-center text-center col-span-1 row-span-1 rounded-md bg-red-900">
                <div className="text-white text-2xl"><i class="fa-brands fa-google"></i></div>   
                <div className="btn bg-white text-red-900">Get App From Google Store.</div>
            </div>
        </div>
    )
}
