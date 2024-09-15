import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Signup from './Pages/Signup';
import Portal from './Pages/Portal/Portal';
import AllCourses from './components/AllCourses';
import CompletedCourses from './components/CompletedCourses';
import { CourseProvider } from './Provider/CourseProvider';
import IncompleteCourses from './components/IncompleteCourses';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/portal",
    element: <Portal />,
    children: [
      {
        path: "/portal", 
        element:  <div className="ml-64 flex-1 p-6">
        <h1 className="text-4xl font-semibold text-gray-800">
          Welcome to the GUB Student Portal
        </h1>
      </div> ,
      },
      {
        path: "all-courses", 
        element: <AllCourses />,
      },
      {
        path: "completed-courses", 
        element: <CompletedCourses />,
      },
      {
        path: "incomplete-courses", 
        element: <IncompleteCourses />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CourseProvider>
    <RouterProvider router={router} />
    </CourseProvider>
  </StrictMode>,
)
