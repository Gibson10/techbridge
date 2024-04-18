import React from "react";

const SectionOne = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl font-bold leading-tight text-gray-800">
              Build your MVP in{" "}
            </h1>
            <h1 className="text-5xl font-bold leading-tight text-blue-500">
              just 3-4 Months{" "}
            </h1>
            <p className="text-gray-600 text-lg my-6">
              Empowering Innovation, Engineering Success!!
            </p>
            <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg mt-4 hover:bg-blue-700 transition ease-in-out duration-300">
              Get a Quotation today!
            </button>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-10">
            <div className="flex justify-center lg:justify-end">
              {/* Replace div below with <img src={YourImage} alt="Your Alt Text" /> */}
              <div className="inline-block ">
                <img src="Illustration.png" alt="Placeholder" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
