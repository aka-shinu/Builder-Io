export default function ConsultationCTA() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url(/bg.jpg)'}}>
      <div className="relative z-10 w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-lg px-8 py-16 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">Schedule Your Consultation Today</h2>
        <p className="text-lg text-gray-500 text-center mb-10 max-w-2xl">
          Weframe tech is the modern, award-winning platform that empowers some of the largest names in healthcare and advisory sectors.
        </p>
        <form className="w-full max-w-xl flex flex-col items-center">
          <div className="flex w-full mb-3">
            <div className="flex items-center px-4 border border-gray-300 rounded-l-lg bg-white">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12c0 2.21-3.582 4-8 4s-8-1.79-8-4 3.582-4 8-4 8 1.79 8 4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 8v.01" />
              </svg>
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 placeholder:text-gray-400 border-t border-b border-gray-300 focus:outline-none rounded-none text-base"
            />
            <button
              type="submit"
              className="rounded-r-lg bg-[#00C7BE] text-white px-6 py-3 font-semibold text-base hover:bg-[#00b3a6] transition-colors"
            >
              Book a meeting
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-1 text-center w-full">
            By submitting you agree to our privacy policy.
          </p>
        </form>
      </div>
      <div className="absolute inset-0 bg-black/10 rounded-3xl pointer-events-none" />
    </section>
  );
} 