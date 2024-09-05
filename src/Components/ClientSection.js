import React from "react";

const ServicesSection = () => {
  return (
    <div className="bg-white py-12" id="clients">
      <div className="container mx-auto px-6">
        {/* Clients Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Clients</h2>
          <p className="mb-12 text-zinc-400">
            We have been working with the next generation of businesses
            revolutionizing their industry
          </p>
          <div className="flex justify-between flex-wrap gap-4 md:gap-8 mb-20 mx-6 md:mx-0">
            {/* Replace these divs with actual <img> tags */}
            <div className="w-16 h-16  flex items-center justify-center">
              <img src="icons/Acentria.jpg" alt="Placeholder" />
            </div>
            <div className="w-16 h-16  flex items-center justify-center">
              <img src="icons/anfield.png" alt="Placeholder" />
            </div>
            <div className="w-16 h-16  flex items-center justify-center">
              <img src="icons/Avodah.png" alt="Placeholder" />
            </div>
            <div className="w-16 h-16  flex items-center justify-center">
              <img src="icons/bayzat.webp" alt="Placeholder" />
            </div>
            <div className="w-16 h-16  flex items-center justify-center">
              <img src="icons/conint.png" alt="Placeholder" />
            </div>
            <div className="w-16 h-16  flex items-center justify-center">
              <img src="icons/Qureos.png" alt="Placeholder" />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-10">
          Built and Designed with you in Mind
        </h2>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="mb-10 shadow-md  p-6 mr-4 flex-grow">
            <div className="mb-4">
              {/* Replace with actual image */}
              <div className="w-16 h-16 mx-auto">
                <img src="icons/innovate.png" alt="Placeholder" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-sky-500 ">
              Innovative Solutions
            </h3>
            <p className="text-center text-gray-600">
              Boost your business with our custom tech solutions. We offer
              strategic consultancy and advanced development to optimize
              workflows and fast-track innovation.
            </p>
          </div>
          <div className="mb-10 shadow-md  p-6 mr-4 flex-grow">
            <div className="mb-4">
              {/* Replace with actual image */}
              <div className="w-16 h-16 mx-auto">
                <img src="icons/data.png" alt="Placeholder" />
              </div>{" "}
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-sky-500">
              Data Intelligence
            </h3>
            <p className="text-center text-gray-600">
              Leverage our machine learning expertise to enhance data-driven
              decision-making and optimize business strategies.
            </p>
          </div>
          <div className="mb-10 shadow-md  p-6 flex-grow">
            <div className="mb-4">
              {/* Replace with actual image */}
              <div className="w-16 h-16 mx-auto">
                <img src="icons/insights.png" alt="Placeholder" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-sky-500">
              Strategic Insights
            </h3>
            <p className="text-center text-gray-600">
              Our system delivers strategic insights, enabling informed
              decisions in project management, product design, and quality
              assurance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
