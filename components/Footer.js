import React from 'react'

function Footer() {
    return (
        <div className="bg-black mt-20">
            <div className="max-w-screen-xl mx-auto text-white">
                <div className="flex mb-10">
                    <div className="w-5/12 flex flex-col mt-8 mb-10">
                        <h1 className="font-bold text-lg">Contact</h1>
                        <p className="mt-3 text-sm">083861332776</p>
                        <p className="mt-3 text-sm">elvizaka77@gmail.com</p>
                        <p className="mt-3 text-sm">ds.kampiran Brebes Jawatengah</p>
                    </div>
                    <div className="w-4/12 flex flex-col mt-8 mb-10">
                        <h1 className="font-bold text-lg">Support</h1>
                        <a className="mt-3 text-sm">FAQ</a>
                        <a className="mt-3 text-sm">How it work</a>
                        <a className="mt-3 text-sm">Features</a>
                        <a className="mt-3 text-sm">Contact</a>
                    </div>
                    <div className="w-3/12 flex flex-col mt-8 mb-10">
                        <h1 className="font-bold text-lg">Subscribe</h1>
                        <p className="mt-4">let'subscribe now an get a 10% discount for you first order. what are you waitting for, let's subscribe</p>
                        <div className="relative mt-3 flex">
                            <input className=" p-2 px-2 bg-gray-600/60" placeholder="Enter your email" />
                            <button className=" bg-white hover:bg-gray-200 text-black p-2 px-3 font-bold text-base">SEND</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between border-t border-gray-800/20 items-center h-12 mt-10">
                    <p className="text-sm">
                        Made By Elviz
                    </p>
                    <div className="flex space-x-3">
                        <img src="/facebook.svg" className="w-5 bg-white rounded-full h-5"/>
                        <img src="/instagram.svg" className="w-5 bg-white rounded-full h-5"/>
                        <img src="/twitter.svg" className="w-5 bg-white rounded-full h-5"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
