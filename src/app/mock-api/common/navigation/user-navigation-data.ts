import { UserNavigationItem } from '@fuse/components/navigation/user-navigation.types';

export const userNavigation: UserNavigationItem[] = [
  {
    userGuid: '1234',
    isAdmin: false,
    navigationItems: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie'
      },
      {
        id: 'application',
        title: 'Application',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        children: [
          {
            id: 'action',
            title: 'Action',
            type: 'basic',
            icon: 'heroicons_outline:chart-pie',
            link: 'launchpad/dashboard/action'
          },
          {
            id: 'correspondence',
            title: 'Correspondence',
            type: 'basic',
            icon: 'heroicons_outline:chart-pie',
            link: 'launchpad/application/correspondence'
          },
          {
            id: 'application-details',
            title: 'Application details',
            type: 'basic',
            icon: 'heroicons_outline:chart-pie',
            link: 'launchpad/application/details'
          }
        ]
      }
    ]
  },
  {
    userGuid: '123456',
    isAdmin: false,
    navigationItems: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'heroicons_outline:presentation-chart-line',
        link: 'launchpad/dashboard'
      },
      {
        id: 'application',
        title: 'Application',
        type: 'collapsable',
        icon: 'heroicons_outline:clipboard-list',
        children: [
          {
            id: 'action',
            title: 'Action',
            type: 'basic',
            icon: 'heroicons_outline:document-text',
            link: 'launchpad/application/action'
          },
          {
            id: 'correspondence',
            title: 'Correspondence',
            type: 'basic',
            icon: 'heroicons_outline:mail-open',
            link: 'launchpad/application/correspondence'
          },
          {
            id: 'application-details',
            title: 'Application details',
            type: 'basic',
            icon: 'heroicons_outline:clipboard-list',
            link: 'launchpad/application/details'
          }
        ]
      }
    ]
  }
];
