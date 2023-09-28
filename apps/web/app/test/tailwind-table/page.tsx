export default function Page() {
  return (
    <div className="container m-8 mx-auto flex flex-col justify-center">
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <div className="inline-block min-w-full align-middle dark:bg-gray-800">
          <div className="p-4">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search for items"
              />
            </div>
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full table-fixed divide-y divide-green-400 dark:divide-gray-700 ">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-search-all"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      />
                      <label htmlFor="checkbox-search-all" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                  >
                    Price
                  </th>
                  <th scope="col" className="p-4">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-search-1"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      />
                      <label htmlFor="checkbox-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                    HP Omen 45L
                  </td>
                  <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-500 dark:text-white">
                    Desktop PC
                  </td>
                  <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                    $1899
                  </td>
                  <td className="whitespace-nowrap py-4 px-6 text-right text-sm font-medium">
                    <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
