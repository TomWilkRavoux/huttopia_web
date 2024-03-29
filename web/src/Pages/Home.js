import HuttopiaLogo from '../asset/img/Huttopia_logo.png';
export function Home(){
    return(
        <div className="bg-[#ECF1DD] min-h-screen flex flex-col items-center">
            <header className="text-center font-family-MaPolice text-4xl">
                <h1 className='font-bold'>Huttopia Bourg-Saint-Maurice</h1>
            </header>
            <main className="flex justify-center items-center flex-grow">
                <div style={{ width: '25em', height: 'auto' }} >
                    <a href="/HomeTwo">
                        <img src={HuttopiaLogo} alt="coucou" className="w-full h-auto" />
                    </a>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}