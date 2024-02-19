"use client";

const WorkingHours = () => {
  return (
    <div className="text-white items-center m-10">
      <h2 className="text-center text-2xl underline"> Working Hours</h2>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Day
              </th>
              <th scope="col" className="px-6 py-3">
                Hours
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                MONDAY
              </th>
              <td className="px-6 py-4 font-medium text-white">9am To 5pm</td>
            </tr>
            <tr>
              <th className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                TUESDAY
              </th>
              <td className="px-6 py-4 font-medium text-white">9am To 5pm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default WorkingHours;
