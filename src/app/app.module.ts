import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectComponent } from './RxJs/subject/subject.component';
import { BehaviorSubjectComponent } from './RxJs/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './RxJs/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './RxJs/async-subject/async-subject.component';
import { ObservableComponent } from './RxJs/observable/observable.component';
import { OfComponent } from './RxJs/of/of.component';
import { CombineAllComponent } from './RxJs/combine-all/combine-all.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ObservableComponent,
    OfComponent,
    CombineAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
