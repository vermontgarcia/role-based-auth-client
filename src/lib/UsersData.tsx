// Generate User Data
const createData = (
  id: number,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  role: string,
  clientId: number,
) => {
  return { id, firstName, lastName, username, email, role, clientId };
}

export const usersData = [
  createData(
    0,
    'Drake',
    'Alston',
    'drake',
    'drake.alston@mycompany.com',
    'Admin',
    100
  ),
  createData(
    1,
    'Lester',
    'Battle',
    'lester',
    'lester.battle@othercompanyone.com',
    'Client',
    101
  ),
  createData(
    2,
    'Camdem',
    'Baker',
    'camdem',
    'camdem.baker@othercompanytwo.com',
    'Client',
    102
  ),
  createData(
    3,
    'Yetta',
    'Mullins',
    'yetta',
    'yetta.mullins@mycompanytwo.com',
    'Client',
    102
  ),
  createData(
    4,
    'Yasir',
    'Landry',
    'yasir',
    'yasir.landry@othercompanyone.com',
    'User',
    101
  ),
  createData(
    5,
    'Alice',
    'Wrap',
    'alice',
    'alice.wrap@mycompany.com',
    'User',
    100
  ),
  createData(
    6,
    'Json',
    'McCoy',
    'json',
    'json.mccoy@mycompany.com',
    'User',
    100
  ),
  createData(
    7,
    'Vermont',
    'Garcia',
    'vermont',
    'vermont.garcia@mycompany.com',
    'Admin',
    100
  ),
];
