// NewsletterForm.js
import React from 'react';

function NewsletterForm() {
  return (
    <div className="bg-purple-300 h-full ">
      <div className="flex justify-center items-center h-full">
        <div className="newsletter-form rounded-lg p-6 flex items-center ">
          <h2 className="text-lg font-semibold mr-6">Join Our Newsletter</h2>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md px-5 py-2.5 mr-2"
            />
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2.5 px-4 rounded-md transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsletterForm;
