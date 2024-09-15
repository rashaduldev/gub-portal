/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';

// Create the context
const CourseContext = createContext();

// Export the custom hook for accessing the context
export const useCourseContext = () => useContext(CourseContext);

// CourseProvider component to wrap around the app and provide state
export const CourseProvider = ({ children }) => {
  const [allCourses, setAllCourses] = useState([
    { id: 1, title: 'Introduction to Electrical Engineering',code:'EEE 201-CSE(181)', credit:'3', isComplete: false },
    { id: 2, title: 'Introduction to Electrical Engineering Lab',code:'EEE 202-CSE(181)', credit:'3', isComplete: false },
    { id: 3, title: 'Ordinary and Partial Differential Equations and Coordinate Geometry',code:'MAT 103-CSE(181)', credit:'3', isComplete: true },
    { id: 4, title: 'Engineering Economics	',code:'GED 301-CSE(181)', credit:'3', isComplete: true },
    { id: 5, title: 'Engineering Economic	',code:'GED 301-CSE(181)', credit:'3', isComplete: true },
    { id: 6, title: 'Engineering Economics	',code:'GED 301-CSE(181)', credit:'3', isComplete: true },
    { id: 7, title: 'Engineering Economics	',code:'GED 301-CSE(181)', credit:'3', isComplete: true },
    { id: 8, title: 'Engineering Economics	',code:'GED 301-CSE(181)', credit:'3', isComplete: true },
    { id: 9, title: 'Engineering Economics	',code:'GED 301-CSE(181)', credit:'3', isComplete: true },
    { id: 10, title: 'Engineering Economics	',code:'GED 301-CSE(181)', credit:'3', isComplete: true },
    { id: 11, title: 'Engineering Economics	',code:'GED 301-CSE(181)', credit:'3', isComplete: true },
    { id: 12, title: 'Engineering Economics	',code:'GED 301-CSE(181)', credit:'3', isComplete: true },
    { id: 13, title: 'Engineering Economics	',code:'GED 301-CSE(181)', credit:'3', isComplete: true },
  ]);

  // Function to mark a course as complete
  const markAsComplete = (id) => {
    setAllCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, isComplete: true } : course
      )
    );
  };

  // Function to mark a course as incomplete
  const markAsIncomplete = (id) => {
    setAllCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, isComplete: false } : course
      )
    );
  };

  // Provide the state and the functions to the context
  return (
    <CourseContext.Provider value={{ allCourses, markAsComplete, markAsIncomplete }}>
      {children}
    </CourseContext.Provider>
  );
};
