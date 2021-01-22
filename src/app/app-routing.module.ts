import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BEProjectComponent } from './be-project/be-project.component';
import { FormComponent } from './form/form.component';
import { LandingComponent } from './landing/landing.component';
import { MTECHProjectComponent } from './mtech-project/mtech-project.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectComponent } from './project/project.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path:'',redirectTo:'/landing',pathMatch:'full'},
  {path:'landing',component:LandingComponent},
  {path:'resume',component:ResumeComponent},
  {path:'form',component:FormComponent},
  {path:'project',component:ProjectComponent},
  {
    path:'project',
    component:ProjectComponent,
    children:[
      {path:'beproject',component:BEProjectComponent},
      {path:'mtechproject',component:MTECHProjectComponent}
      // {
      //  path: 'beproject',
      // loadChildren: () => import('./be-project/be-project.component').then(m => m.BEProjectComponent)
      //  },
      //  {
      //    path: 'mtechproject',
      //    loadChildren: () => import('./mtech-project/mtech-project.component').then(m => m.MTECHProjectComponent)
      //    },
     ]},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[LandingComponent,PageNotFoundComponent,ResumeComponent,ProjectComponent,FormComponent,BEProjectComponent,MTECHProjectComponent]