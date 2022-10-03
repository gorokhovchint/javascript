//TASK
document.querySelector("h1").style.color = "darkred"; //задает стиль элементу
console.log("learning -  JavaScript"); //выводит инфо в консоль
// элементу подключаем обработчик событий: click и при его совершении элемент исчезает
document.querySelector("h2").onclick = function () {
  document.querySelector("h2").style.display = "none";
  setTimeout(() => (document.querySelector("h2").style.display = ""), 3000); // вернуть назад
};
//создал пустой массив некое подобие gtm, чтобы показать что dataLayer это просто название, далее при совершении события которое добавил в обработчик, меняется цвет и методом push добавляется событие в формате ключ:значение т.е создался ассоциативный массив .
let dataLayer23 = []
document.querySelector("h1").addEventListener("dblclick", function () {
  document.querySelector("h1").style.color = "purple";
  dataLayer23.push({
    event: "js.dblclick",
  });
});
//При совершении события на клавиатуре, меняется цвет элемента и методом push добавляется событие в конец массива dataLayer(gtm).
document.addEventListener("keydown", function () {
  document.querySelector("h1").style.color = "blue";
  dataLayer.push({
    event: "js.keydown",
  });
});
//END TASK

//TASK
const term = "Yandex ";
const nerm = "Metrics";
var total = term + nerm; // переменная объявленная через let или var - это глобальная переменная
console.log(total);
document.querySelector(".gru").addEventListener("click", function () {
  this.innerText = total.toUpperCase(); // обращаемся к элементу через атрибут 'this'
});
//END TASK

//Проверяю инструкцию if ... else
var a = 16;
if (a < 12) {
  document.write("<br><h4>Выражение true</h4>"); // в файле можно использовать html теги
} else if (a < 15) {
  document.write("<br><h4>Выражение false</h4>");
} else {
  document.write("<br><h4>false</h4>");
}
//Проверяю инструкцию switch
var languagePreference = "French";
switch (languagePreference) {
  case "English":
    console.log("Hello!");
    break;
  case "Spanish":
    console.log("Hola!");
    break;
  case "German":
    console.log("Guten Tag!");
    break;
  case "French":
    console.log("Bon Jour!");
    break;
  default:
    document.querySelector(".gru").innerText =
      "Пишем - Подключаем js " + languagePreference + "!";
}
// Получаю доступ к элементу h1 и устанавливаю атрибут class, значение mdwdcd
document.querySelector("h1").setAttribute("class", "mdwdcd");

// TASK
//После потери фокуса инпута в переменную inputVal передается значение, и работает ветвление кода, выводится в консоль и в innerText + меняет цвет
var inputVal = document.querySelector('[name="fname"]');
var ageА = document.querySelector("h1");
inputVal.addEventListener("blur", function () {
  if (inputVal.value < 18) {
    ageА.innerText = "Доступ закрыт";
    ageА.style.color = "red";
    console.log("Вам нет 18 лет"); // в файле можно использовать html теги
  } else if (inputVal.value >= 18) {
    ageА.innerText = "Проходите";
    ageА.style.color = "green";
    console.log("Доступ открыт");
  }
});
//Выводим значение переменной inputVal в консоль, объявляем переменную через let
let buttB1 = document.querySelector(".b1g");
buttB1.addEventListener("click", function () {
  console.log(inputVal.value);
});
//END TASK

// TASK
//Получаем доступ к элементу инпут, подключаем прослушиватель событий input - где передаются все значения и передаем это значение в тег span
let valrange = document.querySelector("#ra2");
valrange.addEventListener("input", function () {
  //console.log(valrange.value); - выводил значение в консоль
  document.querySelector(".gtrange").innerHTML = valrange.value;
});
//После клика на кнопку push, добавляется эвент в уровень данных и передается значение инпута в переменную, здесь применил стрелочную функцию
document.querySelector(".buthr1").addEventListener("click", () => {
  //стрел.функ. это один из способов написания анонимной функции
  dataLayer.push({
    event: "valrangePush",
    valRangePush3: valrange.value,
    'testvskobka':'ergerger'
  });
});
//END TASK

