// const JS = "Я JavaScript";
// // alert(JS);
// // выведет я JavaScript
// let admin;
// let Name = "John";
// admin = Name;
// // alert(admin)
// // выведет John
// let earth;
// let storageUser;

// Name = "Andrew";
// alert(`hello ${1}`)
// выведет hello 1
// alert(`hello ${'name'}`)
// выведет hello name
// alert(`hello, ${Name}`)
// выведет "Hello, Andrew"
// const nameUser = prompt("Как тебя зовут?", "");
// alert(nameUser);

// Постфиксная и префиксные формы

// let a = 1,
//   b = 1;

// let c = ++a; // 2
// let d = b++; // 1
// console.log(c, d);

// // Результат присваивания
// let A = 2;

// let x = 1 + (A *= 2);
// // A = 4
// // x = 5
// console.log(A, x);

//  Преобразование типов
// const q = "" + 1 + 0; // 10
// const w = "" - 1 + 0; // -1
// const e = true + false; // 1
// const r = 6 / "3"; // 2
// const t = "2" * "3"; //6
// const y = 4 + 5 + "px"; //'9px'
// const u = "$" + 4 + 5; //$9
// const i = "4" - 2; // 2
// const o = "4px" - 2; // NaN
// const p = 7 / 0; // infinity
// const s = "  -9  " + 5; // -4
// const g = "  -9  " - 5; // -14
// const f = null + 1; // 1
// const h = undefined + 1; // NaN
// const j = " \t \n" - 2; // NAN

// console.log(q, w, e, r, t, y, u, i, o, p, s, g, f, h, j);

// Исправьте сложение
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b); // 3
// или
// alert(Number(a) + Number(b));
// или
// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);
// alert(a + b);

// // Операторы сравнения

// const c = 5 > 4 // +

// const d = "ананас" > "яблоко" // -

// const f = "2" > "12" // +

// const j = undefined == null // +

// const k = undefined === null // -

// const i = null == "\n0\n" // -

// const y = null === +"\n0\n" // -

// Задачи с if

// if ("0") {
//     alert('Привет');
// } // выведется

// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

// const question = prompt('Какое «официальное» название JavaScript?', '')
// if (question == 'ECMAScript') {
//     alert('Верно!')
// } else {
//     alert('Не знаете? ECMAScript!')
// }

// задача 3
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

// const user = prompt('Как ваше настроение? >1-хорошее. 0-нормальное, <1- плохое', '')

// if (user > 0) {
//     alert('1')
// } else if (user < 0) {
//     alert('-1')
// } else {
//     alert('0')
// }

// Перепишите 'if' в '?'
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// let result;
// let a = 3
// let b = 2
// a + b < 4 ?
//     result = 'Мало':
//     result = 'Много'
// console.log(result)

// Перепишите 'if..else' в '?'
// Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.
// let message;
// const login = prompt('Кто вы? - Сотрудник -Директор -кто-то другой', '')
// login == 'Сотрудник' ? message = 'Привет' :
//     login == 'Директор' ? message = 'Здравствуйте' :
//     login == '13' ? message = 'Введите логин' :
//     message = 'Введите логин';
// alert(message)

let avatar = document.querySelector(".avatar"),
  pers = document.querySelectorAll(".block");

pers.forEach((chemp) => {
  chemp.addEventListener("click", () => {
    pers.forEach((chemp) => {
      chemp.addEventListener("click", () => {
        for (const item of pers) {
          item.classList.remove("click");
        }
        chemp.classList.add("click");
        avatar.classList.add("click");
      });
    });
  });
});
// if (chemp.contains != 'click') {
//     chemp.classList.add('click')
// } else {
//     chemp.classList.remove('click')
// }

// и или задачи
// Что выведет код ниже?

// alert(null || 2 || undefined); //2 +

// // Что выведет код ниже?

// alert(alert(1) || 2 || alert(3)); //2 (правильно 1 а потом 2) +-

// // Что выведет код ниже?

// alert(1 && null && 2); // null +

// // Что выведет код ниже?

// alert(alert(1) && alert(2)); //1 +- потом undefiend

// // Что выведет код ниже?

