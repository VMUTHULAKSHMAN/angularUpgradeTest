import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ICommunication } from 'app/mock-api/common/communications/data';
import { CommunicationService } from '../../repository/communication-service/communication.service';

@Component({
  selector: 'app-correspondence',
  templateUrl: './correspondence.component.html',
  styleUrls: ['./correspondence.component.scss']
})
export class CorrespondenceComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'applicationId',
    'communicationId',
    'communicationType',
    'sentOn',
    'sentTo',
    'actionRequired',
    'viewCommunication'
  ];
  dataSource: MatTableDataSource<ICommunication> = new MatTableDataSource();
  communicationId!: string;
  applicationName!: string;

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.communicationService.getCommunicationsData('application2').subscribe((res: ICommunication[]) => {
      this.dataSource.data = res.concat(res);
      this.paginator.length = res.length;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadActionTable(communicationId: string): void {
    this.communicationId = communicationId;
    this.applicationName = 'application2';
  }
}