// TASK
//Проверяем состояние check true OR false при нажатии на button используем стрелочную(анонимную) фун-ию и используем ветвление когда if, else
let valCheck = document.querySelector("#chek7f");
let buttonCheck = document.querySelector(".buthr2");
buttonCheck.addEventListener("click", () => {
  console.log(valCheck.checked);
  if (valCheck.checked) {
    console.log("Согласен на обработку данных");
  } else {
    console.log("Я против сбора Пнд");
  }
});
//END TASK

// TASK Увеличиваем i++ или i = i + 1; Уменьшаем i-- или i = i - 1
for (let i = 0; i < 5; i++) {
  'Условие должно отвечать ДА, и нам нужно или увеличить i++ до N или уменьшить i-- до N во всех других вариациях цикл будет повторяться бесконечно или выходить из него'
  if (i == 3) break; // команда break останавливает переход к след кругам цикла
  console.log(i);
}
//END TASK

// TASK Циклы
//Объявляем переменную divItem где получаем доступ к элементам по классу, далле запускается цикл for
//divItem.length равен 3, получается следующее. 0<3 - ДА, условие сработало, переменную index добавляем к переменной divItem[index] со значением 0. На выходе divItem[0]
//далее переменная index увел на 1 и получ 0+1=1 . 1<3 - ДА, условие сработало, переменная index со значение 1, выводит элемент divItem[1]  и т.д
//когда index 2+1=3, 3<3 - НЕТ и условие не сраб, цикл заканчивается. 
let divItem = document.querySelectorAll(".itemb");
for (let index = 0; index < divItem.length; index++) {
  //console.log(divItem[index]);
  if (divItem.length > 2) {
    //обращаемся к элементам через переменную divItem[index] и можем задавать значения, свойствам элемента(style.color - свойства-я так предположил, значения - "#6495ed" )
    divItem[index].style.color = "#6495ed";
  } else {
    divItem[index].style.color = "#ff8c00";
  }
  //вешаем обработчик событий, где при клике по любому элементу меняется цвет
  //Методом push добавляется объект в уровень данных с эвентом divItem и значение согласно условию в if или else
  divItem[index].addEventListener("click", () => {
    divItem[index].style.color = "#8a2be2";
    //console.log(divItem[index].innerText);
    if (divItem[index].innerText == "Пиф Фундаментальный выбор") {
      dataLayer.push({
        event: "divItem",
        valueClick: "Пиф Фундаментальный выбор",
      });
    } else if (divItem[index].innerText == "Пиф Российские акции") {
      dataLayer.push({
        event: "divItem",
        valueClick: "Пиф Российские акции",
      });
    } else {
      dataLayer.push({
        event: "divItem",
        valueClick: "Не определенно",
      });
    }
  });
}
//END TASK

// TASK Вложенные циклы
// Здесь важно понять конкатенацию строк '+' и интерполяцию `$` -это замена конкатенации в ES6
let itemba = document.querySelector(".itemba");
for (let i = 0; i < 5; i++) {
  for (let k = 0; k < 10; k++) {
    itemba.innerHTML += k;
  }
  itemba.innerHTML += "<br>";
}

// TASK
let primer = document.querySelector(".i_premier");
//console.log(primer);
//END TASK

// TASK цикл while
for (let i = 0; i < 11; i++) {}

let hour = 6;
while (hour < 13) {
  hour++;
  //console.log("Час: " + hour);
}

let sum = 0;
let p = 0;
while (p <= 4) {
  sum = sum + p;
  p++;
}
//console.log("sum: " + sum);
//END TASK

// TASK DOM - стили можно присвоить 3 способами(1:атрибут=value в html документ, 2:таблица стилей в html документе, 3: таблица стилей в css документе, // А  в документе js управлять стилями)
const text197 = document.querySelector(".str70");
text197.style.width = "500px";
text197.classList.add("str70-1", "str70-2"); //класс str70-1 применяет свой стиль который приписан в styles.css, потому что затирает str70

//получаем доступ к элементу и удаляем class
document.querySelector(".mdwdcd").classList.remove("mdwdcd");

