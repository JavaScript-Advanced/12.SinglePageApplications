import {homePage} from './home.js';
import {loginPage} from './login.js';
import {registerPage} from './register.js';
import {createPage} from './create.js';
import { updateNav } from './util.js';

//showView('#home-page');
const routes = {
    '/': homePage,
    '/login': loginPage,
    '/logout':logout,
    '/register': registerPage,
    '/create': createPage
};

document.querySelector('nav').addEventListener('click', onNavigate);
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate);

function onNavigate(e){
    if (e.target.tagName == 'A' && e.target.href) {
        e.preventDefault();
        const url = new URL(e.target.href);

        const view = routes[url.pathname];
        if (typeof view == 'function') {
            view();
        }
    }
}

const editSection = document.querySelector('#edit-movie');

function logout() {
    localStorage.removeItem('user');
    updateNav();
}

updateNav();
homePage();