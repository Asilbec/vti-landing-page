export default function FeatureTwo() {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center -m-8">
                    <div className="w-full md:w-1/2 p-8">
                        <h2 className="mb-9 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">
                            Get down to your business
                        </h2>
                        <p className="mb-10 text-lg text-gray-900 font-medium leading-relaxed md:max-w-md">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit. Exercitation
                            veniam consequat.
                        </p>
                        <div className="mb-11 md:inline-block rounded-xl shadow-4xl">
                            <button className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">
                                Learn How to Save More
                            </button>
                        </div>
                        <div className="flex flex-wrap -m-2">
                            <div className="w-auto p-2">
                                <img src="flaro-assets/images/features/money-coins.png" alt="" />
                            </div>
                            <div className="flex-1 p-2">
                                <p className="text-gray-600 font-medium md:max-w-sm">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                    amet sint. Velit officia consequat duis enim velit mollit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-8">
                        <img className="transform hover:-translate-x-16 transition ease-in-out duration-1000" src="flaro-assets/images/features/feature2.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}