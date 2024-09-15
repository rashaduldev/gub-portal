import { NavLink, Outlet } from "react-router-dom";

const Portal = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col mx-[200px]">
      {/* Header */}
      <header className="bg-white shadow-md py-4  z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
              {/* Logo Placeholder */}
            </div>
            <h1 className="text-2xl font-semibold text-green-600">
              <span className="italic">Green</span> University of Bangladesh
            </h1>
          </div>

          {/* Right: User Info */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/40" // Placeholder for user image
                alt="user avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3 text-sm">
                <p className="font-semibold">223015074 | Md Rashadul Islam</p>
                <a href="/" className="text-red-500 text-sm">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="min-h-screen bg-gray-100 flex mt-5">
        {/* Sidebar */}
        <aside className="w-64 bg-green-500 text-white inset-y-0">
          <nav className="mt-8">
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/portal"
                  end
                  className={({ isActive }) =>
                    isActive ? "block px-6 py-3 bg-green-700" : "block px-6 py-3 hover:bg-green-600"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portal/all-courses"
                  className={({ isActive }) =>
                    isActive ? "block px-6 py-3 bg-green-700" : "block px-6 py-3 hover:bg-green-600"
                  }
                >
                  All Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portal/completed-courses"
                  className={({ isActive }) =>
                    isActive ? "block px-6 py-3 bg-green-700" : "block px-6 py-3 hover:bg-green-600"
                  }
                >
                  Completed Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portal/incomplete-courses"
                  className={({ isActive }) =>
                    isActive ? "block px-6 py-3 bg-green-700" : "block px-6 py-3 hover:bg-green-600"
                  }
                >
                  Incomplete Courses
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>

        <div>
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-4 text-center text-sm text-gray-600">
        &copy; 2024 - Edusoft Consultants Ltd.
      </footer>
    </div>
  );
};

export default Portal;
