import { useState } from "react";
import Filters from "../modules/Filters";
import SortSelector from "../modules/SortSelector";
import TaskList from "./TaskList";
import useTasks from "../../utils/useTasks";
import TaskForm from "./TaskForm";
import DarkModeToggle from "../Layout/DarkMode";

const Dashboard = () => {
  const [filters, setFilters] = useState({ status: "", priority: "" });
  const [sort, setSort] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false); // State to toggle form visibility

  const { data, fetchNextPage, hasNextPage, isFetching, isError, error } =
    useTasks(filters, sort);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (
      scrollTop + clientHeight >= scrollHeight - 10 &&
      hasNextPage &&
      !isFetching
    ) {
      fetchNextPage();
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const toggleTaskFormVisibility = () => {
    setIsFormVisible((prev) => !prev); // Toggle the visibility state
  };

  return (
    <div
      className="flex flex-col w-auto h-screen overflow-y-auto"
      style={{ maxHeight: "95vh" }}
      onScroll={handleScroll}
    >
      {/* Dark Mode Toggle */}
      <div className="flex justify-end p-4">
        <DarkModeToggle />
      </div>

      <h1 className="m-5 p-4 font-bold text-2xl">Dashboard</h1>
      {isError && <p className="p-4 text-red-500">Error: {error.message}</p>}

      <div className="flex justify-center items-center">
        <button
          onClick={toggleTaskFormVisibility}
          className="bg-blue-600 hover:bg-blue-700 m-4 p-2 rounded-md w-3xl font-semibold text-white"
        >
          {isFormVisible ? "Hide Task Form" : "Add New Task"}
        </button>
      </div>

      {/* Conditionally render the TaskForm based on the visibility state */}
      {isFormVisible && <TaskForm />}

      {/* Filters and Sort Controls */}
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      <SortSelector sort={sort} onSortChange={handleSortChange} />

      {/* Task List */}
      <TaskList
        tasks={data?.pages.flatMap((page) => page.tasks)}
        isFetching={isFetching}
      />
    </div>
  );
};

export default Dashboard;
