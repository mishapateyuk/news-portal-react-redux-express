export const jsonAJAX = (method, address, body=null) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method.toUpperCase(), address);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(body);
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject();
      };
    };
  });
};
