import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function KodNest() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 border-b">
        <div className="flex items-center gap-12">
          <h1 className="text-2xl font-bold text-black">KodNest</h1>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-black font-medium border-b-2 border-yellow-400"
            >
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Courses
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Practice
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Contest
            </a>
            <Link to="/interview" className="text-gray-600 hover:text-black">
              F to F Interview
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-400 transition-colors">
            Help and Earn
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900">
            <span>Mentor Connect</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm text-gray-600">U</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-8 py-12">
        <div className="flex justify-between items-center">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold mb-4">
              BroKod: Your Learning Ally at KodNest
            </h1>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Unlock your potential with BroKod - your mentor, friend, coach,
              guide, and companion. Available 24/7 to support your journey, from
              learning to career success
            </p>
            <button className="px-6 py-3 bg-yellow-400 rounded-md font-medium hover:bg-yellow-500 transition-colors">
              Chat with BroKod
            </button>
          </div>
          <div className="w-96 h-72 bg-purple-50 rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-black">
              BroKod AI Assistant
            </span>
          </div>
        </div>

        {/* Live Classes Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              Live Classes
              <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-600">
                ?
              </span>
            </h2>
            <div className="flex gap-2">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              {
                title: "Java - 2025",
                mentor: "Punith Kumar",
                progress: "97.03",
                time: "09:00 AM - 10:15 AM",
                status: "Not Started",
                letter: "J",
                color: "bg-blue-500",
              },
              {
                title: "SQL - 2025",
                mentor: "Punith Kumar",
                progress: "89.17",
                time: "10:15 AM - 11:00 AM",
                status: "Not Started",
                letter: "S",
                color: "bg-purple-500",
              },
              {
                title: "TCS Preparation 2025",
                mentor: "Ayush B",
                progress: "97.3",
                time: "02:30 PM - 04:00 PM",
                status: "Upcoming",
                letter: "T",
                color: "bg-indigo-500",
              },
            ].map((classItem, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-medium">
                    {classItem.letter}
                  </div>
                  <div>
                    <h3 className="font-medium">{classItem.title}</h3>
                    <p className="text-sm text-gray-600">
                      Mentor: {classItem.mentor}
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{classItem.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-black"
                      style={{ width: `${classItem.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Class Time</p>
                  <p className="text-sm font-medium">{classItem.time}</p>
                </div>
                <div className="flex items-center justify-between">
                  <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                    <span className="w-4 h-4 rounded-full border flex items-center justify-center text-xs">
                      ?
                    </span>
                    Help Desk
                  </button>
                  <button className="text-sm text-blue-600 hover:text-blue-700">
                    Join Class
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Self-Paced Courses */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-xl font-semibold">Self-Paced Courses</h2>
            <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-600">
              ?
            </span>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "Aptitude and Reasoning",
                mentor: "KodNest",
                letter: "A",
              },
              {
                title: "Learn How to Code",
                mentor: "KodNest",
                letter: "L",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-medium">
                    {course.letter}
                  </div>
                  <div>
                    <h3 className="font-medium">{course.title}</h3>
                    <p className="text-sm text-gray-600">
                      Mentor: {course.mentor}
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>0%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full"></div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Course Type</p>
                  <p className="text-sm font-medium">Self-Paced</p>
                </div>
                <div className="flex items-center justify-between">
                  <button className="text-sm text-gray-600 hover:text-gray-900">
                    View Syllabus
                  </button>
                  <button className="text-sm text-blue-600 hover:text-blue-700">
                    Continue
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KodNest;
