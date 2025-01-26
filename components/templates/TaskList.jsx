import PropTypes from "prop-types";
import TaskTile from "./TaskTiles";
import Loading from "../Layout/Loading";

const TaskList = ({ tasks, isFetching }) => (
  <div className="flex-1 px-4">
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {tasks?.map((task) => (
        <TaskTile key={task.id} task={task} />
      ))}
    </div>

    {isFetching && <Loading />}
  </div>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      due_date: PropTypes.string.isRequired,
    })
  ).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default TaskList;
