import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'appointment-registry',
    loadChildren: './pages/appointment-registry/appointment-registry.module#AppointmentRegistryPageModule'
  },
  {
    path: 'ctctracking',
    loadChildren: './pages/tracking/tracking.module#TrackingPageModule'
  },
  {
    path: 'reports',
    loadChildren: './pages/reports/reports.module#ReportsPageModule'
  },
  {
    path: 'settings',
    loadChildren: './pages/settings/settings.module#SettingsPageModule'
  },
  {
    path: 'patient-summary/:patient_ID', loadChildren: './pages/patient-summary/patient-summary.module#PatientSummaryPageModule'
  },
  {
    path: 'appointment-summary/:patient_ID', loadChildren: './pages/appointment-summary/appointment-summary.module#AppointmentSummaryPageModule'
  },
  {
    path: 'tracking-form', loadChildren: './pages/tracking-form/tracking-form.module#TrackingFormPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
