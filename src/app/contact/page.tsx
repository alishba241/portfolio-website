import Link from "next/link";
import React from "react";

function ContactPage() {
  return (
    <div className="mt-[100px] mb-12">
      <h2 className=" font-extrabold text-2xl text-sans text-center text-white">
        Let&#39;s Work Together
      </h2>
      <div className="flex mt-[50px] justify-center ">
        <div className="  h-[1000px] w-[95%] border-2 border-t-cyan-300 border-r-transparent  border-b-cyan-300 border-l-transparent  text-white font-sans text-center">
          <section className="relative py-12 bg-transparent">
            <div className="container mx-auto text-center px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Get in Touch
              </h2>
              <p className="text-md md:text-lg mb-8 text-gray-300">
                I&#39;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision. Feel free to reach
                out!
              </p>

              <div className="relative max-w-md md:max-w-lg mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 md:p-8 rounded-lg shadow-lg space-y-6">
                <form className="space-y-4 md:space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full p-3 md:p-4 text-white rounded-lg border-2 border-transparent focus:border-cyan-400 outline-none transition duration-300 bg-gray-200 bg-opacity-20"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="w-full p-3 md:p-4 text-white rounded-lg border-2 border-transparent focus:border-cyan-400 outline-none transition duration-300 bg-gray-200 bg-opacity-20"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full p-3 md:p-4 text-whiterounded-lg border-2 border-transparent focus:border-cyan-400 outline-none transition duration-300 bg-gray-200 bg-opacity-20"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      className="w-full p-3 md:p-4 text-white rounded-lg border-2 border-transparent focus:border-cyan-400 outline-none transition duration-300 bg-gray-200 bg-opacity-20 h-32 md:h-40 resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 md:py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>

                <div className="mt-8">
                  <p className="text-md md:text-lg text-gray-300">
                    Or connect with me on social media:
                  </p>
                  <div className="flex justify-center space-x-6 md:space-x-8 mt-4 md:mt-6">
                    <Link
                      href="https://www.linkedin.com/in/alishba-naveed-a9ab38251/"
                      target="_blank"
                      className="text-cyan-400 hover:text-cyan-500 transition duration-300 text-xl md:text-2xl"
                      rel="noopener"
                    >
                      <i className="fab fa-linkedin"></i>
                    </Link>
                    <Link
                      href="https://github.com/alishba241?tab=repositories"
                      target="_blank"
                      className="text-cyan-400 hover:text-cyan-500 transition duration-300 text-xl md:text-2xl"
                      rel="noopener"
                    >
                      <i className="fab fa-github"></i>
                    </Link>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-center space-x-4">
                      <Link
                        href="https://www.linkedin.com/in/alishba-naveed-a9ab38251/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="px-6 py-3 bg-cyan-400 text-gray-900 rounded-lg font-bold hover:bg-cyan-500 transition duration-300">
                          LinkedIn
                        </button>
                      </Link>
                      <Link
                        href="https://github.com/alishba241?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="px-6 py-3 bg-gray-900 text-cyan-400 rounded-lg font-bold hover:bg-gray-800 transition duration-300">
                          GitHub
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-8">
                  <p className="text-md md:text-lg text-gray-300">
                    Prefer direct email? Reach me at{" "}
                    <Link
                      href="mailto:alishbasheikh723@gmail.com"
                      className="text-cyan-400 hover:text-cyan-500 transition duration-300"
                    >
                      developer99@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
