import { Route } from '@angular/router';
import { ActionComponent } from './components/action/action.component';
import { ApplicationDetailsComponent } from './components/application-details/application-details.component';
import { CorrespondenceComponent } from './components/correspondence/correspondence.component';

export const applicationRoutes: Route[] = [
  {
    path: 'action',
    component: ActionComponent
  },
  {
    path: 'correspondence',
    component: CorrespondenceComponent
  },
  {
    path: 'details',
    component: ApplicationDetailsComponent
  }
];
