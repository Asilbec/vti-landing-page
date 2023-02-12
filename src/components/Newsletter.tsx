export default function Newsletter() {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -m-8">
                    <div className="w-full md:w-5/12 p-8">
                        <div className="flex flex-col justify-between h-full">
                            <div className="mb-8">
                                <h2 className="mb-5 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">
                                    Our Latest News and Articles
                                </h2>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetury adipiscing elit.
                                    Volutpat, tempor to after condimentum commodo
                                </p>
                            </div>
                            <a className="inline-flex items-center text-indigo-600 hover:text-indigo-700 leading-normal" href="#">
                                <span className="mr-2 font-semibold">See all articles</span>
                                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:flex-1 p-8">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/2 p-3">
                                <div className="max-w-sm mx-auto">
                                    <div className="mb-6 max-w-max overflow-hidden rounded-xl">
                                        <img className="transform hover:scale-105 transition ease-in-out duration-1000" src="flaro-assets/images/blog/blog-wide.png" alt="" />
                                    </div>
                                    <p className="mb-4 font-sans max-w-max px-3 py-1.5 text-sm text-indigo-600 font-semibold bg-indigo-50 uppercase rounded-md">
                                        Business
                                    </p>
                                    <a className="mb-2 inline-block hover:text-gray-800 hover:underline" href="#">
                                        <h3 className="text-xl font-bold font-heading leading-normal">
                                            How to handle your good employee for the business.
                                        </h3>
                                    </a>
                                    <p className="text-gray-600 font-medium leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                                        Volutpat to a main.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-3">
                                <div className="max-w-sm mx-auto">
                                    <div className="mb-6 max-w-max overflow-hidden rounded-xl">
                                        <img className="transform hover:scale-105 transition ease-in-out duration-1000" src="flaro-assets/images/blog/blog-wide2.png" alt="" />
                                    </div>
                                    <p className="mb-4 font-sans max-w-max px-3 py-1.5 text-sm text-indigo-600 font-semibold bg-indigo-50 uppercase rounded-md">
                                        Productivity
                                    </p>
                                    <a className="mb-2 inline-block hover:text-gray-800 hover:underline" href="#">
                                        <h3 className="text-xl font-bold font-heading leading-normal">
                                            How startup company can help you to grow as a developer.
                                        </h3>
                                    </a>
                                    <p className="text-gray-600 font-medium leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                                        Volutpat to a main.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}