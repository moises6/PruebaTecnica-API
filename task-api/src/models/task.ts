// src/models/task.ts
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export let tasks: Task[] = [];
