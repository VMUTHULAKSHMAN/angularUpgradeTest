import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { launchpadHomeRoutes } from './launchpad-routing.module';
import { WorkareaComponent } from './workarea/workarea.component';
import { ApplicationComponent } from './application/application.component';
import { CommunicationActionComponent } from './application/components/widgets/communication-action/communication-action.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [WorkareaComponent, ApplicationComponent],
  imports: [RouterModule.forChild(launchpadHomeRoutes), CommonModule, MatTableModule, MatPaginatorModule, MatIconModule]
})
export class LaunchpadModule {}
