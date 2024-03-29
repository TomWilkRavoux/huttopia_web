import { Link } from "react-router-dom";
import Logout from "../Components/logout";
import HuttopiaLogo from '../asset/img/Huttopia_logo.png';

export function Dashboard() {
    return (
        <div className="bg-[#ECF1DD] min-h-screen flex flex-col items-center">
            <div className="flex justify-end items-center w-full p-4">
                <Logout />
            </div>
            <div className="flex items-center justify-center mt-8 mb-8">
                <div style={{ width: '25em', height: 'auto' }}>
                    <img src={HuttopiaLogo} className="w-full mr-4" alt="Huttopia Logo" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow">
                <div className="grid grid-cols-2 gap-4 w-full max-w-screen-lg mb-56">
                    <Link to="/dashcommande">
                        <button className='border p-4 rounded-full bg-[#00533C] hover:bg-[#7EA31A] transition-colors duration-200 w-full text-3xl text-w'>Commande</button>
                    </Link>
                    <Link to="/dashactivite">
                        <button className='border p-4 rounded-full bg-[#00533C] hover:bg-[#7EA31A] transition-colors duration-200 w-full text-3xl text-w'>Activité</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
