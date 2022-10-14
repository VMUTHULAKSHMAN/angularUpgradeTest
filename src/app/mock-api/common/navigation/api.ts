import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { compactNavigation, defaultNavigation, futuristicNavigation, horizontalNavigation } from 'app/mock-api/common/navigation/data';
import { UserNavigationItem } from '@fuse/components/navigation/user-navigation.types';
import { userNavigation } from './user-navigation-data';

@Injectable({
  providedIn: 'root'
})
export class NavigationMockApi {
  private readonly _compactNavigation: FuseNavigationItem[] = compactNavigation;
  private readonly _defaultNavigation: FuseNavigationItem[] = defaultNavigation;
  private readonly _futuristicNavigation: FuseNavigationItem[] = futuristicNavigation;
  private readonly _horizontalNavigation: FuseNavigationItem[] = horizontalNavigation;
  private readonly _userNavigation: UserNavigationItem[] = userNavigation;

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
    // @ Navigation - GET
    // -----------------------------------------------------------------------------------------------------
    this._fuseMockApiService.onPost('api/common/navigation').reply(({ request }) => {
      const userGuid: string = request.body.userGuid;
      const userNavigationItems: FuseNavigationItem[] =
        this._userNavigation.find(item => item.userGuid === userGuid)?.navigationItems || [];

      // Return the response
      return [
        200,
        {
          compact: cloneDeep(userNavigationItems),
          default: cloneDeep(userNavigationItems),
          futuristic: cloneDeep(userNavigationItems),
          horizontal: cloneDeep(userNavigationItems)
        }
      ];
    });
  }
}
