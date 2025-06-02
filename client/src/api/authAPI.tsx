import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Error');
    }
    return data;
  } catch (err) {
    console.log('Error', err);
    return Promise.reject('Cannot retrieve user data');
  }
};

export { login };
