import {Component, OnInit} from "@angular/core";
import {Task} from "../task";
import {AppService} from "../app.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'create',
  templateUrl: './app/createTask/createTask.component.html',
  styleUrls: ['']
})

export class CreateComponent implements OnInit {

  index: number;

  task: Task = new Task('', '', '', '');

  constructor(private service: AppService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((data: any) => {
      this.index = +data.indexSent;
      if (this.index || this.index === 0) {
        this.task = this.service.taskArray[this.index];
      }
    });
  }

  pushTask() {
    if (this.index) {
      this.service.update(this.index, this.task);
    } else {
      this.service.add(this.task);
    }

    this.router.navigate(['show']);
  }
}