// alert(null || (2 && 3) || 4); // 3

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.
// let age = prompt("сколько вам лет?");
// if (age >= 14 && age <= 90) {
//   alert("Вы еще так молоды!");
// } else {
//   alert("неожиданно");
// }

// }
// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
// 1 вариант
// let Age = prompt("сколько вам лет?");
// if (Age < 14 || Age > 90) {
//   alert("какой замечательный возраст");
// } else {
//   alert("super");
// }
// // 2 вариант
// let AGE = prompt("сколько вам лет?");
// if (!(AGE >= 14 && AGE <= 90)) {
//   alert("супер возраст");
// } else {
//   alert("супер");
// }

// Какие из перечисленных ниже alert выполнятся?

// Какие конкретно значения будут результатами выражений в условиях if(...)?
// if (-1 || 0) {
//   alert("first"); // false не выполнится (выполнится, потому что -1=true)
// }
// if (-1 && 0) {
//   alert("second"); // 0 не выполнится
// }
// if (null || (-1 && 1)) {
//   alert("third"); // 1 true выполнится
// }
// // Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».
// const user = prompt("Введите логин");

// if (user == "Админ") {
//   let password = prompt("Введите пароль");
//   if (password == "Я главный") {
//     alert("hello");
//   } else if (password == "" || user == null) {
//     alert("Отменено");
//   } else {
//     alert("неверный пароль");
//   }
// }
// if (user == "" || user == null) {
//   alert("Отменено");
// } else if (user !== "Админ") {
//   alert("я вас не знаю");
// }
// else  {
// alert("я вас не знаю");
// }

// Циклы Задачи
// Какое последнее значение выведет этот код? Почему?

// let i = 3;

// while (i) {
//   alert(i--);
// } // выведет 3, 2, 1, потому что начинается с 3 и каждую итерацию уменьшается на 1. 0 == false, поэтому цикл прерывается
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// Оба цикла выводят alert с одинаковыми значениями или нет?
// Префиксный вариант ++i:
// 1
// let i = 0;
// while (++i < 5) {
//   alert(i);
// } //5

// 2
// Постфиксный вариант i++

// let i = 0;
// while (i++ < 5) {
//   alert(i);
// } //4

// оба выведут одинаковый ответ
// различие в том, что в префиксной цикл начнется с 1, а в постфиксной с 0
// также в 1 варианте сначала увеличится на 1(5<5) а потом только сравнится, при этом 5 выведется, хотя не должно(?)

// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// Оба цикла выведут alert с одинаковыми значениями или нет?

// Постфиксная форма:

// for (let i = 0; i < 5; i++) {
//   alert(i);
// } // до 4
// // Префиксная форма:

// for (let i = 0; i < 5; ++i) {
//   alert(i);
// } // до 4

// При помощи цикла for выведите чётные числа от 2 до 10.
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 1) {
//     continue;
//   }
//   alert(i);
// }

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }
// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

// for (let i = 0; i <= 100 || null; i++) {
//   i = prompt("введите число >100");
// }

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

// Напишите код, который выводит все простые числа из интервала от 2 до n.

// Для n = 10 результат должен быть 2,3,5,7.

// P.S. Код также должен легко модифицироваться для любых других интервалов.

// for (let i = 2; i <= 10; i++) {
//   if (i % i == 0 && i % 1 == 0) {
//     alert(i);
//   }
// }

// let n = 20;

// nextPrime: for (let i = 2; i <= n; i++) {
//   // Для всех i...

//   for (let j = 2; j < i; j++) {
//     // проверить, делится ли число..
//     if (i % j == 0) {
//       continue nextPrime;
//     } // не подходит, берём следующее
//   }

//   alert(i); // простое число
// }

// switch
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// const browser = prompt("Какой браузер вы используете?");
// if (browser == "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser == "Chrome" ||
//   browser == "Firefox" ||
//   browser == "Safari" ||
//   browser == "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// Перепишите код с использованием одной конструкции switch:

// const number = +prompt("Введите число между 0 и 3", "");

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

// switch (number) {
//   case 0:
//     alert("Вы ввели число 0");
//     break;

