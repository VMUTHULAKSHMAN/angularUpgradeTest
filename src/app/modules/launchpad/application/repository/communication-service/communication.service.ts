import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { ICommunication, ICommunicationsAction } from 'app/mock-api/common/communications/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  getCommunicationsData(applicationName: string): Observable<ICommunication[]> {
    return this.http.get<ICommunication[]>(this.applicationConfigService.getEndpointFor(`api/${applicationName}/communications`));
  }

  getCommunicationsActionData(applicationName: string, communicationId: string): Observable<ICommunicationsAction[]> {
    return this.http.get<ICommunicationsAction[]>(
      this.applicationConfigService.getEndpointFor(`api/${applicationName}/communications/${communicationId}/actions`)
    );
  }
}
