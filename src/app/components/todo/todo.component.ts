import { Component, OnInit } from '@angular/core';

import { TodosService } from "../../services/todos.service";
import { TodosNumberService } from "../../services/todos-number.service";
import { AlertMessageService } from "../../services/alert-message.service";

@Component({

  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']

})

export class TodoComponent implements OnInit {

  addBtnText: string = "Add";

  constructor(private todosService: TodosService,
              private todosNumberService: TodosNumberService,
              private alertMsgService: AlertMessageService) { }

  ngOnInit() {

    this.todosNumberService.todoNumber = this.todosService.todos.length;

  }

  addTodo(newTodo: string) {

    if (newTodo) {
      this.todosService.todos.push(newTodo);
      this.alertMsgService.alertMsg = 'New todo added!';
    } else {
      this.alertMsgService.alertMsg = 'You can not add an empty todo!';
    }

    this.todosNumberService.todoNumber = this.todosService.todos.length;

  }
}
