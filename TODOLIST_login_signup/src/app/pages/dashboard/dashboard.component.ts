// dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todos: any[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(
      res => {
        this.todos = res;
      },
      err => {
        console.log(err);
        // Handle error
      }
    );
  }
}
