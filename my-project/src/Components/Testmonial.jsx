import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Verified Buyer",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      content: "I'm amazed by the quality of products and the exceptional customer service. Shopping here has been a delightful experience!",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Loyal Customer",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      content: "The selection is outstanding and shipping is always fast. This has become my go-to online store for all my needs.",
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Fashion Enthusiast",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      content: "The attention to detail and product quality is unmatched. I always feel confident shopping here.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="mt-6 flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
