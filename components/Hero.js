import React from 'react'
import Image from 'next/image'

function Hero() {
    return (
        <div className="max-w-screen-xl mx-auto flex relative py-10 w-full">
          <div className="w-6/12">
            <h1 className="text-5xl mt-5 font-sans font-bold items-center">Beli makanan apapun secara online hanya disini</h1>
            <p className="mt-5 item-center text-lg">nexon adalah website untuk membeli makanan nusantara indonesia secara online melalui website serta gratis ongkir seluruh indonesia tanpa dikenankan biaya apapun</p>
            <div className="py-8">
                <label className="flex relative rounded-full bg-gray-200 pl-8 pr-4 py-2">
                    <input className=" mt-1 px-8 py-2 border-transparent text-lg flex-1 block bg-transparent focus:ring-0 focus:border-transparent" placeholder="Makanan"/>
                    <button className="bg-black text-white text-2lg px-6 py-3 w-53 flex-shrink-0 rounded-l-full rounded-r-full flex items-center">
                    <svg className="w-6 h-6 mr-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    Cari Menu
                    </button>
                </label>
            </div>
          </div>
          <div className="w-6/12">
            <div className=" flex justify-center">
                <Image
                src="/hero.png"
                quality={100}
                width={500}
                height={460}
                layout="intrinsic"
                />
            </div>
          </div>
      </div>
    )
}

export default Hero
