interface ITask {
  id: string;
  name: string;
  type: "Story" | "Task" | "SubTask";
  key: string;
  summary: string;
  status: TaskStatus;
  priority: number;
  dueDate: Date;
  assignee: string;
  reporter: string;
  project: string;
  createdAt: Date;
  updatedAt: Date;
  parent?: string;
  team?: string;
  sprint?: string;
}