//   case 1:
//     alert("Вы ввели число 1");
//     break;

//   case 2:
//   case 3:
//     alert("Вы ввели число 2, а может и 3");
//     break;
// }

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

// Напишите код, который выводит все простые числа из интервала от 2 до n.

// Для n = 10 результат должен быть 2,3,5,7.

// P.S. Код также должен легко модифицироваться для любых других интервалов.
//  САМА РЕШАЮ ЗАДАЧУ

// const num = 10;

// numSort: for (let i = 2; i <= num; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       continue numSort;
//     }
//   }
//   alert(i);
// }
// let n = 20;

// функции
// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm("Родители разрешили?");
//   }
// }

// не обязательно, так как на return функция останавливается
// Будет ли эта функция работать как-то иначе, если убрать else?
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Родители разрешили?');
// }
// Есть ли хоть одно отличие в поведении этого варианта? одинаково

// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// Сделайте два варианта функции checkAge:

// Используя оператор ?
// Используя оператор ||

// 1 вариант
// function checkAge(age) {
//   return age > 18 ? true : confirm('Родители разрешили?')
// }
// 2 вариант
// function checkAge(age) {
//   return age > 18  || confirm('Родители разрешили?')
// }

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// function getMinNum(a, b) {
//   // if (a > b) {
//   //   return b;
//   // } else {
//   //   return a;
//   // }
//   return a > b ? b : a;
// }
// console.log(getMinNum(-5, 16));

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

// function pow(x, n) {
//   result = x;
//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// let x = prompt("Введите число x");
// let n = prompt("Введите число n");

// if (n < 1) {
//   alert(
//     `Степень ${n} не поддерживается, используйте натуральное число, т.е. >=1`
//   );
// } else {
//   alert(pow(x, n));
// }
// Замените код Function Expression стрелочной функцией:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function () {
//     alert("Вы согласились.");
//   },
//   function () {
//     alert("Вы отменили выполнение.");
//   }
// );

// const ask = (question, yes, no) => (confirm(question) ? yes() : no());
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );

// Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true». При помощи оператора определения типа убедитесь, что переменных принадлежат типам: string,
// number, boolean.

// let str = "привет";
// let num = 213;
// let flag = true;
// let txt = "true";

// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);
// Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
// const a1 = 5 + 3,
//   a2 = 5 - 3,
//   a3 = 5 * 3,
//   a4 = 5 / 3;
// console.log(a1, a2, a3, a4.toFixed(2));

// Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
// const a6 = 5 % 3,
//   a7 = 3 % 5,
//   a8 = 5 + '3',
//   a9 = '5' - 3,
//   a10 = 75 + 'кг'

// Напишите скрипт, который находит площадь прямоугольника высота 23см. (в числовую переменную height), шириной 10см (в числовую переменную width), значение площади должно
// хранится в числовой переменной s.
// const width = 10,
//   height = 23,
//   s = width * height

// Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC), результат поместите в переменную v
// const heightC = 10,
//     dC = 4,
//     v = heightC * dC

// У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4). Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число,
// степень) или оператор возведения в степень ** ).
// const n = 3,
//   m = 4,
//   k = Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2))

// console.log(k)

// Напишите оператор if, такой, чтобы в качестве выражения в скобках у него были значения
// true, false (Например, if( true ) или if( false )). Посмотрите как работает этот оператор,
// поместив какую-нибудь команду после круглых скобок (Например, console.log(1)). Примечание:
// это задание очень простое. Если вы читая его, поняли суть, не выполняйте его 🙂
// я поняла но сделаю для себя

// if (2 > 10) {
//   console.log(1)
// } else {
//   console.log('oh,no!')
// }

// Создайте переменные m и n. В m поместите произвольное числовое значение. Напишите оператор ветвления if так, чтобы если m было больше 50, то в переменную n помещалось слово
// «большое», иначе — слово «маленькое».

// const m = 22,
//   n = (m > 50) ? 'big' : 'little'

// console.log(n)
// Определите сколько раз выполнится цикл while? Примечание: это можно сделать прочитав скрипт или запустив его консоли браузера.
// var i = 2;
// while (i < 9) {
//   console.log(i++);
// } // выполнится 7 раз, ответила на вопрос, прочитав код

// Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.
// let a = 45;
// while (a < 68) {
//   console.log(a++)

// }

// Напишите скрипт, который используя оператор while выведет все числа от 45 до 670, кратные 10.
// let num = 45

// while (num <= 670) {
//   if (num % 10 == 0) {
//     console.log(num)
//   }
//   num++
// }

// let i = 45;
// for (i; i < 68; i++) {
//   console.log(i);
// }
// let i = 45;
// for (i; i <= 670; i++) {
//   if (i % 10 === 0) {
//     console.log(i);
//   }
// }

// функции
// Напишите функцию hello1(), которая при вызове будет возвращать строку «Привет, JavaScript!».

// function hello1() {
//   alert("Привет, JavaScript!");
// }
// hello1();

// Напишите функцию hello2(), которая при вызове будет принимать переменную name
// (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).  В случае отсутствующего аргумента выводить «Привет, гость»
// function hello2(name) {
//   if (name == "Василий") {
//     alert(`hello, ${name}`);
//   } else {
//     alert("hello, friend!");
//   }
// }

// hello2("Василий");

// Напишите функцию mul(n,m), которая принимает два аргумента и возвращает произведение этих аргументов. Проверьте ее работу.

// function mul(n, m) {
//   return n * m;
// }
// alert(mul(5, 6));

// Создайте функцию repeat(str, n), которая возвращает строку, состоящую и n повторений строки str. n — по умолчанию 2, str — пустая строка

// function repeat(str, n) {
//   for (n = 2; n < 5; n++) {
//     alert(str);
//   }
//   return str;
// }

// repeat("");

// Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать
// строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных

// function rgb(a = 0, b = 0, c = 0) {
//   return alert(`rgb (${a}, ${b}, ${c})`);
// }

// rgb(23, 100, 134);

// Создайте функцию avg() , которая будет находить среднее значение по всем своим аргументам (аргументы величины числовые).

// function avg(a, b, c) {
//   return alert((a + b + c) / 3);
// }
// avg(3, 5, 10);

// Создайте функцию m(a,b) оболочку для mul(). m() должна принимать два аргумента а
// возвращать результат работы mul() с этими двумя аргументами После выполнения задания
// поэкспериментируйте, создайте функцию log(), которая будет принимать одно значение, а вызывать  console.log() с этим значением.

// function m(a, b) {
//   let n = a;
//   let m = b;
//   function mul() {
//     return alert(n * m);
//   }

//   return a * b;
// }
// alert(m(3, 8));

// моя функция
// function num() {
//   for (let a = 2; a < 20; a++) {
//     if (a % 2 == 1) {
//       alert(a);
//     } else {
//       continue;
//     }
//   }
// }
// num();

// let num =  123
// alert(num)
// let a =1, b = 3

// let f,c
// f = 2
// c = 4
// let a = 10,
//     b = 2
// alert(a + b)
// alert(a - b)
// alert(a * b)
// alert(a / b)

// let a = 10,
// b = 5,
// result = a + b

// alert(result)

// let hourDay = 60 * 60 * 24
// let mounth = hourDay * 30
// let yearSec = hourDay * 365

// alert(yearSec)
// let a = (-'5') + (-'2');
// alert(typeof a);

// let a = parseInt('5px') + parseInt('5px')
// alert(a)
// alert( String(true) + Number(true) );
// let test = Boolean(3 * 'abc');
// alert(test);

//  символ в переменной
// let str = 'abcde'
// // console.log(str[0])
// // console.log(str[2])
// // console.log(str[4])
// // console.log(str[4])
// // console.log(str[3])
// // console.log(str[2])
// // console.log(str[1])
// // console.log(str[0])
// let num = 3
// console.log(str[num])
// let str = 'fhggvbkhkfgd'
// console.log(str[str.length - 1])

// Переделайте этот код так, чтобы в нем использовались описанные сокращенные операции:

// let num = 47;
// num += 7
// num -= 18
// num *= 10
// num /= 15
// console.log(num)

