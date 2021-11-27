const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginSubmit = document.querySelector("#login-form input:last-child")
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(savedUsername) {
    greeting.innerText = `Hello ${savedUsername} !`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginInput.classList.add(HIDDEN_CLASSNAME);
    loginSubmit.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}
