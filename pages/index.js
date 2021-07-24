import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Spesial from '../components/Spesial'
import Review from '../components/review'
import Card from '../components/Card'

export default function Home({
  postUser = [
    {
      title: "Bakso Borak",
      description: "lorem ipsum avaible more",
      harga: "Rp.15000",
      thumbnail: "/makanan.png",
    },
    {
      title: "Mie Kadaluarsa",
      harga: "Rp.12000",
      description: "lorem ipsum avaible more",
      thumbnail: "/makanan1.png",
    },
    {
      title: "Mie daging",
      harga: "Rp.10000",
      description: "lorem ipsum avaible more",
      thumbnail: "/makanan2.png",
    },
    {
      title: "Capcai Mambu",
      description: "lorem ipsum avaible more",
      harga: "Rp.20000",
      thumbnail: "/makanan3.png",
    },
    {
      title: "Bakso Borak",
      harga: "Rp.9000",
      description: "lorem ipsum avaible more",
      thumbnail: "/makanan4.png",
    },
    {
      title: "Mie kadaluarsa",
      harga: "Rp.12000",
      description: "lorem ipsum avaible more",
      thumbnail: "/makanan5.png",
    },
  ],
}) {
  return (
    <div>
      <Layout>
        <Hero />
        <Spesial />
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center">
            <h1 className=" font-bold text-xl mt-16">Menu Makanan</h1>
            <p className="mt-1">Menu makanan terbaik untuk anda</p>
            <ul className="flex justify-center font-semibold cursor-pointer space-x-14 mt-4">
              <li><a className=" border-b-2 border-solid border-black">Terbaik</a></li>
              <li><a className="hover:underline">Populer</a></li>
              <li><a className="hover:underline">Terlaris</a></li>
            </ul>
          </div>
          <div className="mt-4 grid gap-4 grid-cols-12">
          {postUser.map((postUsers, index) => (            
            <div key={index} className="col-span-4 ">
              <div>
            <div className="flex flex-col justify-start items-center mt-8 ">
            <Image
                  src={postUsers.thumbnail}
                  quality={100}
                  width={230}
                  height={220}
                  layout="intrinsic"
                  />
                <h1 className="mt-3 font-bold text-xl">{postUsers.title}</h1>
                <p className="text-center text-lg mt-2">{postUsers.description}t</p>
                <p className="font-semibold mt-3">{postUsers.harga}</p>
                <button className="bg-black text-white border-blue-600 border hover:bg-gray-800 px-9 py-1 rounded-lg mt-3">Tambah Keranjang</button>
            </div>
        </div>
            </div>
          ))}
          </div>
          <div className="mt-10 text-center">
            <button className=" bg-black rounded-lg py-1 px-4 hover:bg-gray-800 text-white">Lainnya</button>
          </div>
        </div>
        <Review />
      </Layout>
    </div>
  )
}

