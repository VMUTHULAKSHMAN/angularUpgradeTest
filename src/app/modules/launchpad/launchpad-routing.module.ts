import { Route } from '@angular/router';
import { WorkareaComponent } from './workarea/workarea.component';

export const launchpadHomeRoutes: Route[] = [
  {
    path: '',
    component: WorkareaComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'application',
        loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule)
      }
    ]
  }
];
