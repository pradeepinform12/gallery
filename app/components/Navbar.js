'use client';

export default function Navbar() {
  return (
    <div className="bg-violet-50 text-gray-800 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-0 px-4">
        
        {/* Phone Numbers */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-1 md:space-y-0 text-sm md:text-base font-medium text-gray-700">
          <div className="flex items-center space-x-2 hover:text-violet-600 transition">
            <svg className="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 2.5A1.5 1.5 0 013.5 1h13A1.5 1.5 0 0118 2.5v15a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 17.5v-15zM4 3v14h12V3H4z"/>
            </svg>
            <span>+91-7819941496</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-violet-600 transition">
            <svg className="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 2.5A1.5 1.5 0 013.5 1h13A1.5 1.5 0 0118 2.5v15a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 17.5v-15zM4 3v14h12V3H4z"/>
            </svg>
            <span>+91-9871318472</span>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center space-x-2 text-sm md:text-base font-medium text-gray-700 hover:text-violet-600 transition">
          <svg className="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
          </svg>
          <span>Shop No. 27, JS Complex, Panchmukhi Hanuman Mandir, Greater Noida - 201306</span>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-2 text-sm md:text-base font-medium text-gray-700 hover:text-violet-600 transition">
          <svg className="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <span>Brandinghub542@gmail.com</span>
        </div>

      </div>
    </div>
  );
}