// Переделайте этот код так, чтобы в нем операции инкремента и декремента:

// let num = 10;
// num++
// num++;
// num--;
// console.log(num);

// Не запуская код, определите, что выведется на экран:

// let num = 3;
// alert(++num); // выведется 4

// Не запуская код, определите, что выведется на экран:

// let num = 3;
// alert(num++); // выведется 3

// Не запуская код, определите, что выведется на экран:

// let num = 3;
// alert(--num); // выведется 2

// Не запуская код, определите, что выведется на экран:

// let num = 3;
// alert(num--); // выведется 3

// Не запуская код, определите, что выведется на экран:

// let num1 = 3;
// let num2 = ++num1;
// alert(num1);
// alert(num2); // выведется 4 и 4

// Не запуская код, определите, что выведется на экран:

// let num1 = 3;
// let num2 = num1++;
// alert(num1);
// alert(num2); // 4 и 3

// Не запуская код, определите, что выведется на экран:

// let num1 = 3;
// let num2 = --num1;
// alert(num1);
// alert(num2); // 2 и 2

// Не запуская код, определите, что выведется на экран:

// let num1 = 3;
// let num2 = num1--;
// alert(num1);
// alert(num2); // 2 и 3

// Не запуская код, определите, что выведется на экран:

// let num1 = 3;
// num1++;
// let num2 = num1--;
// alert(num1++);
// alert(--num2); // выведет 3 и 3

// let a, b , c = 20
//  console.log(a) // undefiend
//  let a, b, c;

// a = b = c = 20

// console.log(a) // 20

// let a =  b =  c = 20
// console.log(b)

// Спросите возраст пользователя с помощью функции prompt. Выведите с помощью alert введенный пользователем возраст.
//  alert(prompt('Сколько Вам лет?'))


// alert(prompt('Сколько Вам лет?'))
// let num1 = prompt('Введите первое число');
// let num2 = prompt('Введите второе число');

// alert(num1 + num2);

// Переделайте приведенный выше код так, чтобы суммировались числа, а не строки.

// let num1 = +prompt('Введите первое число');
// let num2 = +prompt('Введите второе число');
// alert(num1 + num2);
// С помощью функции prompt спросите у пользователя сторону квадрата. Выведите на экран площадь введенного квадрата.

// const a = prompt('Напишите люое число(оно будет являться стороной квадрата)')
// alert('Площадь квадрата = ' + a**2)
// С помощью двух функций prompt спросите у пользователя стороны прямоугольника. Выведите на экран периметр введенного прямоугольника.

// const a = +prompt('Напишите длину прямоугольника в см:'),
// b = +prompt('Напишите ширину прямоугольника в см:')
// alert(`Периметр прямоугольника = ${a+b}`)

// Массивы
// Создайте массив с элементами 'a', 'b', 'c'. Выведите на экран каждый из этих элементов.
// const arr = ['a', 'b', 'c']
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

// Создайте массив с элементами 'a', 'b', 'c', 'd'. Выведите с его помощью на экран строку 'a+b+c+d'

// const arr = ['a', 'b', 'c', 'd']
// alert(`${arr[0]} + ${arr[1]} + ${arr[2]} + ${arr[3]}`)

// Создайте массив с элементами 1, 2 и 3. Выведите на экран сумму этих элементов.
// const arr = [1, 2, 3]
// alert(arr[0] + arr[1] + arr[2])

// Создайте массив с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а 
// третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
// const arr = [2, 5, 3, 9]
// const result = arr[0] * arr[1] + arr[2] * arr[3]
// alert(result)

// Длина массива

// Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.

// const arr = [1, 2, 3, 4, 5]
// alert(arr.length)
// Последний элемент массива
// Создайте массив с произвольными элементами. Выведите на экран последний элемент этого массива.
// const arr = [1, 2, 3, 4, 5]
// alert(arr[arr.length-1])

// Изменение массива

// Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.
// const arr = ['a', 'b', 'c']
// arr[0] = '1'
// arr[1] = '2'
// arr[2] = '3'

// console.log(arr)

// Перезапись элементов

