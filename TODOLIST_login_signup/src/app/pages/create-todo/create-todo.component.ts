
import { Component } from '@angular/core';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  name: string;
  description: string;
  startTime: string;
  endTime: string;
  priority: string;

  constructor(private todoService: TodoService) { }

  createTodo() {
    const todo = {
      name: this.name,
      description: this.description,
      startTime: this.startTime,
      endTime: this.endTime,
      priority: this.priority
    };

    this.todoService.createTodo(todo).subscribe(
      res => {
        console.log(res);
        // Handle successful creation
      },
      err => {
        console.log(err);
        // Handle error
      }
    );
  }
}
