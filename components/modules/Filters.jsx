import PropTypes from "prop-types";

const Filters = ({ filters, onFilterChange }) => (
  <div className="flex flex-wrap gap-4 bg-gray-50 shadow-md mt-4 p-4 rounded-lg">
    <div className="flex gap-4">
      {/* Status Filter */}
      <div className="flex-1">
        <label
          htmlFor="status"
          className="block mb-1 font-medium text-gray-700 text-sm"
        >
          Status
        </label>
        <select
          name="status"
          id="status"
          onChange={onFilterChange}
          value={filters.status}
          className="border-gray-300 shadow-sm p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Complete">Complete</option>
        </select>
      </div>

      {/* Priority Filter */}
      <div className="flex-1">
        <label
          htmlFor="priority"
          className="block mb-1 font-medium text-gray-700 text-sm"
        >
          Priority
        </label>
        <select
          name="priority"
          id="priority"
          onChange={onFilterChange}
          value={filters.priority}
          className="border-gray-300 shadow-sm p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
    </div>
  </div>
);

Filters.propTypes = {
  filters: PropTypes.shape({
    status: PropTypes.string,
    priority: PropTypes.string,
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filters;