// () в скобках идет перечисление параметров(или аргумент), method это то что указываем через точку . querySelector или .add
const text198 = document.querySelector(".str71");
text198.addEventListener("click", function () {
  this.classList.add("str70-2"); // после клика добавляем уже существующий class, а с ним и стили подтягиваются которые заданны по этому классу
});
//console.log(text197.getAttribute("data"));

//Пример как получать value атрибутов: получаем доступ через тег<script>, далее пишем метод getAttribute и указывем атрибут у которго хотим вытащить value
document.querySelector(".text-one1").textContent = document
  .querySelectorAll("script")[0]
  .getAttribute("src");
text198.setAttribute("data-mar", "xiaomi x6");
//END TASK

//TASK калькулятор(с помощью атрибута data сохранили данные в html)
let calculator = document.querySelectorAll(".str74");
for (let i = 0; i < calculator.length; i++) {
  calculator[i].addEventListener("click", function () {
    let creditRub = document.querySelector(".strRUB").value;
    let years = this.getAttribute("data");
    document.querySelector(".str73").innerHTML = creditRub * years + " RUB";
  });
}
//END TASK

//TASK создаем тег(элемент) на странице через js
let a230 = document.createElement("p"); //создали новый тег(элемент)
a230.innerHTML = "AЗС-435-Роснефть"; //добавляем к нему текст
a230.classList.add("str232"); //добавляем к нему класс
a230.setAttribute("data", "29 тонн"); // добавляем к нему атрибуты
a230.onclick = function () {
  this.classList.remove("str232"); // при клике удаляется class
};
//Теперь подключем этот тег
document.querySelector(".str77").appendChild(a230); // к тегу которой создан через html str77, добавили методом appendChild новый тег p через js
document.querySelector(".str73").style.width = "100px";
//END TASK

//TASK метод push - позволяет добавлять элементы в конец массива. 
const aModel = [48, 66, 199, 48, 99, 11]
const bMarka = ['Audi', 'BMW', 'Ford', 'Honda', 'Hyundai', 'Lada (ВАЗ)'] 
aModel.push(197)// пишем переменную, добавляем метод push и в скобках указываем значения которые хотим добавить. Отсюда исходит расшифровка в gtm переменной datalayer - это всего лишь название переменной, где гугл при разработке ее создал и в интерфейса gtm написал переменная уровня данных. 

//метод pop удаляет элементы в конце массива. 
//пишем переменную добавляем метод с пустыми параметрами () и удаляется последний элемент
//bMarka.pop();

// удаляем элементы внутри массива, но он не влияет на его длину, оставляет пустые значения 'empty' и делает пропуски индекса т.е вот так :  [1], empty, [3]
delete aModel[2]

//метод splice() удаляет или добавляет элементы в массиве с изменение длины массива т.е не оставляет пустых значений и пересчитывает индексы 
aModel.splice(2,1) // в () указываем первая цифра - это индекс начало удаления элемента, и вторая цифра это индекс кол-ва удаляемых элементов. 
bMarka.splice(2,1, 'Форд Мустанг', 1368) // может удалять элементы из массива, и начать добавлять с начала места удаления новые элементы, с пересчетом индексов. 
bMarka.push({event: "ga_event", ga_event_category: "button", ga_event_action: "filterLevelRisk"})
console.log(bMarka)
//END TASK

//TASK - кнопкам присвоенны, два дата атрибута, нужно при клике их вытаскивать 
var valutadata = document.querySelectorAll('[data-ga-dusetrub], [data-ga-duseteuro')
for (let i = 0; i < valutadata.length; i++) {
  //console.log(valutadata[i])
  valutadata[i].addEventListener("click", () => {
    dataatributval = valutadata[i].getAttributeNames()[1]
    //console.log(dataatributval)
  })
}
//END TASK

//TASK test: цикл for
for(let i = 0; i < 12; i++) {
  console.log(bMarka[2][i])
}
//END TASK

