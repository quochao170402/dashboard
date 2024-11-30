interface ITask {
  id: string;
  name: string;
  type: "Story" | "Task" | "SubTask";
  label?: string;
  key: string;
  summary: string;
  description?: string;
  status: TaskStatus;
  priority: number;
  dueDate: Date;
  assigneeId: string;
  reporterId: string;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
  parent?: string;
  teamId?: string;
  sprintId?: string;
  epicId?: string;
  comments?: IComment[];
}

interface IComment {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  taskId: string;
  children?: IComment[];
}
