<div className="text-center">
            <h1 className="text-green-700 font-bold text-xl mt-5">Menu Makanan</h1>
            <p className="mt-1">Menu makanan terbaik untuk anda</p>
            <ul className="flex justify-center font-semibold cursor-pointer space-x-14 mt-4">
              <li><a className=" border-b-2 border-solid border-black">Terbaik</a></li>
              <li><a className="hover:underline">Populer</a></li>
              <li><a className="hover:underline">Terlaris</a></li>
            </ul>
          </div>
          <div className="flex">
          {postUser.map((postUsers, index) => (
            <div key={index} className="w-4/12 gap-x-3">
              <div className="flex flex-col justify-center items-center mt-5 bg-gray-200">
              <Image
                src="/hero.png"
                quality={100}
                width={230}
                height={220}
                layout="intrinsic"
                />
              <h1 className="mt-3 font-bold text-xl">Nasi Goreng Spesial</h1>
              <p className="text-center text-lg mt-2">nasi, bawang, cabai, telur, tomat</p>
              <p className="font-semibold mt-3">Rp.15000</p>
              <button className="bg-red-700 px-9 py-1 rounded-lg text-white mt-3">Tambah Keranjang</button>
              </div>
            </div>
          ))}
          </div>
          <div className="mt-8 text-center">
            <button className=" bg-red-600 rounded-lg py-1 px-4 text-white">Lainnya</button>
          </div>