import React from "react";

const Home: React.FC = () => {
    return (
        <div className="container mx-auto p-6 bg-teal-200 shadow-lg rounded-lg mt-8">
            <section className="text-center py-16">
                <h1 className="text-5xl font-bold text-teal-800 mb-6">
                    Welcome to Our Website
                </h1>
                <p className="text-xl text-teal-900 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque vel enim sit amet diam viverra sagittis.
                </p>
                <button className="bg-teal-500 text-white py-2 px-4 rounded shadow-lg hover:bg-teal-600">
                    Get Started
                </button>
            </section>
            <section className="py-16">
                <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">
                    Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-2 text-teal-800">
                            Feature One
                        </h3>
                        <p className="text-teal-900">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque vel enim sit amet diam viverra
                            sagittis.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-2 text-teal-800">
                            Feature Two
                        </h3>
                        <p className="text-teal-900">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque vel enim sit amet diam viverra
                            sagittis.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-2 text-teal-800">
                            Feature Three
                        </h3>
                        <p className="text-teal-900">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque vel enim sit amet diam viverra
                            sagittis.
                        </p>
                    </div>
                </div>
            </section>
            <section className="text-center py-16">
                <h2 className="text-3xl font-bold text-teal-800 mb-6">
                    Contact Us
                </h2>
                <p className="text-teal-900 mb-6">
                    Have questions? Feel free to reach out to us.
                </p>
                <button className="bg-teal-500 text-white py-2 px-4 rounded shadow-lg hover:bg-teal-600">
                    Contact Us
                </button>
            </section>
        </div>
    );
};

export default Home;