//TASK двумерные массивы 
const cBrend = [
  ['Diesel', 'Versace', 'DKNY', 'Lacoste'],
  ['Moschino', 'Calvin Klein', 'Roberto Cavalli'],
  ['Michael Kors', 'Hugo Boss', 'Tommy Hilfiger'],
]
for ( let i = 0; i < cBrend.length; i++) {
  //console.log(cBrend[i])
  //for (let k = cBrend[i].length - 1; k >= 0 ; k--) //перебор в обратном порядке
  for (let k = 0; k < cBrend[i].length; k++) 
  { 
  console.log(cBrend[i][k])
  }
}
  // 0 < cBrend[0].length у нулевого индекса 4 элемента т.е 0<4 - ДА, условие сработало и переменную k выводим с перменной cBrend[0][k] у которой нулевой индекс [0], на выходе мы получаем cBrend[0][0] - и цикл выводит нам это значение. И дальше переменная k увел + 1 и  переберает следующие индексы т.е Brend[0][1], Brend[0][2] и т.д со всеми остальными [i] - их 3. [0][4],[1][3],[2][3]- нужно перебрать 10 элементов. 
//END TASK

//TASK Ассоциативные массивы 
//Если захотим перебрать массив с помощью цикла for тогда он здесь не подойдет. 
const g5 = [{
  'Calvin_Klein': '745 $', 
  'Roberto_Cavalli': '8995 $',
  'Moschino': { //делаем вложенную структуру в массиве, так состоит JSON документ
    'pants': '3549 $',
    'jacket': {
      'black': '3 pcs',
      'white': '125 pcs'
    }
  }
},
{
  'Diesel': '59 $', 
  'Versace': '475 $', 
  'Hugo Boss': '995 $'
}]

g5[1].adidas = '6$' // добавляем новый элемент в массив
delete g5[0].Roberto_Cavalli // удаляем элементы из массива
console.log(g5)
//END TASK

//TASK API - делаю GET запрос на сервер который предоставляет API, они отдают JSON документ, и я его получаю в ввиде массива. API ключ, токен можно передавать в параметрах URL или прописать в заголовках, как в YM
fetch('https://freebibleapi.com/api/natural/translation?apiKey=e686c278-1d8c-4953-bb04-a638bce58b05')
  .then(function (resp) {return resp.json() })
  .then(function (data) {
    console.log(data);
    document.querySelector('.TylWce').textContent = data[0].description
    document.querySelector('.uylWce').textContent = data[1].description
    //document.querySelector('.uylWce').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
  })
  .catch(function(){
     // catch errors 
  });
//END TASK

// Вызов API Яндекс.Метрики
fetch('https://api-metrika.yandex.net/stat/v1/data?metrics=ym:s:visits,ym:s:users&dimensions=ym:s:date&ids=887018', {
  headers: {
    "Authorization": "token"
  } 
})
  .then(function (resp) {return resp.json() })
  .then(function (data) {
    console.log(data);
  })
  .catch(function(){
     // catch errors 
  });

//TASK - как можно прочитать value data атрибута
const elementM = document.querySelectorAll('meter')[1];
const city = 'Москве'
const {level} = elementM.dataset // в фигур скобках указываем название data атрибута
console.log(`Погода в ${city}` + ' ' + `${level}`) // работаем с jQuery

// перебор всех элементов с помощью цикла
let elementTemp = document.querySelectorAll('meter');
for( let i = 0; i < elementTemp.length - 1; i++){
  valueData = elementTemp[i].dataset
  console.log(valueData.level);
}
//END TASK

//TASK циклы FOR
let arr = [48,57,77,88,01,'Paris']
let classN = document.getElementsByClassName('itemb')
let tagN = document.getElementsByTagName('div')
let selecN = document.querySelectorAll('.itemb')
//1 способ for
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
//2 способ for in - используется для переборки ассоциативных массивов
for (let key in arr) {
  console.log(arr[key])
}
//3 способ for of - можем перебирать одномерные, двумерные массивы. 
for (let item of selecN) {
  console.log(item)
}
//переборка двумерного массива с помощью цикла for of 
const cBrendo = [
  ['Diesel', 'Versace', 'DKNY', 'Lacoste'],
  ['Moschino', 'Calvin Klein', 'Roberto Cavalli'],
  ['Michael Kors', 'Hugo Boss', 'Tommy Hilfiger'],
]

for (let item of cBrendo) {
  //console.log(item)
  for (let item2 of item) {
    console.log(item2)
  }
}
//END TASK

