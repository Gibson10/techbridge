import React from "react";

const InfoSection = () => {
  return (
    <div className="flex items-center justify-center  py-12 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Image placeholder - replace with actual image */}
        <div className="flex-1 mb-8 lg:mb-0">
          <div className="w-full h-50 ">
            <img src="rafiki.png"></img>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-blue-500">
            Empowering Innovation,
          </h2>
          <h2 className="text-3xl font-bold text-blue-500 mb-6">
            Engineering Success
          </h2>
          <p className="text-gray-700 mb-6">
            Join us at Quantumcode Systems, where we transform your visionary
            ideas into market-ready solutions. Our expert consultancy in project
            management, product design, and quality assurance, coupled with
            top-tier development in back-end, front-end, and full-stack
            technologies, ensures your project's success and scalability. Ready
            to elevate your business with robust and efficient digital
            solutions?
          </p>
          <button
            className="bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700"
            onClick={() =>
              (window.location.href = "https://forms.gle/UDqFS3RPQyRwtv2B7")
            }
          >
            Get a quotation Today!
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
