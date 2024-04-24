// Service modules export business/app logic
// such as managing tokens, etc.
// Service modules often depend upon API modules
// for making AJAX requests to the server.

import * as usersAPI from './users-api';

export const checkToken = async () => {
    alert('clicked')
    return usersAPI.checkToken()
}

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  // persist the token
  localStorage.setItem('token', token);
  return getUser()
}

export async function logIn(credentials) {
    const token = await usersAPI.logIn(credentials);
    // persist the token
    localStorage.setItem('token', token);
    return getUser()
  } 


export async function logOut() {
    localStorage.removeItem('token');
}

export function getToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      return null;
    }
    return token;
  }

export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
  }


  
