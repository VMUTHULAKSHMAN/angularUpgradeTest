import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { environment } from 'environments/environment';
import { getUserById } from 'app/mock-api/common/account/data';
import { mockApiConfig } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountMockAPI {
  private _user: any = getUserById(mockApiConfig.mockAccountUser);

  /**
   * Constructor
   */
  constructor(private _fuseMockApiService: FuseMockApiService) {
    // Register Mock API handlers
    this.registerHandlers();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Register Mock API handlers
   */
  registerHandlers(): void {
    // -----------------------------------------------------------------------------------------------------
    // @ User - GET
    // -----------------------------------------------------------------------------------------------------
    this._fuseMockApiService.onGet('api/account').reply(() => [200, cloneDeep(this._user)]);
  }
}
