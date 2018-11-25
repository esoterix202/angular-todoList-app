import { Component, OnInit } from '@angular/core';

import { TodosService } from "../../services/todos.service";
import { TodosNumberService } from "../../services/todos-number.service";
import { AlertMessageService } from "../../services/alert-message.service";

@Component({

  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html'

})

export class TodoItemComponent implements OnInit {

  dltBtnText: string = "Delete";
  editBtnText: string = "Edit";
  saveBtnText: string = "Save";
  todoShow: boolean = true;
  editTodoShow: boolean = false;
  saveTodoShow: boolean = false;
  editBtnShow: boolean = true;
  deleteBtnShow: boolean = true;
  saveBtnShow: boolean = false;

  constructor(private todosService: TodosService,
              private todosNumberService: TodosNumberService,
              private alertMsgService: AlertMessageService) { }

  ngOnInit() { }

  deleteTodo(i: number) {
    this.todosService.todos.splice(i, 1);
    this.alertMsgService.alertMsg = 'Todo deleted!';
    this.todosNumberService.todoNumber = this.todosService.todos.length;
  }

  editTodoToggle() {
    this.todoShow = false;
    this.editTodoShow = true;
    this.editBtnShow = false;
    this.deleteBtnShow = false;
    this.saveBtnShow = true;
  }

  saveTodo() {
    this.todoShow = true;
    this.editTodoShow = false;
    this.editBtnShow = true;
    this.deleteBtnShow = true;
    this.saveBtnShow = false;
  }

}
