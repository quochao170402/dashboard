import { TaskStatus } from "@/@types/Enums";
import { faker } from "@faker-js/faker";
import { useState } from "react";

const generateDummyTask = (): ITask => ({
  id: faker.string.uuid(),
  name: faker.lorem.words(3),
  type: faker.helpers.arrayElement(["Story", "Task", "SubTask"]),
  key: faker.string.alphanumeric(4).toUpperCase(),
  summary: faker.lorem.sentence(),
  status: faker.helpers.arrayElement(Object.values(TaskStatus)),
  priority: faker.number.int({ min: 1, max: 5 }),
  dueDate: faker.date.future(),
  assigneeId: faker.name.fullName(),
  reporterId: faker.name.fullName(),
  projectId: faker.commerce.department(),
  createdAt: faker.date.past(),
  updatedAt: faker.date.recent(),
  parent: faker.datatype.boolean() ? faker.string.uuid() : "",
  teamId: faker.datatype.boolean() ? faker.company.name() : "",
  sprintId: `Sprint ${faker.number.int({ min: 1, max: 5 })}`,
});

const generateDummyTasks = (count: number): ITask[] => {
  return Array.from({ length: count }, generateDummyTask);
};
const useTask = () => {
  const [tasks, setTasks] = useState<ITask[]>(generateDummyTasks(40));

  return {
    tasks,
  };
};

export default useTask;
