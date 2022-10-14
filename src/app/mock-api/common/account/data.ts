import { Authority } from 'app/config/authority.constants';

type USERTYPE = {
  activated: boolean;
  authorities: Authority[];
  email: string;
  firstName: string;
  langKey: string;
  lastName: string;
  login: string;
  imageUrl: string;
};

/* eslint-disable */
export const adminUser = {
  activated: true,
  authorities: [Authority.admin, Authority.user],
  email: 'admin@localhost',
  firstName: 'Administrator',
  langKey: 'en',
  lastName: 'Administrator',
  login: 'admin',
  imageUrl: 'assets/images/avatars/brian-hughes.jpg'
};

/* eslint-disable */
export const regularUser = {
  activated: true,
  authorities: [Authority.user],
  email: 'regularUser@localhost',
  firstName: 'Mock Regular User',
  langKey: 'en',
  lastName: 'Mock Regular User',
  login: 'user',
  imageUrl: 'assets/images/avatars/brian-hughes.jpg'
};

const allUsers: USERTYPE[] = [adminUser, regularUser];

export function getUserById(login: String): USERTYPE {
  return allUsers.find(eachUser => eachUser.login === login);
}
