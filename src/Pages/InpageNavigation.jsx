import React from "react";

const InPageNavigation = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-teal-600 text-white shadow-md z-50">
        <ul className="flex justify-center space-x-4 py-4">
          <li>
            <button
              onClick={() => scrollToSection("section1")}
              className="hover:underline focus:outline-none"
            >
              Section 1
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("section2")}
              className="hover:underline focus:outline-none"
            >
              Section 2
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("section3")}
              className="hover:underline focus:outline-none"
            >
              Section 3
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("section4")}
              className="hover:underline focus:outline-none"
            >
              Section 4
            </button>
          </li>
        </ul>
      </nav>

      {/* Content Sections */}
      <div className="mt-16">
        <section
          id="section1"
          className="min-h-screen flex items-center justify-center bg-gray-100"
        >
          <h2 className="text-4xl font-bold text-teal-600">Section 1</h2>
        </section>
        <section
          id="section2"
          className="min-h-screen flex items-center justify-center bg-gray-200"
        >
          <h2 className="text-4xl font-bold text-teal-600">Section 2</h2>
        </section>
        <section
          id="section3"
          className="min-h-screen flex items-center justify-center bg-gray-300"
        >
          <h2 className="text-4xl font-bold text-teal-600">Section 3</h2>
        </section>
        <section
          id="section4"
          className="min-h-screen flex items-center justify-center bg-gray-400"
        >
          <h2 className="text-4xl font-bold text-teal-600">Section 4</h2>
        </section>
      </div>
    </div>
  );
};

export default InPageNavigation;
