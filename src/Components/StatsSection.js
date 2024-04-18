import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-blue-100 py-12" id="statistics">
      <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold ">
            Taking your product{" "}
            <span className="text-blue-500">to the next level</span>
          </h2>
          <p className="text-sm lg:text-base  mt-2 mb-8 lg:mb-0">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="bg-blue-100 py-12">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="flex justify-between space-x-8">
              {/* Column 1 */}
              <div className="flex flex-col items-center">
                {/* Engineers stat */}
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 mr-2">
                    <img src="statsicons/engineers.png" alt="Engineers" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">15</span>
                    <p className="text-sm text-gray-600">Engineers</p>
                  </div>
                </div>
                {/* Clients stat */}
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 mr-2">
                    <img src="statsicons/clients.png" alt="Clients" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">4</span>
                    <p className="text-sm text-gray-600">Clients</p>
                  </div>
                </div>
              </div>
              {/* Column 2 */}
              <div className="flex flex-col items-center">
                {/* Designers stat */}
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 mr-2">
                    <img src="statsicons/designers.png" alt="Designers" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">4</span>
                    <p className="text-sm text-gray-600">Designers</p>
                  </div>
                </div>

                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 mr-2">
                    <img
                      src="statsicons/engineers.png"
                      alt="OnGoing Projects"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">7</span>
                    <p className="text-sm text-gray-600"> projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
