const auth=()=>{

const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.getElementById('logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');
const buttonCart= document.querySelector('.button-cart');



const login = (user)=> {
    buttonOut.style.display='flex';
    userName.style.display='flex';
    buttonCart.style.display='flex';
    buttonAuth.style.display='none';
    userName.textContent=user.login;
    modalAuth.style.display='none';

}

const logout = ()=> {
    buttonOut.style.display='none';
    userName.style.display='none';
    buttonAuth.style.display='flex';
    buttonCart.style.display='none';
    userName.textContent='';
    localStorage.removeItem('user');
}

buttonAuth.addEventListener('click', ()=>{
    modalAuth.style.display='flex';
})

buttonOut.addEventListener('click', ()=>{
    logout();
})

closeAuth.addEventListener('click', ()=>{
    modalAuth.style.display='none';
})

logInForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const user = {
        login: inputLogin.value,
        password: inputPassword.value,
    }
    
    if (!user.login) {alert("не введен логин")}
    else {
        login(user);
        localStorage.setItem('user', JSON.stringify(user));
    }   

})

if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')));
}

}

auth();