//TASK GET-запрос
let xhttp = new XMLHttpRequest()
// создали объект xhttp, когда будет меняться состояние объекта onreadystatechange вызывать функцию 
xhttp.onreadystatechange = function(){
if (this.readyState == 4 && this.status == 200)
myFunction(this.response)
}

//пример отправки запроса на сервер и передаю параметры методом GET
// метод open() - открывает соединение, но еще не отправлят запрос
xhttp.open('GET', 'http://127.0.0.1:5500/academy/mainSite/?ajax=GET_js&_gid=1066472022.1640689080&tid=UA-116941376-1', true)
// метод send() - отправляет запрос на сервер
xhttp.send()

function myFunction(data){
  //console.log(data)
}
//END TASK

//Получил доступ к элементу и установил любое value  
valueInputA = document.querySelector('input[type="text"]').value = document.cookie.match('.*')
console.log(valueInputA)

// TASK Fetch() 
fetch('http://127.0.0.1:5500/academy/mainSite/')
.then(data => {
  console.log(data)
  console.log(data.text())
})


//Про метод GET - мы делаем запрос на сервер, где передаем get параметры в URL например: /?content=img или просто можем запросить адрес страницы например: /users т.е мы можем просто передать какие-то значения на сервер типо utm_меток и в ответ ни чего не получить, кроме страницы, а может как на пример с /users или /?content=img получить ответ от сервера, в формате json документа или html документ страницы который был сформирован по конкретным get параметрам. 
//Про метод POST - в теле запроса передаем значения на сервер, а также мы их можем вывести на страницу в html 

//Делаем асинхронный запрос(ajax) на сервер и ловим ответ от сервера 
// 1 способ объект XMLHttpRequest / (XHR) 
const requestUrl = 'https://jsonplaceholder.typicode.com/users'
//const requestUrl = 'http://127.0.0.1:5500/academy/mainSite/?ajax=GET_js&_gid=1066472022.1640689080&tid=UA-116941376-1'  
const xhr = new XMLHttpRequest()
// метод open() - открываем соединение т.е пишем условия для запроса на сервер методом GET
xhr.open('GET', requestUrl, true)

// После метода send() От сервера мы получам данные в виде string для решения есть 2 варианта

//1 вариант: из string получить json - Этот лучше потому что можно работать с массивами
xhr.responseType = 'json'

//вешаем прослушиватель событий, вызываем стрелочную функцию и выводим в консоль ответ от сервера 
xhr.onload = () => {
  //2 вариант: из string получить json.
  //console.log(JSON.parse(xhr.response))
  
  // 1 вариант: из string получить json
  console.log(xhr.response) 
  // Что получилось: мы сделали GET запрос на сервер и получили в ответе string конвертнули в json документ и вывели значние массива в html страницу - пример как работает API
  document.querySelector('.text-one1').textContent = xhr.response[0].address.street
}
//отправляем запрос - теперь мы его увидим в network 
xhr.send()

// Метод POST - передаем данные на сервер 
const requestUrl2 = 'https://jsonplaceholder.typicode.com/users'
const xhr = new XMLHttpRequest()
const bodyParam = { name: 'Max', age: 28}
// открывает соединение
xhr.open('POST', requestUrl2, bodyParam)
//устанавливаем доп.заголовки в Request Headers 
xhr.setRequestHeader('Content-Type', 'application/json')
//вешаем прослушиватель событий, вызываем стрелочную функцию и выводим в консоль запрос который отправили на сервер
xhr.onload = () => {
  console.log(bodyParam)
  document.querySelector('.text-one1').textContent = JSON.stringify(bodyParam.age)
}
//отправляем запрос - теперь мы его увидим в network, JSON.stringify() конвертирует json в string 
xhr.send(JSON.stringify(bodyParam))
//END TASK

