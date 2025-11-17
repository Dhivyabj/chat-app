function TableResponse({ data }) {
  return (
    <div className="mt-4 border rounded overflow-x-auto">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key} className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-200">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t dark:border-gray-600">
              {Object.values(row).map((val, j) => (
                <td key={j} className="px-4 py-2 text-gray-800 dark:text-gray-100">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableResponse;