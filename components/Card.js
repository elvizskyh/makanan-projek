import React from 'react'
import Image from 'next/image'

function Card() {
    return (
        <div>
            <div className="flex flex-col justify-start items-center mt-8 ">
            <Image
                  src={postUsers.thumbail}
                  quality={100}
                  width={230}
                  height={220}
                  layout="intrinsic"
                  />
                <h1 className="mt-3 font-bold text-xl">Nasi Goreng Spesial</h1>
                <p className="text-center text-lg mt-2">nasi, bawang, cabai, telur, tomat</p>
                <p className="font-semibold mt-3">Rp.15000</p>
                <button className="bg-transparent border-blue-600 border hover:bg-red-600 px-9 py-1 rounded-lg text-black mt-3">Tambah Keranjang</button>
            </div>
        </div>
    )
}

export default Card
