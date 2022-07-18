const ADMIN = 'Admin';
const USER = 'User';
const CLIENT = 'Client';

type UserDataType = {
  id: number,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  role: string,
  clientId: number,
}

export default class UserDataGard {
  userAllowedData: UserDataType[]

  constructor(
     private authenticatedUser: UserDataType,
     private usersData: UserDataType[]
  ) {
    this.userAllowedData = this.getAllowedUserData();
  }

  get isUserAdmin() {
    return this.authenticatedUser.role === ADMIN;
  }

  get isUserUser() {
    return this.authenticatedUser.role === USER;
  }

  get isUserClient() {
    return this.authenticatedUser.role === CLIENT;
  }

  get userRole() {
    return this.authenticatedUser.role;
  }

  get userUserData() {
    return this.usersData.filter((user) => user.id === this.authenticatedUser.id);
  }

  get userClientData() {
    return this.usersData.filter((user) => user.clientId === this.authenticatedUser.clientId);
  }

  getAllowedUserData(){
    if(this.isUserAdmin) return this.usersData;
    if(this.isUserClient) return this.userClientData;
    if(this.isUserUser) return this.userUserData;
    return [];
  }
}
