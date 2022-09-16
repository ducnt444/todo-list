export type Task = {
  id: string;
  title: string;
  description: string;
  due_date: string;
  priority: string;
};

export type TaskItemProps = {
  checked: boolean;
  title: string;
  priority: string;
};

export type TaskDetailsProps = {
  id: string;
  title: string;
  description: string;
  due_date: string;
  priority: string;
  isShowing: boolean;
  type: "add" | "edit";
};
