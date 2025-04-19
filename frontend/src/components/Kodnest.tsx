// Make sure './index.css' with Tailwind directives is imported, usually in src/index.js

function KodNestClone() {
  // Sample Data (remains the same)
  const liveClassesData = [
    {
      id: 1,
      title: "Java - 2025",
      status: "Not Started",
      mentor: "Ashish Kumar",
      progress: 37,
      time: "08:00 AM - 10:15 AM",
      isLive: true,
    },
    {
      id: 2,
      title: "SQL - 2025",
      status: "Not Started",
      mentor: "Praveen Kumar",
      progress: 60,
      time: "11:15 AM - 1:00 PM",
      isLive: true,
    },
    {
      id: 3,
      title: "TCS Preparation 2025",
      status: "Upcoming",
      mentor: "Ayaan M",
      progress: 87,
      time: "02:30 PM - 04:00 PM",
      isLive: true,
    },
  ];

  const selfPacedCoursesData = [
    {
      id: 4,
      title: "Aptitude and Reasoning",
      status: "Self-Paced",
      mentor: "KodNest",
      progress: 0,
      courseType: "Self-Paced",
      isLive: false,
    },
    {
      id: 5,
      title: "Learn How to Code",
      status: "Self-Paced",
      mentor: "KodNest",
      progress: 0,
      courseType: "Self-Paced",
      isLive: false,
    },
  ];

  // Helper logic can be kept inside the component if needed, or applied inline
  const getBadgeClasses = (status: string) => {
    switch (status.toLowerCase()) {
      case "not started":
        return "bg-orange-400 text-white";
      case "upcoming":
        return "bg-blue-400 text-white";
      case "self-paced":
        return "bg-indigo-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  const getBorderClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "not started":
        return "border-orange-400";
      case "upcoming":
        return "border-blue-400";
      case "self-paced":
        return "border-indigo-500";
      default:
        return "border-gray-400";
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* --- Navbar --- */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        {" "}
        {/* Added sticky top */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left Side */}
            <div className="flex items-center">
              <span className="font-bold text-xl text-gray-800 mr-6">
                KodNest
              </span>
              <div className="hidden md:flex space-x-6">
                <a
                  href="#home"
                  className="text-purple-600 font-medium border-b-2 border-purple-600 px-1 py-5"
                >
                  Home
                </a>{" "}
                {/* Adjusted padding for underline alignment */}
                <a
                  href="#courses"
                  className="text-gray-600 hover:text-gray-800 font-medium py-5"
                >
                  Courses
                </a>
                <a
                  href="#practice"
                  className="text-gray-600 hover:text-gray-800 font-medium py-5"
                >
                  Practice
                </a>
                <a
                  href="#contest"
                  className="text-gray-600 hover:text-gray-800 font-medium py-5"
                >
                  Contest
                </a>
              </div>
            </div>
            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <button className="bg-purple-100 text-purple-700 hover:bg-purple-200 font-medium py-2 px-4 rounded-md text-sm">
                Help and Earn
              </button>
              <a
                href="#mentor"
                className="text-gray-600 hover:text-gray-800 font-medium text-sm"
              >
                Mentor Connect
              </a>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>{" "}
              {/* Avatar Placeholder */}
            </div>
          </div>
        </div>
      </nav>

      {/* --- Main Content Area --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* --- Hero Section --- */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-100 p-6 md:p-10 rounded-lg my-8 flex flex-col md:flex-row items-center justify-between shadow-sm border border-gray-200">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
              BoKod: Your Learning Ally at KodNest
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Unlock your potential with BroKod - your mentor, friend, coach,
              guide, and companion. Available 24/7 to support your journey, from
              learning to career success.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md shadow-md transition duration-200 ease-in-out">
              Chat with BroKod
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="w-40 h-40 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full flex items-center justify-center text-gray-600 text-sm italic">
              Illustration Placeholder
            </div>
            {/* Example: <img src="/path/to/illustration.svg" alt="BroKod Illustration" className="w-40 h-auto" /> */}
          </div>
        </section>

        {/* --- Live Classes Section --- */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold text-gray-800">
              Live Classes
            </h2>
            <div className="flex space-x-2">
              <button
                aria-label="Previous Class"
                className="border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
              >
                &lt;
              </button>
              <button
                aria-label="Next Class"
                className="border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
              >
                &gt;
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveClassesData.map((course) => (
              // --- Course Card JSX (Inline) ---
              <div
                key={course.id}
                className={`bg-white border border-gray-200 rounded-lg shadow-md p-5 flex flex-col transition-shadow hover:shadow-lg border-l-4 ${getBorderClass(
                  course.status
                )}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-md font-semibold text-gray-800 mr-2">
                    {course.title}
                  </h3>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded ${getBadgeClasses(
                      course.status
                    )} whitespace-nowrap`}
                  >
                    {course.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  Mentor: {course.mentor}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <span>Progress</span>
                  <div className="flex-grow bg-gray-200 rounded-full h-1.5 mx-3">
                    <div
                      className="bg-green-500 h-1.5 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <span>{course.progress}%</span>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <p>Class Time: {course.time}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-sm">
                  <a
                    href="#help"
                    className="text-gray-600 hover:text-blue-600 flex items-center"
                  >
                    Help Desk
                  </a>
                  <a
                    href="#join"
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    Join Class
                  </a>
                </div>
              </div>
              // --- End Course Card JSX ---
            ))}
          </div>
        </section>

        {/* --- Self-Paced Courses Section --- */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold text-gray-800">
              Self-Paced Courses
            </h2>
            {/* Optional: Hide arrows if not needed/scrollable */}
            {/* <div className="flex space-x-2">...</div> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selfPacedCoursesData.map((course) => (
              // --- Course Card JSX (Inline) ---
              <div
                key={course.id}
                className={`bg-white border border-gray-200 rounded-lg shadow-md p-5 flex flex-col transition-shadow hover:shadow-lg border-l-4 ${getBorderClass(
                  course.status
                )}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-md font-semibold text-gray-800 mr-2">
                    {course.title}
                  </h3>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded ${getBadgeClasses(
                      course.status
                    )} whitespace-nowrap`}
                  >
                    {course.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  Mentor: {course.mentor}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <span>Progress</span>
                  <div className="flex-grow bg-gray-200 rounded-full h-1.5 mx-3">
                    <div
                      className="bg-green-500 h-1.5 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <span>{course.progress}%</span>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <p>Course Type: {course.courseType}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-sm">
                  <a
                    href="#syllabus"
                    className="text-gray-600 hover:text-blue-600 flex items-center"
                  >
                    View Syllabus
                  </a>
                  <a
                    href="#continue"
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    Continue
                  </a>
                </div>
              </div>
              // --- End Course Card JSX ---
            ))}
          </div>
        </section>
      </main>

      {/* --- Floating Elements --- */}
      <div className="fixed bottom-5 left-5 z-50">
        <button
          aria-label="Help"
          className="bg-yellow-400 hover:bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-2xl font-bold"
        >
          ?
        </button>
      </div>
      <div className="fixed right-[-28px] top-1/2 transform -translate-y-1/2 -rotate-90 origin-top-right z-40">
        {" "}
        {/* Adjusted position */}
        <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-700 font-medium py-2 px-4 rounded-t-md shadow-md text-sm whitespace-nowrap">
          {" "}
          {/* Added whitespace-nowrap */}
          BroKod
        </button>
      </div>
    </div>
  );
}

export default KodNestClone;
