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
