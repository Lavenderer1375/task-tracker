import { useInfiniteQuery } from "@tanstack/react-query";

const URL = "https://task-server-roan-eight.vercel.app/data";
const fetchTasks = async ({
  pageParam = 0,
  filters = {},
  sort = "due_date",
}) => {
  let query = `${URL}?_page=${pageParam}&_limit=20`;

  if (filters.status) {
    query += `&status=${filters.status}`;
  }
  if (filters.priority) {
    query += `&priority=${filters.priority}`;
  }

  query += `&_sort=${sort}`;

  const res = await fetch(query);
  if (!res.ok) throw new Error("Failed to fetch tasks");
  const data = await res.json();
  return { tasks: data, nextPage: pageParam + 1, hasMore: data.length > 0 };
};

const useTasks = (filters, sort) => {
  return useInfiniteQuery({
    queryKey: ["tasks", filters, sort],
    queryFn: ({ pageParam = 0 }) => fetchTasks({ pageParam, filters, sort }),
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.nextPage : null,
  });
};

export default useTasks;
