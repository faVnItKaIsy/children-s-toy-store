/*let email = document.querySelector("#email");
let spanEmail1 = document.querySelector("#spanEmail1");
let spanEmail2 = document.querySelector("#spanEmail2");
let password = document.querySelector("#pass");
let spanPassword1 = document.querySelector("#spanPassword1");
let spanPassword2 = document.querySelector("#spanPassword2");

const submitL = document.querySelector('.sub'); //получаем кнопку отправки формы по селектору в скобках в переменную
submitL.addEventListener('submit', function (event) { //вызов функции после нажатия на кнопку отправки формы
*/
/*function d(){
if(email.value == ""){
 if(!email.value) {*/
 /*if(email.value == ''){
  spanEmail1.style.display = 'block';
  email.style.background = 'rgb(255, 0, 0)';
 } else if(!/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/.test(email.value)){
    email.style.border = '2px solid rgb(255, 0, 0)';
    spanEmail1.style.display = 'none';
    spanEmail2.style.display = 'block';
  
  } else {
    email.style.border = '2px solid #20a314';
    spanEmail1.style.display = 'none';
    spanEmail2.style.display = 'none';
    
  }*/

/*поле пароль*/
 /*if(password.value == ""){
    spanPassword1.style.display = 'block';
    password.style.border = '2px solid rgb(255, 0, 0)';
  } else if(!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/.test(password.value)){
    spanPassword1.style.display = 'none';
    spanPassword2.style.display = 'block';
  } else {
    password.style.border = '2px solid #20a314';
    spanPassword1.style.display = 'none';
    spanPassword2.style.display = 'none';
  } 
return false;*/
/*preventDefault();

}*/
/*
function checkForm(form)
{
/*
  if(email == ''){
    spanEmail1.style.display = 'block';
    email.style.border = '2px solid rgb(255, 0, 0)';
    return false;
   } else if(!/^([a-zA-Z0-9])+([\.\+a-zA-Z0-9_-])*@([\+ a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)+$/.test(email)){
      email.style.border = '2px solid rgb(255, 0, 0)';
      spanEmail1.style.display = 'none';
      spanEmail2.style.display = 'block';
      return false;
    }else {
      password.style.border = '2px solid #20a314';
      spanPassword1.style.display = 'none';
      spanPassword2.style.display = 'none';
      
    }
    



    if(password == ""){
      spanPassword1.style.display = 'block';
      password.style.border = '2px solid rgb(255, 0, 0)';
      return false;
    } else if(!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/.test(password)){
      spanPassword1.style.display = 'none';
      spanPassword2.style.display = 'block';
      return false;
    } else {
      password.style.border = '2px solid #20a314';
      spanPassword1.style.display = 'none';
      spanPassword2.style.display = 'none';
      
    }

   return true;
}*/
 /*  for (var i = 0; i < form.elements.length; i++)
  if (form.elements[i].value == '')
{
  form.elements[i].style.border = "2px solid rgb(255, 0, 0)";
  /*spanPassword2.style.display = 'block'; 
  alert ('Заполните все поля');
  return false;
}
return true;
}*/



let email = document.querySelector("#spanEmail");
let spanEmail1 = document.getElementById("spanEmail1"); // remove the # symbol
let spanEmail2 = document.querySelector("#spanEmail2");
let password = document.querySelector("#pass");
let spanPassword1 = document.querySelector("#spanPassword1");
let spanPassword2 = document.querySelector("#spanPassword2");

const submitL = document.querySelector('.sub'); // get the submit button

submitL.addEventListener('click', function (event) { // change 'submit' to 'click'
event.preventDefault(); // move this to the top to prevent the form from submitting

if(email == ""){
spanEmail1.style.display = 'block';
email.style.background = '2px solid rgb(255, 0, 0)';
} else if(!/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/.test(email)){
email.style.border = '2px solid rgb(255, 0, 0)';
spanEmail1.style.display = 'none';
spanEmail2.style.display = 'block';
} else {
email.style.border = '2px solid #20a314';
spanEmail1.style.display = 'none';
spanEmail2.style.display = 'none';
}

/* password field */
if(password == ""){
spanPassword1.style.display = 'block';
password.style.border = '2px solid rgb(255, 0, 0)';
} else if(!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/.test(password)){
spanPassword1.style.display = 'none';
spanPassword2.style.display = 'block';
} else {
password.style.border = '2px solid #20a314';
spanPassword1.style.display = 'none';
spanPassword2.style.display = 'none';
}
});





















/* const submitLogin = document.querySelector('.sub'); 
submitLogin.addEventListener('submit', function () {*/

/*const form = document.querySelector('.forma');
form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  console.log('Форма отправлена!');*/
     /* var email = document.getElementById('email').value;
      if(email == '')
   { 
    
      ddd.textContent = "ddduuuu";
       return false;
      }   
    else if(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email)){
      return true;
    }
    this.submit();*/


  /*
  if (email == '')
{
  alert ('Заполните все поля');
  return false;
}});
*/
 
  




/*if(email.value == ""){
 if(!email.value) {
 if(email == ''){
  spanEmail1.style.display = 'block';
    email.style.background = 'rgb(255, 0, 0)';
    return false;
 } else if(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email.value)){
    email.style.border = '2px solid rgb(255, 0, 0)';
    spanEmail1.style.display = 'none';
    spanEmail2.style.display = 'block';
    return false;
  } else {
    email.style.border = '2px solid #20a314';
    spanEmail1.style.display = 'none';
    spanEmail2.style.display = 'none';
    return true;
  } */
   /**/

/*поле пароль*/
 /*if(password.value == ""){//проверка поля Пароль на заполнение
 /*   spanPassword1.style.display = 'block';//если поле пустое, появится 1 ошибка
    password.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
  } else if(!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/.test(password.value)){//если вписанное в поле не соответствует формату 
    password.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
    spanPassword1.style.display = 'none';//1 ошибка исчезнет
    spanPassword2.style.display = 'block';//появится 2 ошибка
  } else {//если поле не пустое и соответствует формату
    password.style.border = '2px solid #20a314';
    spanPassword1.style.display = 'none';//1 ошибка исчезнет
    spanPassword2.style.display = 'none';//2 ошибка исчезнет
  } 

  this.submit();


});*/




/*
const form = document.querySelector('.forma');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if(!pass.value) {
    alert('Поле имя не заполнено');
    return;
  }
  
  if(!email.value) {
    alert('Поле email не заполнено');
    return;
  }
  
  this.submit();
});*/