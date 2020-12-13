export default class AuthService {
  static isUserLogged() {
    return !!localStorage.getItem('access_token');
  }

  static signUser(accessToken) {
    localStorage.setItem('access_token', accessToken);
  }

  static signOut() {
    localStorage.removeItem('access_token');
  }
}
