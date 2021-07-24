import React from 'react'

export default function Spesial({
    listUser = [
        {
          name: "Fahri indra",
          number: "390",
          icon: "/people-1.png",
        },
        {
          name: "Rokmah geming",
          number: "20",
          icon: "/people-2.png",
        },
        {
          name: "Boboiboy x",
          number: "50",
          icon: "/people-3.png",
        },
      ],
}) {
    return (
      <div className=" min-h-full mt-20">
        <div className="max-w-screen-xl mx-auto p-11">
          <p className="text-center text-lg font-bold mt-3 mb-8">Apa Pembeli Bicara Tentang Kita?</p>
            <div className="flex">
                {listUser.map((listUsers, index) => (
                <div key={index} className="w-4/12 ">
                    <div className="flex flex-col justify-center items-center mt-10 space-x-4">
                      <img src={listUsers.icon} className=" w-36 h-36"/>
                      <h2 className="items-center text-center mt-4">Alhamdulillah pengiriman cepat makanan masih hangat dan makanan juga enak pengantar baik yang buat website juga ganteng</h2>
                      <h1 className="font-bold mt-3 text-gray-400">{listUsers.name}</h1>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </div>
    )
}
