import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    { id: 1, desc: 'Tarefa 1', completed: false },
    { id: 2, desc: 'Tarefa 2', completed: true },
    { id: 3, desc: 'Tarefa 3', completed: true },
    { id: 4, desc: 'Tarefa 4', completed: false },
    { id: 5, desc: 'Tarefa 5', completed: false },
    { id: 6, desc: 'Tarefa 6', completed: true },
    { id: 7, desc: 'Tarefa 7', completed: false },
  ];

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find((task) => task.id == id);
    return task;
  }

  create(task: Task) {
    let lastId = 0;
    if (this.tasks.length > 0 ) {
      lastId = this.tasks[this.tasks.length - 1].id;
    }
    task.id = lastId + 1;
    this.tasks.push(task);

    return task;
  }

  update(task: Task) {
    const taskIndex = this.getById(task.id);
    if (taskIndex) {
      taskIndex.desc = task.desc;
      taskIndex.completed = task.completed;
    }

    return task;
  }

  delete(id: number) {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks.splice(index, 1);
    return 'Task has been deleted!';
  }
}
