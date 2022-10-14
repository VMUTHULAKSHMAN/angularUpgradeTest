import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { applicationRoutes } from './application-routing.module';
import { MaterialModule } from './material.module';
import { CommunicationActionComponent } from './components/widgets/communication-action/communication-action.component';
import { ApplicationDetailsComponent } from './components/application-details/application-details.component';
import { ActionComponent } from './components/action/action.component';
import { CorrespondenceComponent } from './components/correspondence/correspondence.component';

@NgModule({
  declarations: [CorrespondenceComponent, ActionComponent, ApplicationDetailsComponent, CommunicationActionComponent],
  imports: [RouterModule.forChild(applicationRoutes), CommonModule, MaterialModule]
})
export class ApplicationModule {}
