import React from 'react'

export function NavettesFuniculaire() {
  return (
    <div class="background-funi bg-center bg-cover">
          <div class="container mx-auto p-8 text-center">
        <div class="mb-4">
            <div class="p-2 bg-yellow-300 inline-block border rounded">
                <h1 class="text-4xl font-bold text-blue-800">Navette Funiculaire</h1>
                <p class="text-blue-600">Trip to the funicular</p>
            </div>
        </div>

        <div class="flex flex-col md:flex-row  justify-around text-white mb-8">
            <div class="bg-blue-700 p-4 border rounded-lg">
                <h2 class="font-bold text-lg">Aller</h2>
                <p>8h30</p>
                <p>9h00</p>
                <p>9h30</p>
                <p>10h00</p>
                <p class="text-sm">8 places disponibles par trajet</p>
                <p class="text-sm">8 seats available per trip</p>
            </div>

            <div class="bg-blue-700 p-4 border rounded-lg">
                <h2 class="font-bold text-lg">Retour</h2>
                <p>16h00</p>
                <p>16h30</p>
                <p>17h00</p>
                <p>17h30</p>
                <p class="text-sm">8 places disponibles par trajet</p>
                <p class="text-sm">8 seats available per trip</p>
            </div>
        </div>

        <div class="flex flex-col inline-flex p-4 bg-yellow-300 inline-block border rounded-full mb-8">
            <p class="">Merci de vous inscrire à la réception la veille</p>
            <p>Please, sign up at the reception the day before</p>
        </div>

        <div class=" flex flex-col bg-blue-600 p-4 inline-block rounded">
            <p class="text-white text-sm">Hors vacances scolaires, les navettes de 10h00 et de 17h30 ne sont pas disponibles.</p>
            <p class="text-white text-sm">Outside holidays, 10:00am and 5:30 pm trips are not available.</p>
        </div>
    </div>
    
    </div>
  )
}