// Создайте массив с числами. Прибавьте к каждому элементу массива число 3. Выведите на экран измененный массив.
// const arr = [1, 2, 3, 4]
// arr[0] += 3
// arr[1] += 3
// arr[2] += 3
// arr[3] += 3
// alert(arr)

// Инкремент и декремент

// Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.

// const arr = [1, 2, 3]
// arr[0]++
// ++arr[1]
// arr[2]++
// alert(arr)

// Заполнение массива

// С помощью описанного приема создайте массив с элементами 1, 2 и 3.
// const arr = []
// arr[0] = 1
// arr[1] = 2
// arr[2] = 3
// alert(arr)

// Пусть дан такой массив:

// let arr = [1, 2, 3];
// // Добавьте ему в конец элементы 4 и 5.
// arr[3] = 4
// arr[4] = 5

// alert(arr)

// Объекты в JavaScript

// Создайте объект с ключами 1, 2 и 3 и значениями 'a', 'b' и 'c'. Выведите на экран все его элементы.
// const obj = {
//   1: 'a',
//   2: 'b',
//   3: 'c'
// }
// alert(`${obj[1]}, ${obj[2]}, ${obj[3]}`)

// Строковые ключи
// Создайте объект с ключами a, b и c и значениями 1, 2 и 3. Найдите сумму его элементов.

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// alert(obj.a + obj.b + obj.c)

// Ограничение на строковые ключи

// Создайте объект с ключами 1a, 2b и с-с и значениями 1, 2 и 3. Найдите сумму его элементов.
// const obj = {
//   '1a': 1,
//   '2b': 2,
//   'c-c': 3
// }
// alert(obj['1a'] + obj['2b'] + obj['c-c'])

// Дан объект:

// let obj = {
//   '1a': 1, 
//   'b2': 2, // не обязательны кавычки
//   'с-с': 3, 
//   'd4': 4}; // не обязательны кавычки 
// Для каких ключей данного объекта кавычки обязательны, а для каких нет?

// Альтернативный синтаксис

// Дан объект:

// let obj = {
//   key1: 1, 
//   key2: 2, 
//   key3: 3
// };
// // Найдите сумму его элементов. Обращайтесь к элементам с помощью изученного синтаксиса.
// alert(obj.key1 + obj.key2 + obj.key3)

// Дан объект:

// let obj = {
//   '1a': 1, //-
//   b2: 2, //+
//   'eee-': 3, // -
//    d4: 4
//   }; // +
// // К каким элементам этого объекта допустимо обращение через свойство, а к каким - нет?

// Создайте объект user с ключами name (имя), surname (фамилия), patronymic (отчество) и 
// какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.
// const user = {
//   name: 'Владислава',
//   surname: 'Зенцова',
//   patronymic: 'Вячеславовна'
// }
// alert(`${user.surname  + ' ' + user.name + ' ' +  user.patronymic}`)

// Создайте объект date (дата) с ключами year (год), month (месяц) и day (день) и 
// значениями, соответствующими текущему дню. Выведите созданную дату на экран в формате 'год-месяц-день'.

// const date = {
//   year: 2020,
//   month: 10,
//   day: 19
// }
// alert(`${date.day}-${date.month}-${date.year}`)

// Ключи из переменных в JavaScript

// Дан следующий массив:

// let arr = ['a', 'b', 'c'];
// let key = 2
// // Дана также переменная key со значением 2.
// alert(arr[key])
// // Выведите на экран элемент, ключ которого хранится в переменной key.

// dан следующий массив:

// let arr = [1, 2, 3, 4, 5];
// // Дана также переменная key1 со значением 1 и переменная key2 со значением 2.

// // Найдите сумму элементов, ключи которых хранятся в наших переменных.
// let key1 = 1
// let key2 = 2
// alert(arr[key1] + arr[key2])

// ключи объектов

// Дан следующий объект:

// let obj = {'a': 1, 'b': 2, 'c': 3};
// // Дана переменная key, в которой хранится один из ключей нашего объекта. Выведите с помощью переменной key соответствующий элемент массива.
// let key = 'a'
// alert(obj[key])

// Не запуская код, определите, что выведется на экран в консоль:

