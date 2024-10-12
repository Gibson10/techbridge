import logo from "./logo.svg";
import "./App.css";
import SectionOne from "./Components/SectionOne";
import ServicesSection from "./Components/ClientSection";
import InfoSection from "./Components/InfoSection";
import ContactUsSection from "./Components/ContactUs";
import StatsSection from "./Components/StatsSection";
import TestimonialsSection from "./Components/TestimonialsSection";
import Modal from "./Components/EmailModal";
import React, { useEffect, useState } from "react";

function App() {
  function Counter({ target }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (count < target) {
        // Set the speed of the counter. Adjust the denominator to control the speed.
        const timer = setTimeout(() => setCount(count + 1), 1000 / target);
        return () => clearTimeout(timer);
      }
    }, [count, target]);

    return <span className="text-6xl">{count}</span>;
  }

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Githure Holdings</title>
      {/*
    For more customization options, we would advise
    you to build your TailwindCSS from the source.
    https://tailwindcss.com/docs/installation
*/}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.9.2/tailwind.min.css"
      />
      {/* Small CSS to Hide elements at 1520px size */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        @media(max-width:1520px) {\n            .left-svg {\n                display: none;\n            }\n        }\n\n        /* small css for the mobile nav close */\n        #nav-mobile-btn.close span:first-child {\n            transform: rotate(45deg);\n            top: 4px;\n            position: relative;\n            background: #a0aec0;\n        }\n\n        #nav-mobile-btn.close span:nth-child(2) {\n            transform: rotate(-45deg);\n            margin-top: 0px;\n            background: #a0aec0;\n        }\n    ",
        }}
      />
      {/* Header Section */}
      <header className="relative z-50 w-full h-24">
        <div className="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">
          <a
            href="/"
            className="relative flex items-center inline-block h-5 h-full font-black leading-none"
          >
            {/* <svg
              className="w-auto h-6 text-indigo-600 fill-current"
              viewBox="0 0 194 116"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fillRule="evenodd">
                <path d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z" />
                <path d="M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z" />
              </g>
            </svg> */}
            {/* <img src="logo192.png" alt="Logo" className="w-20 h-20" /> <br></br> */}
            <div class="text-gray-900 font-mono text-4xl tracking-wider">
              <span class="text-blue-500">Quantum</span>
              <span class="text-gray-500">code</span>
            </div>
          </a>
          <nav
            id="nav"
            className="absolute top-0 left-0 z-50 flex flex-col items-center justify-between hidden w-full h-64 pt-5 mt-24 text-sm text-black-500 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative"
          >
            <a
              href="#"
              className="ml-0 mr-0 font-bold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600"
            >
              Home
            </a>
            <a
              href="#clients"
              className="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600"
            >
              Clients
            </a>
            <a
              href="#statistics"
              className="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600"
            >
              Statistics
            </a>
            <a
              href="#testimonials"
              className="font-bold duration-100 transition-color hover:text-indigo-600"
            >
              Testimonials
            </a>
          </nav>

          <div
            id="nav-mobile-btn"
            className="absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10"
          >
            <span className="block w-full h-1 mt-2 duration-200 transform bg-gray-800 rounded-full sm:mt-1" />
            <span className="block w-full h-1 mt-1 duration-200 transform bg-gray-800 rounded-full" />
          </div>
        </div>
      </header>

      <SectionOne />
      <ServicesSection />
      <InfoSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactUsSection />

      <footer className="px-4 pt-12 pb-8 text-white bg-white border-t bg-blue-500 border-gray-200">
        <div className="container flex flex-col justify-between max-w-6xl px-4 mx-auto overflow-hidden lg:flex-row">
          <div className="w-full pl-12 mr-4 text-left lg:w-1/4 sm:text-center sm:pl-0 lg:text-left">
            <p className="pt-4   text-center text-white ">
              ©2020 Githure Holdings. All rights reserved.
            </p>
          </div>
          <div className="block w-full pl-10 mt-6 text-sm lg:w-3/4 sm:flex lg:mt-0">
            <ul className="flex flex-col w-full p-0 font-medium text-left text-gray-700 list-none">
              <li className="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-white uppercase md:mt-0">
                Product
              </li>
              <li>
                <a
                  href="#_"
                  className="inline-block px-3 py-2 text-white no-underline hover:text-gray-600"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="inline-block px-3 py-2 text-white no-underline hover:text-gray-600"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="inline-block px-3 py-2 text-white no-underline hover:text-gray-600"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="inline-block px-3 py-2 text-white no-underline hover:text-gray-600"
                >
                  FAQ
                </a>
              </li>
            </ul>
            <ul className="flex flex-col w-full p-0 font-medium text-left text-gray-700 list-none">
              <li className="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-white uppercase md:mt-0">
                Company
              </li>
              <li>
                <a
                  href="#_"
                  className="inline-block px-3 py-2 text-white no-underline hover:text-gray-600"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="inline-block px-3 py-2 text-white no-underline hover:text-gray-600"
                >
                  Terms of Service
                </a>
              </li>
            </ul>

            <div className="flex flex-col w-full text-gray-700">
              <div className="inline-block px-3 py-2 mt-5 font-bold text-white uppercase md:mt-0">
                Follow Us
              </div>
              <div className="flex justify-start pl-4 mt-2">
                <a
                  className="flex items-center block mr-6 text-gray-400 no-underline hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://devdojo.com"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                  </svg>
                </a>
                <a
                  className="flex items-center block mr-6 text-gray-400 no-underline hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://devdojo.com"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a
                  className="flex items-center block text-gray-400 no-underline hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://devdojo.com"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* a little JS for the mobile nav button */}
    </div>
  );
}

export default App;
