
import { useCourseContext } from "../Provider/CourseProvider";

const CompletedCourses = () => {
  const { allCourses, markAsIncomplete } = useCourseContext();

  return (
    <div className="ml-10 p-6">
      <h2 className="text-2xl font-semibold mb-4">Completed Courses</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
          <th className="py-2 px-4 border">Course Name</th>
            <th className="py-2 px-4 border">Course Code</th>
            <th className="py-2 px-4 border">Credit</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {allCourses
            .filter((course) => course.isComplete)
            .map((course) => (
              <tr key={course.id}>
                    <td className="py-2 px-4 border">{course.title}</td>
              <td className="py-2 px-4 border">{course.code}</td>
              <td className="py-2 px-4 border">{course.credit} cr</td>
                <td className="py-2 px-4 border">
                  <button
                    className="bg-yellow-500 text-white py-1 px-3 rounded"
                    onClick={() => markAsIncomplete(course.id)}
                  >
                    Mark Incomplete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompletedCourses;
