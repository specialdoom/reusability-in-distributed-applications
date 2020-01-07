import { Component, OnInit } from "@angular/core";
import { Task } from "src/model/task.model";
import axios from "axios";
@Component({
  selector: "list",
  templateUrl: "./list.component.html"
})
export class ListComponent implements OnInit {
  tasks: Task[];
  constructor() {
    this.tasks = [];
  }

  ngOnInit() {
    axios.get("http://localhost:3000/tasks").then(res => {
      this.tasks = res.data;
    });
  }
}
