const authorizationData = [
  {login: '123', password: '123'},
  {login: 'admin', password: 'admin'}
];

function checkAuthorizationData(login, password) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(
          authorizationData.some(
            (item) => {
              return item.login === login &&
              item.password === password
            }
          )
      );
    }, 500);
  });
};

function getUsers() {
  return authorizationData.map((data) => data.login);
};

export { checkAuthorizationData, getUsers };
