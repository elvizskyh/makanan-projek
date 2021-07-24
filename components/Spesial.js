import React from 'react'

export default function Spesial({
    listUser = [
        {
          name: "Pengiriman cepat",
          number: "390",
          icon: "/icon.jpg",
        },
        {
          name: "Lokasi",
          number: "20",
          icon: "/icon1.png",
        },
        {
          name: "pilihan menu",
          number: "50",
          icon: "/icon2.png",
        },
      ],
}) {
    return (
      <div className=" min-h-full mt-20">
        <div className="max-w-screen-xl mx-auto p-11">
          <p className="text-center text-lg font-bold mt-3 mb-8 ">Kenapa harus memilih website dan jasa kita?</p>
            <div className="flex">
                {listUser.map((listUsers, index) => (
                <div key={index} className="w-4/12 ">
                    <div className="flex flex-col justify-center items-center mt-10 space-x-4">
                      <img src={listUsers.icon} className=" w-24 h-24"/>
                      <h1 className="font-bold text-xl mt-3 ">{listUsers.name}</h1>
                      <h2 className="items-center text-center mt-2">pengiriman cepat sampai rumah dan dijamin makanan masih hangat dan nikmat untuk dimakan</h2>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </div>
    )
}
