"use client";

const WorkingHours = () => {
  return (
    <div className="text-white items-center m-20">
      <h2 className="text-center text-2xl underline"> Working Hours</h2>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Day
              </th>
              <th scope="col" className="px-6 py-3">
                Hours
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};
export default WorkingHours;
