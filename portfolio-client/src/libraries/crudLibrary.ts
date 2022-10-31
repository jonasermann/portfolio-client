function post<T>(object: T, url: string, token: string) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(object)
  }).catch(err => console.log(err.message));
}

function put<T>(object: T, url: string, token: string) {
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(object)
  }).catch(err => console.log(err.message));
}

function remove(id: number, url: string, token: string) {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).catch(err => console.log(err.message));
}


function handleChanges<T>(
  objects: T[],
  oldObjects: T[],
  oldObjectsIds: number[],
  oldLength: number,
  newLength: number,
  url: string,
  token: string
) {

  const difference = oldLength - newLength;

  if (difference < 0) {
    for (let i = 0; i < oldLength; i++) {
      if (objects[i] !== oldObjects[i]) {
        put<T>(objects[i], url, token)
      }
    }
    for (let i = oldLength; i < newLength; i++) {
      post<T>(objects[i], url, token)
    }
  }

  if (difference === 0) {
    for (let i = 0; i < oldLength; i++) {
      if (objects[i] !== oldObjects[i]) {
        put<T>(objects[i], url, token)
      }
    }
  }

  if (difference > 0) {
    for (let i = 0; i < newLength; i++) {
      if (objects[i] !== oldObjects[i]) {
        put<T>(objects[i], url, token)
      }
    }
    for (let i = newLength; i < oldLength; i++) {
      remove(oldObjects[i].id, url, token)
    }
  }
}

export { handleChanges };