// TASK
// Вешаем обработчик событий на объектную модель документа без селекторов
document.addEventListener('DOMContentLoaded', () => {
  console.log('Страница загружена - Успешно!!!!!!!')
  //Делаем отправку формы по технологии ajax асинхронный запрос на сервер без перезагрузки страницы
  btn_xhr = document.querySelector('.b1g')
  // в функцию передаем аргумент event и далее обращаемся к нему и можем управлять свойствами событий. 
  btn_xhr.addEventListener('click', async function(event) {
    //отключили дефолтный патерн при клике по кнопке с атрибутом type="submit" кнопка должна отправлять данные на сервер, теперь этого не происходит
    event.preventDefault()
    let ageCheck = document.querySelector('.age3').value
    console.log(ageCheck)

    //fetch() это API браузера и мы его можем вызывать. Отправляю запрос на сервер выдает ошибку 405 т.к у меня не настроен сервер
    let response = await fetch('/academy/mainSite/index.html', {
      method: 'POST', 
      body: new FormData(document.querySelector('form'))
    })
    let response_text = await response.text()
    console.log('RRRRRRRRESSSSSSSSSS', response_text)
})
})

//Сделал css тестер
let css_selector = document.querySelectorAll('div, button')
for (let index = 0; index < css_selector.length; index++) {
  //вешаем обработчик событий, где при клике по элементу согласно селектору меняется цвет
  css_selector[index].addEventListener("click", () => {
    css_selector[index].style.color = "red";

})
}
//END TASK

// TASK - события мыши, в функции указываю параметр "event" которая в консоли выведет всю информацию по событию
document.querySelector('._1a1r8').onclick = function (event) {
  console.log(event)
  console.log('blur')
}

//пример как можно прослушать события в любой области документа без селекторов 
document.addEventListener("click", () => {
    console.log(event)
})

//задачка по интерактиву прогресс бара
let pу = 15
document.querySelector('.ff5').onclick = () => {
  pу++
  document.querySelector('progress').value = pу
}
//END TASK

// TASK Object - не из урока. Создал объект, пример того как устроенна переменная google_tag_manager

let analytics = {data:{event:'sdcsd'}, gtm:{a:'PSXQQJ7', b:'D7QQ45'}}

//END TASK

// TASK - события клавиатуры, применяем ветвление if() для клавиши CapsLock
document.querySelector('.strRUB').onkeydown = function(event){
console.log(event)
console.log('charCode:', event.charCode)
console.log('code:', event.code)
console.log('key:', event.key) 
console.log('keyCode:', event.keyCode)
if(event.key == 'CapsLock') {
  document.querySelector('.caps1').checked = true
}
else{
  document.querySelector('.caps1').checked = false
}
}
//END TASK

// Без объявления let/const такая переменная попадает в объект window
pergefd = 155
//или 
window.perge = 157


//К объектам можно обращаться только по ключу т.е точечная натация
Object_1 = {}
Object_2 = {"event_date":"20220216","event_timestamfp":"1645001913020549","event_fname":"scroll","evenft_params": {"kyey":"sdesdds", "ke6y":"session_engaged","valu6e":"sdsd","string_valu6e":"1", "keyk": {"percent_scrkkolled": "6544","valkkue":"sdsd", "int_valuke":"90"},"keyk5":"ga_session_number","va5lue":"asasa", "int5_value":"d8484848","key9":"page_referrer","val7ue":"sdasacs", "striung_value":"http://127.0.0.1:5500/academy/mainSite/"}}
console.log(Object_2.evenft_params)

//Ассоциативные массивы(Array_2) или массивы внутри объектов(Array_3) позволяет обращаться к ним по индексам, т.е если правильно понимания увеличивают свою ширину или глубину 
 Array_1 = []
 Array_2 = [{"event_params":[{"key":"session_engaged", "value":[{"string_value":"1"},  {"string_value":"2"}, {"int_value":"910"}]}]}, {"event_params":'dscsd'}]

 Array_3 = {"event_date":"20220216","event_timestamp":"1645001913020549","event_name":"scroll","event_params":[{"key":"session_engaged","value":"string_value"},{"key":"percent_scrolled","value":"int_value"},{"key":"ga_session_number","value":{"int_value":"58"}},{"key":"page_referrer","value":{"string_value":"http://127.0.0.1:5500/academy/mainSite/"}},{"key":"ga_session_id","value":{"int_value":"1644995690"}},{"key":"page_title","value":{"string_value":"\"Паевый фонд \\\"XXII век\\\". Инвестируйте в ПИФы БКС.\""}},{"key":"engaged_session_event","value":{"int_value":"1"}},{"key":"engagement_time_msec","value":{"int_value":"29"}},{"key":"ignore_referrer","value":{"string_value":"true"}},{"key":"page_location","value":{"string_value":"http://127.0.0.1/academy/mainSite/"}}]}
 console.log(Array_3.event_params)

