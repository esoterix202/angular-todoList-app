import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

import { TodosService } from "../services/todos.service";
import { TodosNumberService } from "../services/todos-number.service";
import { AlertMessageService } from "../services/alert-message.service";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule
  ],
  providers: [TodosService, TodosNumberService, AlertMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
