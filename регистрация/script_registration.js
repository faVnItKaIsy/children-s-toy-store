let isname = document.querySelector("#firstname");//получаем поле Имя по селектору в скобках в переменную
let surname = document.querySelector("#lastname");//получаем поле Фамилия по селектору в скобках в переменную
let patronymic = document.querySelector("#patronymic");//получаем поле Отчество по селектору в скобках в переменную
let dateB = document.querySelector("#dateB");

let phone = document.querySelector("#phoneInput");//получаем поле Телефон по селектору в скобках в переменную

let password = document.querySelector("#pass");//получаем поле Пароль по селектору в скобках в переменную
let passwordRepete = document.querySelector("#passR");//получаем поле Повтор пороля по селектору в скобках в переменную



let pName1 = document.querySelector("#pName1");/*получаем переменную pName1 по id в скобках в переменную в которой текст ошибки для поля Имя*/
let pName2 = document.querySelector("#pName2");/*получаем переменную pName2 по id в скобках в переменную в которой текст ошибки для поля Имя*/

let pSurname1 = document.querySelector("#pSurname1");/*получаем переменную pSurname1 по id в скобках в переменную в которой текст ошибки для поля Имя*/
let pSurname2 = document.querySelector("#pSurname2");/*получаем переменную pSurname2 по id в скобках в переменную в которой текст ошибки для поля Имя*/

let pPatronymic = document.querySelector("#pPatronymic");/*получаем переменную pPatronymic по id в скобках в переменную в которой текст ошибки для поля Имя*/

let pPassport1 = document.querySelector("#pPassport1");/*получаем переменную pLogin1 по id в скобках в переменную в которой текст ошибки для поля Имя*/
let pPassport2 = document.querySelector("#pPassport2");/*получаем переменную pLogin2 по id в скобках в переменную в которой текст ошибки для поля Имя*/



let pPhone1 = document.querySelector("#pPhone1");/*получаем переменную pPhone1 по id в скобках в переменную в которой текст ошибки для поля Имя*/
let pPhone2 = document.querySelector("#pPhone2");/*получаем переменную pPhone2 по id в скобках в переменную в которой текст ошибки для поля Имя*/

let pDateB1 = document.querySelector(".pDateB1");
let pDateB2= document.querySelector(".pDateB2");


let pPassword1 = document.querySelector("#pPassword1");/*получаем переменную pPassword1 по id в скобках в переменную в которой текст ошибки для поля Имя*/
let spanPassword2 = document.querySelector("#spanPassword2");/*получаем переменную spanPassword2 по id в скобках в переменную в которой текст ошибки для поля Имя*/

let pPasswordRepete1 = document.querySelector("#pPasswordRepete1");/*получаем переменную pPasswordRepete1 по id в скобках в переменную в которой текст ошибки для поля Имя*/
let pPasswordRepete2 = document.querySelector("#pPasswordRepete2");/*получаем переменную pPasswordRepete2 по id в скобках в переменную в которой текст ошибки для поля Повтор пароля*/



const submitReg = document.querySelector('.sub'); //получаем кнопку отправки формы по селектору в скобках в переменную
submitReg.addEventListener('submit', function (evn) { //вызов функции после нажатия на кнопку отправки формы


    
/*поле имя*/
if(isname == ""){//проверка поля Имя на заполнение
  /* pName1.style.display = 'block';//если поле пустое, появится 1 ошибка*/
  alert("d");
dd.textContent = "d";
   isname.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
  } else if(!/([А-Яа-яЁё]{2,})/.test(isname)){ //проверка на формат, в котором должно быть написано имя
    /*pName1.style.display = 'none';//1 ошибка исчезнет
    pName2.style.display = 'block';//появится 2 ошибка*/
    isname.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
  } else {//если поле не пустое и соответствует формату
    isname.style.border = '2px solid #20a314';
    /*pName1.style.display = 'none';//1 ошибка исчезнет
    pName2.style.display = 'none';//2 ошибка исчезнет*/
  } 

  /*поле фамилия*/
  if(surname == ""){//проверка поля Фамилия на заполнение
   /* pSurname1.style.display = 'block';//если поле пустое, появится 1 ошибка*/
    surname.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
  } else if(!/[А-Яа-яЁё]+(-[а-яёА-ЯЁ]+)?$/.test(surname)){//проверка на формат, в котором должна быть написана фамилия
    surname.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
    /*pSurname1.style.display = 'none';//1 ошибка исчезнет
    pSurname2.style.display = 'block';//появится 2 ошибка*/
  } else {//если поле не пустое и соответствует формату
    surname.style.border = '2px solid #20a314';
   /* pSurname1.style.display = 'none';//1 ошибка исчезнет
    pSurname2.style.display = 'none';//2 ошибка исчезнет*/
  } 





  if(phone == ""){
    /*pPhone1.style.display = 'block';//если поле пустое, появится 1 ошибка*/
    phone.style.border = '2px solid red';//граница поля станет красной
  } else if(!/[0-9]{11}/.test(phone)){//если вписанное в поле не соответствует формату 
    phone.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
    /*pPhone1.style.display = 'none';//1 ошибка исчезнет
    pPhone2.style.display = 'block';//появится 2 ошибка*/
  } else {//если поле не пустое и соответствует формату
    phone.style.border = '2px solid #20a314';//граница поля станет зеленой
    /*pPhone1.style.display = 'none';//1 ошибка исчезнет
    pPhone2.style.display = 'none';//2 ошибка исчезнет/*!/([+]?)(\d{11}*/
  } 


/*поле пароль*/
  if(password = ""){
    /*pPassword1.style.display = 'block';//если поле пустое, появится 1 ошибка*/
    password.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
  } else if(!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/.test(password)){//если вписанное в поле не соответствует формату 
    password.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
    /*pPassword1.style.display = 'none';//1 ошибка исчезнет
    spanPassword2.style.display = 'block';//появится 2 ошибка*/
  } else {//если поле не пустое и соответствует формату
    password.style.border = '2px solid #20a314';
    /*pPassword1.style.display = 'none';//1 ошибка исчезнет
    spanPassword2.style.display = 'none';//2 ошибка исчезнет*/
  } 

  /*поле повтор пароля*/
  if(password == ""){//проверка поля Повтор пароля на заполнение
   /* pPasswordRepete1.style.display = 'block';*///если поле пустое, появится 1 ошибка
    passwordRepete.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
  } else if(password.value != passwordRepete.value){//если вписанное в поле не соответствует формату 
    passwordRepete.style.border = '2px solid rgb(255, 0, 0)';//граница поля станет красной
    /*pPasswordRepete1.style.display = 'none';//1 ошибка исчезнет
    pPasswordRepete2.style.display = 'block';//появится 2 ошибка*/
  } else {//если поле не пустое и соответствует формату
    passwordRepete.style.border = '2px solid #20a314';
   /* pPasswordRepete1.style.display = 'none';//1 ошибка исчезнет
    pPasswordRepete2.style.display = 'none';//2 ошибка исчезнет*/
  } 
  evn.preventDefault();
});