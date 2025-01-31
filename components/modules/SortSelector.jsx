import PropTypes from "prop-types";

const SortSelector = ({ sort, onSortChange }) => (
  <div className="flex justify-end p-4">
    <div className="flex items-center gap-3">
      {/* Sort by Dropdown */}
      <label htmlFor="sort" className="font-medium text-gray-700 text-sm">
        Sort By:
      </label>
      <select
        id="sort"
        onChange={onSortChange}
        value={sort}
        className="border-gray-300 shadow-sm p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="due_date">Due Date</option>
        <option value="priority">Priority</option>
        <option value="">None</option>
      </select>
    </div>
  </div>
);

SortSelector.propTypes = {
  sort: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default SortSelector;
