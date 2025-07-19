const TableHeader = () => (
  <thead className="bg-gray-50">
    <tr>
      <th scope="col" className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Date & Time
      </th>
      <th scope="col" className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Match
      </th>
      <th scope="col" className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Venue
      </th>
      <th scope="col" className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Result
      </th>
    </tr>
  </thead>
);

export default TableHeader; 