// TASK Создаём ASCII-строку, закодированную в base-64 из "строки" бинарных данных.
var encodedData = window.btoa("CapsLock"); // encode a string
var decodedData = window.atob(encodedData); // decode the string
//END TASK

// TASK split, join -  в аргумент передаем разделить
let sp_a = 'v=fvO3JORn8Uc&list=PLM7wFzahDYnEltE-aVGhRHYPwIJn0Xquu&index=29'
console.log(sp_a.split('='))

let join_b = ['v', 'fvO3JORn8Uc', 'PLM7wFzahDYnEltE', 'aVGhRHYPwIJn0Xquu9']
console.log(join_b.join(' '))
//END TASK

// TASK кодировка URL в UTF-8, которая построена на ASCII.
console.log(encodeURIComponent('Википедия'))
//END TASK

// TASK Local Storage - при сохранении массива в Local Storage нужно работать с json т.е при записи конвертировать в строку, при извлечении конвертировать в массив. На Local Storage можно вешать прослушиватель событий и манипулировать страницей с другой страницы. 

localStorage.setItem('date', 5) // первым аргументом создаем переменную для хранения данных, вторым записываем значение
ls_date = localStorage.getItem('date') // передаем название чтобы прочитать значения
console.log(ls_date)

//для проверка типа данных используем typeof
console.log(typeof ls_date)
//END TASK

// TASK Функции
//Сделал именованную функцию, правильно говорить объявил фун-ию, которую могу вызывать глобально в любой области скрипта
//такая функция не гибкая, и служит больше всего как объединения несколько кусков кода - т.е хранит последовательность действий, еще называют процедурой
function f1() {
  document.querySelector('.text-one1').textContent = 'now()_1'
}

document.addEventListener('DOMContentLoaded', () => {
  f1()
})

//Гибкая Функция
//добавляем в функцияю параметры, и потом можем в эту функцию передавать переменные или константы
function f2(b) {
  return b
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.text-one2').textContent = f2(Date.now())
})

// пример что можно в функциях применять ветвление
function f3(b) {
  if(b == 100){
  return 'integer'
  }
  else{
    return 'other'
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.text-one2').textContent = f3(100)
})
//END TASK

// TASK JSON 
// создаем объект cars, где у него есть свойста/ключ(будет правильно так и так) и функцию. В JSON ключ/свойство обязательно нужно брать в кавычки, в JS не обязательно
var auto = {
'name': 'Toyota',  
'horse': 129,

green: function d() {

  // sleeping code
  
  }
}

// Prototype - по сути все что мы создаем в js явл объектами, мы создали переменую "autoModel" от класса "Object" и поэтому в объект "autoModel" попадает прототип главного класса "Object" и у него присутствуют другие методы которые мы можем использовать. 

const autoModel = new Object(
  {
    'name': 'Toyota',  
    'horse': 129,
    
    green: function() {
    
      // sleeping code
      
      }
    }
)

//Расширили базовый прототип класса Object, добавили в него новый метод и он стал доступен для того объекта, в котором мы создаем
Object.prototype.sayHello = function() {
  console.log('Hello')
}

// наследование 
const bike = Object.create(autoModel)
bike.name = 'stels'

const strA = 'Горохов Максим Сергеевич'
//доказали что строка так же явл объектом и теперь доступен прототип
const strB = new String('Горохов Максим Сергеевич')
//END TASK

// TASK this
console.log(`${this === window} 'sdsdd'`)
//END TASK

// TASK замыкание 
function urlGenerator(domain) {
  return function(url) {
    return `https:${url}.${domain}`
  }
}

const ruUrl = urlGenerator('ru')
console.log(ruUrl('vtb'))
//END TASK*/

//Promise - это определенная обертка над асинхронностью, которая просто добавляет удобство для написания кода, промисы пришли чтобы упростить работу с асинхронными операциями.