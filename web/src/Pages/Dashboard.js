import { Link } from "react-router-dom";

export function Dashboard(){
    return(
        <>
        <div className="align-item-center">
            <Link to="/dashcommande"><button className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Commande</button></Link><br />
            <Link to="/dashactivite"><button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Activité</button></Link>
            </div>
        </>
    )
}