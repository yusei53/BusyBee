import { Metadata } from "next";
import SortTodoPage from "../components/sort/sort-todo-page";

export const metadata: Metadata = {
  title: "タスク吐き出し場所",
};

const page = () => {
  return <SortTodoPage />;
};

export default page;
