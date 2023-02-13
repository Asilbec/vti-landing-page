


export function Hero() {
    return (
        <section className="pt-24 pb-28 bg-white overflow-hidden">
            <div className="container px-4 mx-auto">
                <h2 className="mb-7 text-6xl md:text-8xl xl:text-10xl font-bold font-heading text-center tracking-px-n leading-none">
                    Inference analysis made easy
                </h2>
                <p className="mb-14 text-lg text-gray-600 font-medium text-center mx-auto md:max-w-2xl">
                    Looking to better analyze medical volumes or understand your AI model&aspos;s inference? Our private,
                    zero-footprint, web based renderer can help.
                </p>
                <div className="flex justify-center">
                    <div className="inline-block">
                        <img className="mb-11 mx-auto max-h-96 transform hover:translate-y-3 transition ease-in-out duration-1000" src="viewer_example.png" alt="" />
                        <ul className="flex flex-wrap justify-center -m-8">
                            <li className="w-auto p-8">
                                <a className="text-sm text-indigo-600 hover:text-indigo-700 font-semibold uppercase tracking-px" href="#">Real-time Visualization</a>
                            </li>
                            <li className="w-auto p-8">
                                <a className="text-sm text-gray-400 hover:text-gray-500 font-semibold uppercase tracking-px" href="#">Easy to Use</a>
                            </li>
                            <li className="w-auto p-8">
                                <a className="text-sm text-gray-400 hover:text-gray-500 font-semibold uppercase tracking-px" href="#">Clear Documentation</a>
                            </li>
                            <li className="w-auto p-8">
                                <a className="text-sm text-gray-400 hover:text-gray-500 font-semibold uppercase tracking-px" href="#">Customizable</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}