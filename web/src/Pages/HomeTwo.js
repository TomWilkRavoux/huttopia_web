import { Link } from 'react-router-dom';

export function HomeTwo(){
    return(
        <div className="bg-[#ECF1DD] min-h-screen flex flex-col items-center">
            <header className="text-center font-family-MaPolice text-4xl">
                <h1>Vous etes sur la deuxieme page</h1>
            </header>
            <main className="flex justify-center items-center flex-grow">
                <div className="grid grid-cols-2 gap-4 w-full max-w-screen-lg">
                    <div>
                        <Link to="/homecommande">
                            <button className="border p-4 rounded-full bg-[#00533C] hover:bg-[#7EA31A] transition-colors duration-200">
                                <h3 className="text-center text-w title-text text-5xl ">la vie au camping</h3>
                            </button>
                        </Link>
                    </div>
                    <div className="">
                        <button className="border p-4 rounded-full bg-[#00533C] hover:bg-[#7EA31A] transition-colors duration-200">
                            <h3 className="text-center text-w text-5xl">decouvrer la region</h3>
                        </button>
                    </div>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}