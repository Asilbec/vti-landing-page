export default function Team() {
    return (

        <section className="py-28 bg-white overflow-hidden">
            <div className="container px-4 mx-auto">
                <h2 className="mb-20 text-6xl md:text-6xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">
                    Our Team
                </h2>
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap -m-3">
                        <div className="w-full md:w-1/3 p-3">
                            <div className="max-w-max mx-auto">
                                <div className="mb-6 max-w-max overflow-hidden rounded-3xl">
                                    <img className="transform hover:scale-105 transition ease-in-out duration-1000" src="https://media.licdn.com/dms/image/D4E03AQGwmmXiMjiTEw/profile-displayphoto-shrink_800_800/0/1674488452051?e=1681948800&v=beta&t=wFNqasbWhQ3q5Svk_3nN_JD4HVvCHfDKtaiQ5Anpqwo" alt="" />
                                </div>
                                <h3 className="mb-1 text-lg font-bold font-heading leading-snug">
                                    Derek Armfield
                                </h3>
                                <p className="font-medium text-gray-600">Software Engineer</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-3">
                            <div className="max-w-max mx-auto">
                                <div className="mb-6 max-w-max overflow-hidden rounded-3xl">
                                    <img className="transform hover:scale-105 transition ease-in-out duration-1000" src="https://media.licdn.com/dms/image/D5603AQGSTpmMGJhOEQ/profile-displayphoto-shrink_400_400/0/1672102549279?e=1681948800&v=beta&t=-gpiO99ZPRHWVFSNeBErQD9TfNVnJuzCg_Du3l70S7w" alt="" />
                                </div>
                                <h3 className="mb-1 text-lg font-bold font-heading leading-snug">
                                    Bek Omonkulov
                                </h3>
                                <p className="font-medium text-gray-600">Software Engineer</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-3">
                            <div className="max-w-max mx-auto">
                                <div className="mb-6 max-w-max overflow-hidden rounded-3xl">
                                    <img className="transform hover:scale-105 transition ease-in-out duration-1000" src="https://media.licdn.com/dms/image/C4D03AQHN-4lF5jF0cQ/profile-displayphoto-shrink_400_400/0/1516431402690?e=1681948800&v=beta&t=o9CcXgQBtJHL_hbOeLJaLXP2VjMzDA_VBkw4Q3VKM8E" alt="" />
                                </div>
                                <h3 className="mb-1 text-lg font-bold font-heading leading-snug">
                                    Prahlad G Menon, PhD, PMP
                                </h3>
                                <p className="font-medium text-gray-600">AI Consultant, Innovator, Professor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}