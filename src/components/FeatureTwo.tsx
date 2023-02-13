export default function FeatureTwo() {
    return (
        <section id='get-started' className="py-32 bg-white overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center -m-8">
                    <div className="w-full md:w-1/2 p-8">
                        <h2 className="mb-9 text-3xl md:text-5xl xl:text-6xl font-bold font-heading tracking-px-n leading-none">
                            Visualize data like never before
                        </h2>
                        <p className="mb-10 text-lg text-gray-900 font-medium leading-relaxed md:max-w-md">
                            Our viewer lets you bring a new understanding to you and
                            your model&apos;s analysis.
                        </p>
                        <div className="mb-11 md:inline-block rounded-xl shadow-4xl">
                            <button className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">
                                Use Now
                            </button>
                        </div>
                        <div className="flex flex-wrap -m-2">
                            <div className="w-auto p-2">
                                <img src="flaro-assets/images/features/money-coins.png" alt="" />
                            </div>
                            <div className="flex-1 p-2">
                                <p className="text-gray-600 font-medium md:max-w-sm">
                                    That&apos;s right, our open source engine is free to use for all personal and research purposes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-8">
                        <img className="transform hover:-translate-x-16 transition ease-in-out duration-1000" src="https://cdn.technologyadvice.com/wp-content/uploads/2015/05/dicom-viewers-700x408.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}