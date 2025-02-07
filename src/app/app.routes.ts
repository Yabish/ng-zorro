import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.routes').then((m) => m.WELCOME_ROUTES),
  },
  {
    path: 'monitor',
    loadChildren: () =>
      import('./pages/monitor/monitor.routes').then((m) => m.MONITOR_ROUTES),
  },
  {
    path: 'workplace',
    loadChildren: () =>
      import('./pages/workplace/workplace.routes').then(
        (m) => m.WORKPLACE_ROUTES
      ),
  },
];
