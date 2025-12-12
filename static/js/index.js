import {return_index,return_menu,logout,start_login} from './redirects.js';
document.addEventListener("DOMContentLoaded", () => {
    start_login();
    return_index();
    return_menu();
    logout();
});