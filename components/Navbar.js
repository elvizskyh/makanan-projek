import React from 'react'
import Image from 'next/image'


function Navbar() {
    return (
        <>
        <nav className="py-10" >
            <div className="absolute inset-y-0 right-0 h-[600px]">
            <Image
            src="/cok.png"
            quality={100}
            width={500}
            height={650}
            layout="intrinsic"
            />
            </div>
            <div className="max-w-screen-xl mx-auto relative">
                <div className="flex">
                <div className="w-2/12 flex items-center justify-start font-bold ">
                    <img src="/logo.png" className="w-7 h-7 mr-4" alt="logo"/>
                        NExON
                </div>
                <div className="w-8/12 flex justify-center">
                    <ul className="space-x-12 font-semibold cursor-pointer flex items-center">
                        <li><a className="hover:underline">About</a></li>
                        <li><a className="hover:underline">Shop</a></li>
                        <li><a className="hover:underline">Testimoni</a></li>
                        <li><a className="hover:underline">Contact</a></li>
                    </ul>
                </div>
                <div className="w-2/12  flex items-center justify-end">
                    <button className="bg-white py-2 px-7 rounded-lg text-black hover:bg-gray-700/70">Masuk</button>
                </div>
            </div>
            </div>
        </nav>
      </>
    )
}

export default Navbar

