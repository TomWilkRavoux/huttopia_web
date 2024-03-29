import HuttopiaLogo from '../asset/img/Huttopia_logo.png';
import { Link } from "react-router-dom";

export function Home(){
    return(
    <div className="bg-[#ECF1DD] min-h-screen flex flex-col items-center">
        <header className="text-center font-family-MaPolice">
            <h1 className="font-bold text-4xl">Huttopia Bourg-Saint-Maurice</h1>
        </header>
        <div className="flex items-center justify-center w-full">
            <div className="ml-auto mr-2 border rounded-lg px-px py-px bg-[#00533C] hover:bg-[#7EA31A] transition-colors duration-300">
                <Link to='/login'><button className="text-w">Se connecter</button></Link>
            </div>
        </div>
        <main className="flex justify-center items-center flex-grow">
            <div style={{ width: '25em', height: 'auto' }} >
                <a href="/HomeTwo">
                    <img src={HuttopiaLogo} alt="coucou" className="w-full h-auto" />
                </a>
            </div>
        </main>
        <footer></footer>
    </div>

    )
}