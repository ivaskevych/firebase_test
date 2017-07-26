// import config from '../config';
//
// const LOGIN_URL = config.login.host;

const STORAGE_KEY = 'session';

class Auth {
  constructor () {
    this.sessionName = null;
    this.sessionToken = null;

    const session = localStorage.getItem(STORAGE_KEY);
    if (session) {
      const {name, value} = JSON.parse(session);
      this.sessionName = name;
      this.sessionToken = value;
    }
  }

  authenticate (username, password) {
    return fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName: username,
        password
      })
    })
      .then(res => {
        if (res.status !== 200) return Promise.reject(res);
        return res.json();
      })
      .then(res => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(res.session));
        return res;
      })
      .then(res => {
        this.sessionName = res.session.name;
        this.sessionToken = res.session.value;
      });
  }

  isAuthenticated () {
    return this.sessionToken !== null;
  }

  getSessionName () {
    return this.sessionName;
  }

  getSessionToken () {
    return this.sessionToken;
  }
}

const auth = new Auth();

export default auth;
