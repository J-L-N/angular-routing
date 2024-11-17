import { Routes } from "@angular/router";
import { resolveUserTasks, TasksComponent } from "../tasks/tasks.component";
import { NewTaskComponent } from "../tasks/new-task/new-task.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'prefix'
  },
  {
    path: 'tasks', //<your-domain>/users/<userId>/tasks
    component: TasksComponent,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange', //the resolver function will be reexecuted when parameter chenges
    resolve: {
      userTasks: resolveUserTasks,
    }
  },
  {
    path: 'tasks/new', //<your-domain>/users/<userId>/tasks
    component: NewTaskComponent
  },
]
