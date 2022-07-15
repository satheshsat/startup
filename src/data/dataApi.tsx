import AsyncStorage from '@react-native-async-storage/async-storage';

const HAS_LOGGED_IN = 'hasLoggedIn';

export const getUserData = async () => {
  const response: any = await Promise.all([
    AsyncStorage.getItem(HAS_LOGGED_IN)]);
  const isLoggedin = await response[0] === 'true';
  const data = {
    isLoggedin,
  }
  return data;
}

export const setIsLoggedInData = async (isLoggedIn: boolean) => {
    await AsyncStorage.setItem(HAS_LOGGED_IN, JSON.stringify(isLoggedIn));
}

const url = '';

export async function getData(endpoint = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url+endpoint+'?'+new URLSearchParams(data), {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        mode: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
export async function postData(endpoint = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url+endpoint, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        mode: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

export async function putData(endpoint = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url+endpoint, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        mode: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

export async function deleteData(endpoint = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url+endpoint, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        mode: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json(); // parses JSON response into native JavaScript objects
}