// console.log( typeof {a: 1, b: 2, c: 3} ); // obj

// Не запуская код, определите, что выведется на экран в консоль:

// console.log( typeof [1, 2, 3] ); // obj

// Не запуская код, определите, что выведется на экран в консоль:

// let arr = [1, 2, 3];
// console.log( typeof arr ); //obj

// Не запуская код, определите, что выведется на экран в консоль:

// let arr = [1, 2, 3];
// console.log( typeof arr[0] ); // number

// Не запуская код, определите, что выведется на экран в консоль:

// let arr = ['1', '2', '3'];
// console.log( typeof arr[0] ); //string

// Не запуская код, определите, что выведется на экран в консоль:

// console.log( Array.isArray([1, 2, 3]) ); // + true

// Не запуская код, определите, что выведется на экран в консоль:

// console.log( Array.isArray({a: 1, b: 2, c: 3}) ); // - false
// Не запуская код, определите, что выведется в консоль:

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// console.log(arr2); // [1, 2 ,3]

// Не запуская код, определите, что выведется в консоль:

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// arr2[1] = 'b';

// console.log(arr1); // ['a', 'b', 3]

// Не запуская код, определите, что выведется в консоль:

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// arr2[0] = 'b';

// console.log(arr2); // ['b', 2, 3]

// If else <>
// Если переменная test больше 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.
// let test = 10
// if (test > 10) {
//   console.log('Верно')
// } else {
//   console.log('неверно')
// }

// Если переменная test меньше 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

// if (test < 10) {
//   console.log('Верно')
// } else {
//   console.log('неверно')
// }

// Если переменная test больше или равна 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

// if (test >= 10) {
//   console.log('Верно')
// } else {
//   console.log('неверно')
// }

// Если переменная test меньше или равна 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

// if (test <= 10) {
//     console.log('Верно')
//   } else {
//     console.log('неверно')
//   }

// Если переменная test равна 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.
// if (test == 10) {
//     console.log('Верно')
//   } else {
//     console.log('неверно')
//   }

// Если переменная test не равна 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.
// if (test != 10) {
//     console.log('Верно')
//   } else {
//     console.log('неверно')
//   }

// Даны переменные test1 и test2. Проверьте, что значение какой из этих переменных больше и выведите соответствующее сообщение на экран.

// let test1 = 10
// let test2 = 13

// if (test1 < test2) {
//   console.log('верно')
// } else {
//   console.log('неверно')
// // }


// Не запуская код, определите, что выведется на экран:

// let test1 = '3';
// let test2 = '3';
		
// if (test1 == test2) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }  выведется верно

// Не запуская код, определите, что выведется на экран:

// let test1 = '3';
// let test2 = '3';
		
// if (test1 === test2) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }   верно

// Не запуская код, определите, что выведется на экран:

// let test1 = 3;
// let test2 = '3';
		
// if (test1 == test2) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } верно

// Не запуская код, определите, что выведется на экран:

// let test1 = 3;
// let test2 = '3';
		
// if (test1 === test2) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }  неверно

// Не запуская код, определите, что выведется на экран:

// let test1 = 3;
// let test2 = 3;
		
// if (test1 === test2) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }  верно

// Неравенство по значению и типу

// Не запуская код, определите, что выведется на экран:

// let test1 = '3';
// let test2 = '3';
		
// if (test1 != test2) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }  неверно

// Не запуская код, определите, что выведется на экран:

// let test1 = '3';
// let test2 = '3';
		
// if (test1 !== test2) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }   неверно

// Не запуская код, определите, что выведется на экран:

// let test1 = 3;
// let test2 = '3';
		
// if (test1 != test2) {
// 	console.log('верно');
// } else {
// 	console.log('неверно');
// } // неверно

// Не запуская код, определите, что выведется на экран:

// let test1 = 3;
// let test2 = '3';
		
// if (test1 !== test2) {
// 	alert('верно'); // +
// } else {
// 	alert('неверно');
// }

// Не запуская код, определите, что выведется на экран:

// let test1 = 3;
// let test2 = 2;
		
// if (test1 !== test2) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } //верно

