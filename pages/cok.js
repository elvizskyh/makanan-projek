import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <nav className="py-10" >
        <div className="absolute inset-y-0 right-0 h-[600px]" >
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
                <ul className="space-x-12 font-semibold cursore flex items-center">
                  <li><a className="hover:underline">About</a></li>
                  <li><a className="hover:underline">Shop</a></li>
                  <li><a className="hover:underline">Testimoni</a></li>
                  <li><a className="hover:underline">Contact</a></li>
                </ul>
              </div>
              <div className="w-2/12  flex items-center justify-end">
                  <button className="bg-gray-700 py-2 px-7 rounded-lg text-white hover:bg-gray-700/70">Masuk</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-screen-xl mx-auto flex relative py-10 w-full">
          <div className="w-6/12">
            <div className="">
            <h1 className="text-5xl mt-5 font-sans font-bold items-center ">Beli makanan apapun secara online hanya disini</h1>
            <p className="mt-5 item-center text-lg">nexon adalah website untuk membeli makanan nusantara indonesia secara online melalui website serta gratis ongkir seluruh indonesia tanpa dikenankan biaya apapun</p>
            <div className="py-8">
            <label className="flex relative rounded-full bg-gray-200 pl-8 pr-4 py-2">
              <input className=" mt-1 px-8 py-2 border-transparent text-lg flex-1 block bg-transparent focus:ring-0 focus:border-transparent" placeholder="Makanan"/>
              <button className="bg-red-500 text-white text-2lg px-6 py-3 w-53 flex-shrink-0 rounded-l-full rounded-r-full flex items-center">
                <svg className="w-6 h-6 mr-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  Cari Menu
              </button>
            </label>
            </div>
            
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
      <div className="bg-green-500 h-44">
        <div className="max-w-screen-xl mx-auto">
          <div>

          </div>
          <div className="w-4/12">

          </div>
        </div>
      </div>
      
    </div>
  )
}

