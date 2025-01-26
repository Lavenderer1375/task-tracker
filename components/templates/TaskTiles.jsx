import PropTypes from "prop-types";

const TaskTile = ({ task }) => {
  return (
    <div
      key={task.id}
      className={`p-4 rounded-lg shadow-lg ${
        task.priority === "High"
          ? "bg-red-500 text-white"
          : task.priority === "Medium"
          ? "bg-yellow-400 text-black"
          : "bg-green-500 text-white"
      }`}
      style={{ width: "auto" }} // Reduce the width by 5px
    >
      <h3 className="font-semibold text-lg">{task.title}</h3>
      <p className="text-sm">{task.description}</p>
      <p className="text-sm">
        <span className="font-bold">Priority:</span> {task.priority}
      </p>
      <p className="text-sm">
        <span className="font-bold">Status:</span> {task.status}
      </p>
      <p className="text-sm">
        <span className="font-bold">Due Date:</span> {task.due_date}
      </p>
    </div>
  );
};

TaskTile.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    due_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskTile;
