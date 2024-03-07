const Hero = () => {
    return (
        <div className="min-h-[400px] bg-cover bg-no-repeat bg-center bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3')]">
            <div className="container mx-auto py-10">
                <div className="text-white text-5xl pl-0 sm:pl-10">Welcome to <span className="font-bold text-blue-500">AirBook</span></div>

                <div className="bg-white rounded-xl mt-5 p-10">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap w-full sm:w-auto items-center gap-3">
                            <button className="flex items-center w-full sm:w-auto gap-2 bg-gray-200 px-3 py-2 rounded text-xs">
                                <span className="w-4 h-4 bg-transparent border border-gray-400 rounded-full"></span>
                                <span>One Way</span>
                            </button>

                            <button className="flex items-center w-full sm:w-auto gap-2 bg-blue-500 px-3 py-2 rounded text-xs text-white">
                                <span className="w-4 h-4 flex items-center justify-center bg-transparent border border-slate-200 rounded-full">
                                    <span className="w-3 h-3 inline-block bg-slate-300 rounded-full"></span>
                                </span>
                                <span>Round Trip</span>
                            </button>
                        </div>

                        <div className="flex flex-wrap items-center w-full sm:w-auto gap-3">
                            <div className="w-full sm:w-auto bg-gray-200 px-2 py-2 rounded text-xs text-blue-500">
                                <select className="px-3 bg-transparent focus:outline-none w-full">
                                    <option value="1">1 Traveller</option>
                                    <option value="2">2 Traveller</option>
                                    <option value="3">3 Traveller</option>
                                </select>
                            </div>

                            <div className="w-full sm:w-auto bg-gray-200 px-2 py-2 rounded text-xs text-blue-500">
                                <select className="px-3 bg-transparent focus:outline-none w-full">
                                    <option value="Economy">Economy</option>
                                    <option value="Business">Business</option>
                                    <option value="First">First</option>
                                    <option value="Cabin">Cabin</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap xl:flex-nowrap items-center gap-3 mt-5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-3 w-full">
                            <div className="flex items-center bg-white rounded-xl p-3 border border-gray-300">
                                <div className="pr-3 border-r border-gray-300 font-bold">DAC</div>
                                <div className="pl-3">
                                    <div className="font-bold">Dhaka</div>
                                    <div className="text-sm text-wrap sm:text-nowrap">Hazrat Shahjalal International</div>
                                </div>
                            </div>

                            <div className="flex items-center bg-white rounded-xl p-3 border border-gray-300">
                                <div className="pr-3 border-r border-gray-300 font-bold">Cxb</div>
                                <div className="pl-3">
                                    <div className="font-bold">{`Cox's Bazar`}</div>
                                    <div className="text-sm">{`Cox's Bazar international`}</div>
                                </div>
                            </div>

                            <div className="flex items-center bg-white rounded-xl p-3 border border-gray-300">
                                <div className="pr-3 border-r border-gray-300 font-bold">03</div>
                                <div className="pl-3">
                                    <div className="font-bold">October</div>
                                    <div className="text-sm">Tuesday, 2023</div>
                                </div>
                            </div>

                            <div className="flex items-center bg-white rounded-xl p-3 border border-gray-300">
                                <div className="pr-3 border-r border-gray-300 font-bold">05</div>
                                <div className="pl-3">
                                    <div className="font-bold">October</div>
                                    <div className="text-sm">Tuesday, 2023</div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full xl:w-[70px]">
                            <button className="btn btn-warning text-white w-full h-[70px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
