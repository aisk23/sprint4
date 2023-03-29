function register(){
    let email = document.getElementById('inputEmail');
    let password = document.getElementById('ipnutPassword');
    let fullname = document.getElementById('ipnutName');
    let country = document.getElementById('inputCountry');
    let birthdate = document.getElementById('inputBirthDate');
    let usersList = loadUser();
    usersList.push(
        {
            "email" : email.value,
            "password" : password.value,
            "fullname" : fullname.value,
            "country" : country.value,
            "date" : birthdate.value
        }
    );

    localStorage.setItem("user", JSON.stringify(usersList));

    email.value = "";
    password.value = "";
    fullname.value = "";
    country.value = "";
    birthdate.value = "";
}


function loadUser(){
    let user = localStorage.getItem('user');
    if(user != null){
        let list = JSON.parse(user);
        return list;
    }
    return [];
}

function login(){
    let usersList = loadUser();
    let emailInput = document.getElementById('loginEmail');
    let passwordInput = document.getElementById('loginPassword');
    let checked = 0;
    for(let i = 0; i < usersList.length; i++){
        if(usersList[i].email == emailInput.value && usersList[i].password == passwordInput.value){
            localStorage.setItem("id", i);
            window.open("sprint4-3.html", "_self");
            checked = 1;
            break;
        }

    }
    if (checked == 0) alert ('Неверный логин или пароль');


}

function out() {
    window.open("sprint4-2.html");

}

function welcome(){
    let id = localStorage.getItem('id');
    let usersList = loadUser();
    document.getElementById('welcomeUser').innerHTML = usersList[id].fullname;
    document.getElementById('navbarName').innerHTML = usersList[id].fullname;


    document.getElementById('welcomeEmail').innerHTML = usersList[id].email;
    document.getElementById('welcomename').innerHTML = usersList[id].fullname;
    document.getElementById('welcomeCountry').innerHTML = usersList[id].country;
    document.getElementById('welcomeBirth').innerHTML = usersList[id].date;

}