// Сложные условия в if-else в JavaScript

// Логическое И

// Если переменная num больше нуля и меньше 5, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.
// let num = 3
// if (num > 0 && num < 5) {
//   console.log('верно')
// } else {
//   console.log('неверно')
// }
// Если переменная num больше или равна 10 и меньше или равна 20, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

// let num = 10
// if (num >= 10 && num <= 20) {
//     console.log('верно')
//   } else {
//     console.log('неверно')
//   }

// Если переменная num1 равна или меньше 1, а переменная num2 больше или равна 3, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

// let num1 = 1
// let num2 = 3
// if (num1 <= 1 && num2 >=3) {
//   console.log('верно')
//   } else {
//     console.log('неверно')
//   }

//  || 

// Не запуская код определите, что выведется на экран:

// let num1 = -10;
// let num2 = -10;

// if (num1 >= 0 || num2 >= 0) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } неверно

// Не запуская код определите, что выведется на экран:

// let num1 = 0;
// let num2 = 0;

// if (num1 >= 0 || num2 >= 0) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }  верно

// Не запуская код определите, что выведется на экран:

// let num1 = 0;
// let num2 = 5;

// if (num1 >= 0 || num2 >= 0) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }  верно

// Не запуская код определите, что выведется на экран:

// let num1 = 5;
// let num2 = 5;

// if (num1 >= 0 || num2 >= 0) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } верно

// Не запуская код определите, что выведется на экран:

// let num1 = -5;
// let num2 = 15;

// if (num1 >= 0 || num2 >= 0) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } верно

// Не запуская код определите, что выведется на экран:

// let num = 1;

// if (num == 0 || num == 1) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } верно

// Не запуская код определите, что выведется на экран:

// let num = 2;

// if (num == 0 || num == 1) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } неверно

// Не запуская код определите, что выведется на экран:

// let num = 2;

// if (num == 0 || num == 1 || num == 2) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } верно
 
// приоритет операций

// В приведенном ниже коде укажите приоритет операций в явном виде:

// let num = 3;
		
// if ((num > 5 && num < 10 )|| num == 20) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } // выведет неверно

// В приведенном ниже коде укажите приоритет операций в явном виде:

// let num = 3;
		
// if (num > 5 || (num > 0 && num < 3)) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } верно
// В приведенном ниже коде укажите приоритет операций в явном виде:

// let num = 3;
		
// if (num == 9 || (num > 10 && num < 20) || (num > 20 && num < 30)) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } неверно

// инвертирование высказываний if-else

// Дан следующий код:

// if (!(num1 >= 0 || num2 <= 10)) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }
// Используя оператор ! инвертируйте приведенное условие.

// Конструкция if-else и булевы значения

// Если переменная test равна true, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

// const test = true 
// if (test === true) {
//   console.log('верно')
// } else {
//   console.log('неверно')
// }

// Если переменная test равна false, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.
// const test = false
// if (test === false) {
//   console.log('верно')
// } else {
//   console.log('неверно')
// }

// Логические значения и двойное равно
// Не запуская код, определите, что выведется на экран:

// let test = 1;
		
// if (test == true) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } верно

// Не запуская код, определите, что выведется на экран:

// let test = 0;
		
// if (test == true) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } неверно

// Не запуская код, определите, что выведется на экран:

// let test = 1;
		
// if (test == false) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } неверно

// Не запуская код, определите, что выведется на экран:

// let test = 1;
		
// if (test != true) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } неверно

// Не запуская код, определите, что выведется на экран:

// let test = NaN;
		
// if (test == true) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } неверно

// Не запуская код, определите, что выведется на экран:

// let test = NaN;
		
// if (test == false) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } верно

// let test = '';
		
// if (test == false) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } // верно

// let test;
		
// if (test == true) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } неверно

// Не запуская код, определите, что выведется на экран:

// let test = 3 * 'a';
		
// if (test == true) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// } // neverno

// сокращенное сравнение

// Перепишите следующий код с использованием сокращенного сравнения:

// let test = true;

// if (test) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// Перепишите следующий код с использованием сокращенного сравнения:

// let test = true;

// if (!test) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }