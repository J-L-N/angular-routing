import { Routes } from "@angular/router";
import { routes as userRoutes } from "./users/users.routes";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveTitle, resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./users/not-found/not-found.component";

export const routes: Routes = [
  {
    path: '', //<your-domain>
    component: NoTaskComponent,
    title: 'No Task Selected'
  },
  {
    path: 'users/:userId', //<your-domain>/users/<userId>
    component: UserTasksComponent,
    children: userRoutes,
    data: {
      message: 'Hello!'
    },
    resolve: {
      userName: resolveUserName
    },
    title: resolveTitle
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]
