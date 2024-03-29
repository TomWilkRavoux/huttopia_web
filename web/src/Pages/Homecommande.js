import { Activite } from "../Components/Activite";
import { Addcommande } from "../Components/Addcommande";
import  AddInscription from "../Components/Addactivite"; 
export function HomeCommmande(){
    return(
        <div className="bg-[#ECF1DD] min-h-screen flex flex-col items-center">
            <header className="text-center font-family-MaPolice text-4xl">
                <h1>Voici la page pour commander à la boulangerie</h1>
            </header>
            <main className="flex justify-center items-center flex-grow">
                <div className="w-full max-w-screen-lg flex flex-col">
                    <Addcommande style={{ flexShrink: 0 }} />
                    <br /><br /><br />
                    <div className="border"></div>
                    <br /><br /><br /><br />
                    <Activite style={{ flexShrink: 1 }} />
                    <AddInscription/>
                </div>
            </main>
            <footer className="mb-10">
            </footer>
        </div>
    )
}
