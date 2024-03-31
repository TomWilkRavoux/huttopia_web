import React from 'react'

export function ForfaitSki() {
  return (
    <div className='background-ski bg-center bg-cover bg-no-repeat w-full'>
    <div class="text-center p-8">
        <h1 class="text-5xl font-bold text-white">IL EST TEMPS<br/> D'ALLER SKIER!</h1>
        <div class="mt-4 p-4 bg-red-600 text-white rounded-full inline-block">
            <p class="text-md">PROFITEZ D'UNE REMISE SUR VOTRE <br/> LOCATION DE MATÉRIEL DURANT VOTRE SÉJOUR !</p>
            <p class="text-sm">ENJOY A DISCOUNT ON YOUR SKI RENTAL !</p>
        </div>

        <div class="my-8">
            <h2 class="text-3xl text-white font-bold">
                <span class="text-red-600">-20% </span>
                chez Intersport et SKISET en <br/> présentant un justificatif de séjour <br/> dans notre camping.
            </h2>
            <p class="text-white">-20% at Intersport and SKISET <br/> showing your booking confirmation<br/> on the campsite</p>
        </div>

        <div class="p-4 bg-white text-blue-700 rounded-lg">
            <p>Une skiroom est à votre disposition dans le bâtiment, à côté de la laverie</p>
            <p>A skiroom is at your disposal in the building, next to the laundry</p>
        </div>
    </div>
    </div>
  )
}
