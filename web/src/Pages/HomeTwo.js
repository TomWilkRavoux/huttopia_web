export function HomeTwo(){
    return(
        <div className="bg-[#ECF1DD] min-h-screen flex flex-col items-center">
            <header className="text-center font-family-MaPolice text-4xl">
                <h1>Vous etes sur la deuxieme page</h1>
            </header>
            <main className="flex justify-center items-center flex-grow">
                <div className="grid grid-cols-2 gap-4 w-full max-w-screen-lg">
                    <div className="border p-4">
                        <h3 className="text-center text-5xl">la vie au camping</h3>
                    </div>
                    <div className="border p-4">
                        
                        <h3 className="text-center text-5xl">decouvrer la region</h3>
                    </div>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}