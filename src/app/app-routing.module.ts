import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorComponent } from './operator/operator.component';
import { BufferOperatorComponent } from './pages/buffer-operator/buffer-operator.component';
import { BufferCountOperatorComponent } from './pages/buffer-count-operator/buffer-count-operator.component';
import { BufferTimeOperatorComponent } from './pages/buffer-time-operator/buffer-time-operator.component';
import { BufferToggleOperatorComponent } from './pages/buffer-toggle-operator/buffer-toggle-operator.component';
import { BufferWhenOperatorComponent } from './pages/buffer-when-operator/buffer-when-operator.component';
import { TakeOperatorComponent } from './pages/take-operator/take-operator.component';
import { TakeLastOperatorComponent } from './pages/take-last-operator/take-last-operator.component';
import { TakeUntilOperatorComponent } from './pages/take-until-operator/take-until-operator.component';
import { TakeWhileOperatorComponent } from './pages/take-while-operator/take-while-operator.component';
import { SkipOperatorComponent } from './pages/skip-operator/skip-operator.component';
import { SkipLastOperatorComponent } from './pages/skip-last-operator/skip-last-operator.component';
import { SkipUntilOperatorComponent } from './pages/skip-until-operator/skip-until-operator.component';

const routes: Routes = [
  {
    path: 'operator', component: OperatorComponent, children: [
      { path: 'buffer', component: BufferOperatorComponent },
      {path:'buffercount',component:BufferCountOperatorComponent},
      {path:'bufferTimer',component:BufferTimeOperatorComponent},
      {path:'bufferToggle',component:BufferToggleOperatorComponent},
      {path:'bufferWhen',component:BufferWhenOperatorComponent},
      {path:'Take',component:TakeOperatorComponent},
      {path:'TakeLatest',component:TakeLastOperatorComponent},
      {path:'TakeUntil',component:TakeUntilOperatorComponent},
      {path:'TakeWhile',component:TakeWhileOperatorComponent},
      {path:'Skip',component:SkipOperatorComponent},
      {path:'SkipLast',component:SkipLastOperatorComponent},
      {path:'SkipUntil',component:SkipUntilOperatorComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
