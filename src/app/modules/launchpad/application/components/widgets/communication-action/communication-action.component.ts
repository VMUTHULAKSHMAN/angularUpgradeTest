import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ICommunicationsAction } from 'app/mock-api/common/communications/data';
import { CommunicationService } from 'app/modules/launchpad/application/repository/communication-service/communication.service';

@Component({
  selector: 'app-communication-action',
  templateUrl: './communication-action.component.html',
  styleUrls: ['./communication-action.component.scss']
})
export class CommunicationActionComponent implements AfterViewInit, OnChanges {
  @Input() applicationName!: string;
  @Input() communicationId!: string;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['actionId', 'actionName', 'sentOn', 'sentTo', 'actionRequired'];
  dataSource: MatTableDataSource<ICommunicationsAction> = new MatTableDataSource();

  constructor(private communicationService: CommunicationService) {}

  ngOnChanges(): void {
    if (this.applicationName !== '' && this.communicationId !== '') {
      this.communicationService
        .getCommunicationsActionData(this.applicationName, this.communicationId)
        .subscribe((res: ICommunicationsAction[]) => {
          this.dataSource.data = res;
          this.paginator.length = res.length;
        });
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
