// todo.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<any>('http://localhost:3000/todos');
  }

  createTodo(todo: any) {
    return this.http.post<any>('http://localhost:3000/todos', todo);
  }
}
