import { Addcommande } from "../Components/Addcommande";

export function HomeCommmande(){
    return(
        <div className="bg-[#ECF1DD] min-h-screen flex flex-col items-center">
            <header className="text-center font-family-MaPolice text-4xl">
                <h1>Voici la page pour commander à la boulangerie</h1>
            </header>
            <main className="flex justify-center items-center flex-grow">
                <div className=" w-full max-w-screen-lg">
                    <Addcommande/>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}