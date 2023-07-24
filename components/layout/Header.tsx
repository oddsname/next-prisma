import Image from "next/image"

export default function Header() {

    return (
        <header className="app-header">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between">
                    <div>
                        <Image src="/ts-icon.png" alt="icon" width={185} height={50} />
                    </div>


                    <div className="flex items-center justify-between">
                        <div className="relative ">
                            <span className="absolute right-4 inset-y-0 flex items-center pl-2">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </span>

                            <input
                                type="text"
                                className="shadow appearance-none border rounded-full py-3 px-6 w-80 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Find Competition"
                                required
                            />
                        </div>


                        <div className="relative ml-8 w-12 h-12" >
                            <Image src="/profile.webp" alt="profile" className="rounded-full" fill={true}/>
                        </div>


                    </div>


                </nav>
            </div>
        </header>
    )
}