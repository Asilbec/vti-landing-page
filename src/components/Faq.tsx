export default function Faq() {
    return (

        <section id='faq' className="pt-28 pb-32 bg-white overflow-hidden">
            <div className="container px-4 mx-auto">
                <p className="mb-5 text-sm text-indigo-600 font-semibold uppercase tracking-px">Common answers to</p>
                <h2 className="mb-16 text-3xl md:text-5xl xl:text-6xl font-bold font-heading tracking-px-n leading-none">Frequently Asked Questions</h2>
                <div className="mb-8 md:max-w-5xl">
                    <div className="flex flex-wrap -m-4">
                        <div className="w-full md:w-1/2 p-4">
                            <div className="p-6 border border-gray-200 rounded-2xl shadow-10xl">
                                <h3 className="mb-4 text-lg font-semibold leading-normal">1. How can I use this for research?</h3>
                                <p className="font-sans text-gray-600 leading-relaxed">The web viewer allows you to understand your model&apos;s inferences in relation to real data in a visually appealing, intuitive manner.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-4">
                            <div className="p-6 border border-gray-200 rounded-2xl shadow-10xl">
                                <h3 className="mb-4 text-lg font-semibold leading-normal">2. What does it cost? </h3>
                                <p className="font-sans text-gray-600 leading-relaxed">Nothing. Our project is free to use and open source for all personal and research purposes. We want to help you do good.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-4">
                            <div className="p-6 border border-gray-200 rounded-2xl shadow-10xl">
                                <h3 className="mb-4 text-lg font-semibold leading-normal">3. I have special use case. Can I customize the code?</h3>
                                <p className="font-sans text-gray-600 leading-relaxed">Absolutely! Don&apos;t hesitate to make any changes or modifications to what we have.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-4">
                            <div className="p-6 border border-gray-200 rounded-2xl shadow-10xl">
                                <h3 className="mb-4 text-lg font-semibold leading-normal">4. I&apos;m having trouble figuring everything out. Where can I learn to use everything?</h3>
                                <p className="font-sans text-gray-600 leading-relaxed">Check out our documentation. Everything from how to install to customizing your own code can be found there.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="font-sans font-semibold text-indigo-600 hover:text-indigo-700 border-b border-indigo-600 hover:border-indigo-700" href="#">See all questions &amp; answers</a>
            </div>
        </section>
    )
}