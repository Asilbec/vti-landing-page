export default function Feature() {
    return (
        <section className="py-36 bg-white overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap xl:items-center -m-8">
                    <div className="w-full md:w-1/2 p-8">
                        <img className="mx-auto transform hover:translate-y-3 transition ease-in-out duration-1000" src="flaro-assets/images/features/upgrade.png" alt="" />
                    </div>
                    <div className="w-full md:w-1/2 p-8">
                        <div className="md:max-w-xl">
                            <p className="mb-7 text-sm text-gray-600 font-semibold uppercase tracking-px">
                                👋 Meet new Flaro
                            </p>
                            <h2 className="mb-32 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">
                                Upgrade to pro to unlock all features.
                            </h2>
                            <div className="flex flex-wrap mb-5 -m-8">
                                <div className="w-full md:w-1/2 p-8">
                                    <div className="md:max-w-xs">
                                        <div className="flex flex-wrap -m-2">
                                            <div className="w-auto p-2">
                                                <svg className="mt-1" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 3V5M15 3V5M9 19V21M15 19V21M5 9H3M5 15H3M21 9H19M21 15H19M7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19ZM9 9H15V15H9V9Z" stroke="#4F46E5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="flex-1 p-2">
                                                <h3 className="mb-2 text-xl font-semibold leading-normal">
                                                    Analytical
                                                </h3>
                                                <p className="text-gray-600 font-medium leading-relaxed">
                                                    Lorem ipsum dolor sit amet, to the consectr adipis.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 p-8">
                                    <div className="md:max-w-xs">
                                        <div className="flex flex-wrap -m-2">
                                            <div className="w-auto p-2">
                                                <svg className="mt-1" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="#4F46E5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="flex-1 p-2">
                                                <h3 className="mb-2 text-xl font-semibold leading-normal">
                                                    Dashboards
                                                </h3>
                                                <p className="text-gray-600 font-medium leading-relaxed">
                                                    Lorem ipsum dolor sit amet, to the consectr adipis.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:inline-block">
                                <button className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">
                                    Get Started Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}