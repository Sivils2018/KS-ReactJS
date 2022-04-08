const authenticated = {
    isAuthenticated: false,
    changeAuthentication() {

        authenticated.isAuthenticated = !authenticated.isAuthenticated;

        localStorage.setItem('isAuthenticated', authenticated.isAuthenticated);
    },
    getAuthentication() {

        return (localStorage.getItem('isAuthenticated') == 'true' ? true : false);
    }
  };
  export default authenticated;