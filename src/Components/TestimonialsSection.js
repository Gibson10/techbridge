import React from "react";

const TestimonialCard = ({ quote, author }) => {
  return (
    <div className="bg-grey rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <p className="text-black text-sm">"{quote}"</p>
      {/* <p className="text-gray-900 text-sm font-semibold mt-4">{author}</p> */}
      <a
        href="/read-more"
        className="text-blue-600 hover:text-blue-700 text-sm mt-4 inline-flex items-center"
      >
        Readmore <span className="ml-1">&rarr;</span>
      </a>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Their user-centric solutions and strategic guidance have been instrumental in the success and market-readiness of our startup's digital products.",
    },
    {
      quote:
        "Quatumcode Systems's approach to quality assurance and database architecture has significantly improved our product's robustness and efficiency.",
    },
    {
      quote:
        "Their user-centric solutions and strategic guidance have been instrumental in the success and market-readiness of our startup's digital products",
    },
    // ... Add more testimonials as needed
  ];

  return (
    <div className="py-12 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-0">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 text-blue-500">
          Testimonials
        </h2>
        <p className="text-center text-zinc-400 mb-12">
          Don't just take our word for it, read from our extensive list of case
          studies and customer testimonials.
        </p>
        <div className="flex justify-between flex-wrap -mx-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8 md:mb-0 flex-grow"
            >
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
