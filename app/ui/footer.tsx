import React from "react";

// Get the current date
const currentDate: Date = new Date();

// Contact component
const Contact: React.FC = () => {
  return (
    <section className="py-16 text-white" id="contact">
      <h3 className="text-3xl font-bold mb-8 text-center">Contact Us</h3>
      <p className="text-center mb-4">
        Have questions or need a custom solution? Reach out to us!
      </p>
      <div className="text-center">
        <a href="mailto:support@securefiles.com" className="text-blue-600 hover:underline">
          support@securefiles.com
        </a>
      </div>
    </section>
  );
};

// Footer component
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-200 p-4 text-center">
      <Contact />
      <p className="text-white">
        ©{currentDate.getFullYear()} SecureFiles. All rights reserved.
      </p>
    </footer>
  );
};

export { Footer };
