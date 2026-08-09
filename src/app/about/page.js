import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* HERO */}
      <section
        className="  bg-gradient-to-r from-purple-500 to-indigo-600
  dark:from-slate-800 dark:to-slate-900  text-white py-24 text-center"
      >
        <h1 className="text-5xl font-bold mb-4">About Our Store</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          We are more than just an eCommerce platform — we bring quality
          products, trusted service, and seamless shopping experience to your
          fingertips.
        </p>
      </section>

      {/* STORY */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
          alt="about"
          className="rounded-2xl shadow-xl"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Started with a simple idea—to make online shopping easier, faster,
            and more reliable—we&apos;ve grown into a trusted destination for
            customers looking for quality products at competitive prices.
            <br />
            What began as a vision to simplify online shopping has evolved into
            a platform that serves thousands of satisfied customers with a wide
            range of carefully selected products, secure payment options, and
            fast, dependable delivery. <br />
            We believe that shopping should be convenient, enjoyable, and
            accessible to everyone. That&apos;s why we continuously expand our
            product collection, partner with trusted suppliers, and focus on
            delivering exceptional customer service at every step of the
            journey.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white dark:bg-gray-800 py-16 border border-gray-100 shadow">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4   gap-8 text-center ">
          <div className=" border border-slate-100 shadow-xl p-6">
            <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-600 dark:text-gray-400">Customers</p>
          </div>

          <div className="border border-slate-100 shadow p-6">
            <h3 className="text-3xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-600 dark:text-gray-400">Products</p>
          </div>

          <div className="border border-slate-100 shadow p-6">
            <h3 className="text-3xl font-bold text-blue-600">4.8★</h3>
            <p className="text-gray-600 dark:text-gray-400">Ratings</p>
          </div>

          <div className="border border-slate-100 shadow p-6">
            <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-600 dark:text-gray-400">Support</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h1 className="font-bold text-3xl text-center mx-auto mb-5">
            Our Goals and Objectives
          </h1>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Right */}
            <div className="space-y-8">
              {/* Mission */}
              <div className=" rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>

                <p className="text-gray-700 text-sm leading-8">
                  Our mission is to make online shopping simple, secure, and
                  accessible by providing quality products, affordable prices,
                  and exceptional customer service. We strive to create a
                  seamless shopping experience that customers can trust.
                </p>
              </div>

              {/* Goals */}
              <div className=" rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Goals
                </h2>

                <ul className="space-y-3 text-sm text-gray-700">
                  <li>
                    • Become Nepal&apos;s most trusted online shopping platform.
                  </li>
                  <li>• Reach customers nationwide with fast delivery.</li>
                  <li>• Offer a diverse selection of quality products.</li>
                  <li>
                    • Enhance customer satisfaction through continuous
                    improvement.
                  </li>
                  <li>
                    • Expand our services to international markets in the
                    future.
                  </li>
                </ul>
              </div>
            </div>
            <div className=" rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Objectives
              </h2>

              <ul className="space-y-4 text-sm text-gray-700">
                <li>
                  ✔ Provide customers with high-quality products at competitive
                  prices.
                </li>
                <li>
                  ✔ Ensure secure, simple, and hassle-free online shopping.
                </li>
                <li>✔ Deliver orders quickly and reliably across Nepal.</li>
                <li>
                  ✔ Continuously expand our product range to meet customer
                  needs.
                </li>
                <li>
                  ✔ Build long-term customer trust through excellent service.
                </li>
                <li>
                  ✔ Embrace innovation to improve the shopping experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-gray-200 dark:bg-gray-800 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="w-32 h-32 mx-auto rounded-full mb-4"
              alt=""
            />
            <h3 className="font-semibold">Samikshya</h3>
            <p className="text-gray-600 dark:text-gray-400">Founder</p>
          </div>

          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-32 h-32 mx-auto rounded-full mb-4"
              alt=""
            />
            <h3 className="font-semibold">Aarav</h3>
            <p className="text-gray-600 dark:text-gray-400">Developer</p>
          </div>

          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              className="w-32 h-32 mx-auto rounded-full mb-4"
              alt=""
            />
            <h3 className="font-semibold">Sita</h3>
            <p className="text-gray-600 dark:text-gray-400">Support Lead</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-300 dark:bg-slate-600 text-white text-center py-16">
        <h2 className="text-3xl text-slate-800 font-bold mb-4">
          Ready to start shopping?
        </h2>
        <p className="mb-6 text-slate-800">
          Explore our products and enjoy the best deals
        </p>
        <button className="bg-white text-blue-600  px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
          Shop Now
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
