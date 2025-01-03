import React from 'react';

const ReservationSection = () => {
  return (
    <section className="bg-gradient-to-r from-black to bg-slate-900 py-10">
      <div className="container mx-auto flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Make A Reservation</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 text-lg border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 text-lg border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="date"
                className="w-full p-4 text-lg border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="time"
                className="w-full p-4 text-lg border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 text-lg rounded-lg hover:bg-blue-800"
              >
                Reserve Table
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
