import { Component, computed, DestroyRef, Inject, inject, input, OnInit } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent implements OnInit{

  userId = input.required<string>();
  order = input<'asc' | 'desc'>();
  // order?: 'asc' | 'desc';
  private tasksService = inject(TasksService);
  userTasks = computed(() => this.tasksService.allTasks().filter((task) => task.userId === this.userId()));

  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = Inject(DestroyRef);

  ngOnInit(): void {
    // const subscription = this.activatedRoute.queryParams.subscribe({
    //   next: (params) => (this.order = params['oder']),
    // });

    // this.destroyRef.onDesroy(() => subscription.unsubscribe());
  }
}
