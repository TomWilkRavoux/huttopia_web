import React from 'react'

export  function Restaurant() {
  return (
    <div className=''>
        <h1 class="text-4xl text-center font-bold mb-4 text-vk italic">Restaurants</h1>

        <div class="flex flex-col justify-between items-start items-center text-r space-y-4 w-full">
            <div class=' w-11/12 text-left mt-4 ml-2'>
                <h3 class="font-bold">LE MONTAGNOLE</h3>
                <p>Cuisine récréative au fil des saisons</p>
                <p>26 Avenue du Stade,</p>
                <p>73700 Bourg-Saint-Maurice</p>
                <p>+33(0)4 60 06 66 72</p>
                <p><a href="https://www.facebook.com/lemontagnolerestaurant" class="text-vk">restaurantlemontagnole.com</a></p>
            </div>

            <div class=' w-11/12 text-right mt-4 mr-2'>
                <h3 class="font-bold">L'ARSSIBAN</h3>
                <p>Cuisine traditionelle</p>
                <p>253 Avenue Antione Borrel,</p>
                <p>73700 Bourg-Saint-Maurice</p>
                <p>+33(0)4 79 07 77 35</p>
            </div>
            <div class=' w-11/12  text-left mt-4 ml-2'>
                <h3 class="font-bold">LE REFUGE</h3>
                <p>Cuisine Savoyarde</p>
                <p>55 Grande Rue,</p>
                <p>73700 Bourg-Saint-Maurice</p>
                <p>+33(0)9 66 87 52 54</p>
                <p><a href="https://www.facebook.com/lemontagnolerestaurant" class="text-vk">Le Refuge</a></p>
            </div>
            <div class=' w-11/12  text-right mt-4 mr-2'>
                <h3 class="font-bold">LE PETITE AUBERGE</h3>
                <p>Gault&Millau 2023-2024</p>
                <p>Cuisine traditionnelle au fil des saisons</p>
                <p>162 Chemin de Reverset,</p>
                <p>73700 Bourg-Saint-Maurice</p>
                <p>+33(0)4 79 07 37 11</p>
                <p><a href="https://www.restaurant-lapetiteauberge73.fr/" class="text-vk">La petite auberge</a></p>
            </div>
            <div class=' w-11/12 text-left mt-4 ml-2'>
                <h3 class="font-bold">LE CHALET</h3>
                <p>Spécialités savoyardes</p>
                <p>332 Route de Montrignon,</p>
                <p>73700 Bourg-Saint-Maurice</p>
                <p>+33(0)4 07 37 13 81</p>
                <p><a href="https://www.lechalet-bourg.com/" class="text-vk">Le Chalet</a></p>
            </div>
            <div class=' w-11/12  text-right mt-4 mr-2'>
                <h3 class="font-bold">CHERRY GARDEN</h3>
                <p>Cuisine asiatique</p>
                <p>427 Avenue du Stade,</p>
                <p>73700 Bourg-Saint-Maurice</p>
                <p>+33(0)9 50 81 87 74</p>
                <p>Sur place ou à emporter</p>
            </div>
        </div>
    </div>
  )
}
