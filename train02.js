

// codewars 1.
//создать каскад each_cons где есть массив 
//чисел и в конце число, по сколько шт их раздробить

/*each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]*/
2//
//   function each_cons(array, n){
//     const r = [];
//     for(i<0;i<=array.length-n;i++){
//         const chunk = [];
//         for(let j =i; j<i+n; j++){
//             chunk.push(array[j])
//         }
//         r.push(chunk)
        
//     }
//     return r;
//   }


//3
// function lovefunc(flower1, flower2){
//     if(flower1 %2 ==0 && flower2 %2 != 0 || flower2 %2 ==0 && flower1 %2 != 0){

//         console.log('true')
//     }else{
//         console.log('false')
//     }
// }
// lovefunc(2,6)

4//
// function makeNegative(num) {
//     if(num<0 || num==0){
//         return num
//     }else{
//         return num*(-1)
//     }
//   }

5//
// function greet(name){
//     return`"Hello, ${name} how are you doing today?"`;
// }


//6
// function countPositivesSumNegatives(input) {

//   }



//выдает 2 массива не вместе без суммы 
// const prices = [1,2,3,4,5];
// let new_prices = [];
// let new_prices2 = [];
// for(let i=0; i < prices.length; i++){
//   if(prices[i]%2==0){
//   new_prices.push(prices[i]);
//   console.log(new_prices)
//   }else{
//     new_prices2.push(prices[i]);
//   }
// }
// console.log(new_prices)
// console.log(new_prices2)



//сумма четных без скобок + это не функция
// let someArr = [2,6,7,8,9];
// let odds_chet = someArr.filter(num => num % 2==0).map(i=>x+=i, x=0).reverse()[0];
// let odds_nechet = someArr.filter(num => num % 2 !=0).map(i=>x+=i, x=0).reverse()[0];
// console.log(odds_chet)


//выдает сумму четных без скобок
// function summArrayElements(arr){
// return arr.filter(i => i % 2 == 0).map(i=>x+=i, x=0).reverse()[0]
// }
// let someArr = [2,6,7,8,9];
// console.log(summArrayElements(someArr))


//пробные


//7
// function sum(a,b){
//   return a.repeat(b)
// }
// console.log(sum('a',5))

//8
// function sum(name){
//   if(name[0] == 'R'|| name[0]== 'r'){
//     return name + " plays banjo"
//   }else{
//     return name + " does not play banjo"
//   }
// }
// console.log(sum('Ra'))

//9
// function sum1(num){
//   let sum=0
//   for(let i=1; i<=num; i++){
//     sum+=i
//   }
//   return sum
// }

//10
// function weightCalc(w,h){
//   let bmi = w/h*h
//   if(bmi <=18.5){
//     return "Underweight";
//   }else if(bmi <=25.0){
//     return "Normal"
//   }else if(bmi <= 30.0){
//     return "Overweight"
//   }else if(bmi > 30){
//     return "Obese"
//   }
// }
// console.log(weightCalc(80, 1.80))

//11
// function sum(h){
//     let v = 0.5;
  
//     let sum1 = h*v;
//     return Math.trunc(sum1)
//   }
//   console.log(sum(6.7))

//12
// function dis(a,b,c){
//   let form = (b*b)-4*(a*c)
//   let ro = -b/(2*a)
//   let r1 = (-b-Math.sqrt(form))/(2*a)
//   let r2 = (-b+Math.sqrt(form))/(2*a)
//   if(form<0){
//     return 'корней нет'
//   }else if(form==0){
//     return 'ур имеет 1 корень' + ' = '+ro;
//   }else if(form>0)
//     return 'корень 1 ='+ r1 + 'корень 2 =' + r2
// }

// console.log(dis(1, -4, -5))

 

// function dis(a,b,c){
//   let form = (b*b)-4*(a*c)
//   let ro = -b/(2*a)
//   let r1 = (-b-Math.sqrt(form))/(2*a)
//   let r2 = (-b+Math.sqrt(form))/(2*a)
//   if(a==0){
//     return 'корень 1 ='+ r1 +' '+ 'корень 2 =' + r2;
//   }
//   if(form<0){
//     return 'корней нет'
//   }else if(form==0){
//     return 'ур имеет 1 корень' + ' = '+ro;
//   }else if(form>0)
//     return 'корень 1 ='+ r1 + 'корень 2 =' + r2
// }

// console.log(dis(0, 3, 4))


//13
//тут была ошибка тк массив вне функции. он должен быть в теле функции. 
//и ретерн должен быть перед ласт скобкой
// let arr = []
// function filter_list(l) {
//   console.log(l)
//   for( i=0; i<l.length;i++){
//     if(typeof l[i] != 'number'){
//       continue;
//   }else{
//       arr.push(l[i])
      
//   }
//     }
//   return arr;
// }
// console.log(filter_list([14,6,"a",666,"b",0,15]))

//решение из сайта
// function filter_list(l) {
//   var res = [];
//               for(var item=0;item<l.length;item++)
//               {
//                   if (typeof l[item] === "number")
//                   {
//                       res.push(l[item]);
//                   }
    
//               }
//               return res;
//   }

//14 еще сделала палиндром

//15
//правильно написанный цикл, который выводит все числа от 1 до n
// function func(n){
//   let arr = []
//   for(let i=1; i<=n;i++){
//     arr.push(i)
// }
//   return arr;
// }
// console.log(func(1))

//16
//убираем всае гласные
//https://ru.stackoverflow.com/questions/882875/%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80-%D0%B4%D0%BB%D1%8F-%D1%81%D1%82%D1%80%D0%BE%D0%BA-%D0%BA%D0%B0%D0%BA-%D1%83%D0%B4%D0%B0%D0%BB%D0%B8%D1%82%D1%8C-%D1%81%D0%BB%D0%BE%D0%B2%D0%BE
// var cenzrBlock = {
// 	"a": ""
// 	,"e": ""
// 	,"i": ""
//   ,"o": ""
// 	,"u": ""
// 	,"A": ""
//   ,"E": ""
// 	,"I": ""
//   ,"O": ""
// 	,"U": ""
// }
// function disemvowel(str){
// for(let key in cenzrBlock){
// 	str = str.split(key).join(cenzrBlock[key])
// }
// return str;
// }

//17 мб https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript
//выводит 5 элементов в квадрате каждый в виде массива
// function sum(a,b){
//   let arr =[]
//     for(let i=a; i<=b+1; i++){
//       arr.push(i**a)
//     }  
//     return arr;
//   }
//   console.log(sum(2,5))

//нашла еще решение
// let array = [1,2,3];
// array = array.map((elem, index) => array.slice(0,index + 1).reduce((a, b) => a*b));
// console.log(array);

//https://www.codewars.com/kata/57202aefe8d6c514300001fd объяснение на кодворс джаваскрипта

// репл ит https://replit.com/languages/javascript

//попытки сделать 18 номер 

// function s(a,b){

// var new_arr =a.map(i=>i**b);
//   return new_arr
// }
// console.log(s([1,3,4],2))

// function ss(a,b){
// let arr = [];

// while(a <= b){
//   arr.push(a++);
// }
//   let new_arr = arr.map(i=>i*a)
//   return new_arr;
// }
// console.log(ss(2,5))
// checkRepeat = function (str) {
//   var repeats = /([a-z])\1/i;
// if(str.includes(repeats)){
//   return false;
// }
// }
// console.log(checkRepeat('Dermatoglyphics'))


// function squares(x,n){
// let a = x;
//   return (1..n).map { |e| a.tap { a *= a } };
// console.log(squares(2,5))

//задание мб 19
//выводит аргументы в остаточных параметрах через запятую 
// function build(...template){
//   let arr = template.join(', ');
//     return `I like ${arr}!`;
//   }
//     console.log(build('Cheese','Milk','Chocolate'))


//задание 20 мб 
// function val (pin) {
// let s = pin.toString();
// let regex =/[^\._\-\/\*\(\)a-zA-Z]/g;
//   if(s.length==6 || s.length==4 && !s.match(regex)){
//     return true;
  // }if(s.match(regex)){
  //   return false;
  // }else{
  //   return false;
  // }
// }
// }
// console.log(val('-12234'))

// && s.length>4 && s.match(regex))

//вот что то с этим можно сделать
// const  isdigit=(value)=>{
//   const val=Number(value)?true:false
//   console.log(val);
//   return val
// }

// isdigit("10")//true
// isdigit("any String")//false

// сумма положительных значений, если пустой то вывод - 0, если все отриц то вывод 0
// function positiveSum(num){
//   var sum = 0;
//   for (var i = 0; i < num.length; i++) {
//       if (num[i] > 0){
//           sum += num[i];
//       }
//   }
//     return sum;
//   }
//   console.log(positiveSum([-1,-2]));



//20 какое то вернуть количество символов самой короткой строки
// function mIn(names){
//   var names2 = names.split(' ')
//   var a_min = names2[0];
//   for (i = 0; i < names2.length; i++) {
//      if (names2[i].length <= a_min.length) {
//         a_min = names2[i];   
//      }
//   }
//     return a_min.length
//   }
//   console.log(mIn('bitcoin take over the world maybe who knows perhaps'))

//21
//задача https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
//попыталась решить так 
//но выдает срез разный всегда в зависимости от длинны массива 
// const array = [ 1, 1, 1, 2, 1, 1];
// let arraY = array.filter((item, index) => array.indexOf(item) == index)
// var index;
// for (var i=0; i<arraY.length; i++) {
//     index = array.indexOf(array[i]);
//     if (index > -1) {
//         array.splice(index, 3);
//     }
// }
// console.log(array)

//решила первую 6 кату сама
// function check(a){
//   let arr = [];
//     if(a.length==0){
//       return "no one likes this"
//   }
//       if(a.length==1){
//       return a+" likes this"
//   }
//   if(a.length ==2){
//     return a.join(' and ')+' like this'
//   }
//    if(a.length ==3){
//       return a[0]+', '+a[1]+' and '+a[2]+' like this'
//    }
//     if(a.length >2){
//       for(i=2;i<a.length;i++){
//         arr.push(a[i])
  
//       }
//       return a[0]+', '+a[1]+' and '+arr.length+' others like this'
//     }
//   }
//   console.log(check(['Alex', 'Jacob', 'Mark']))

(задача на lindkedList- решается вообще по другому)
var mergeTwoLists = function(list1, list2) {
let arr = []
  for(let i =0;i<list1.length;i++){
    arr.push(list1[i])
  }
  for(let k =0;k<list2.length;k++){
    arr.push(list2[k])
  }
  return arr.sort()
};

console.log(mergeTwoLists([],[0]))
  
20.Leetcode Valid Parentheses
var isValid = function (inputString) {
    // Initialise an array to store the closing brackets expected
    let expectedBrackets = [];

    // Loop through the letters in the input string
    for (let letter = 0; letter < inputString.length; letter++) {
        // Push the closing equivelant of any open brackets found
        if (inputString[letter] == '{') {
            expectedBrackets.push('}');
        } else if (inputString[letter] == '[') {
            expectedBrackets.push(']');
        } else if (inputString[letter] == '(') {
            expectedBrackets.push(')');
        }
        // If a close bracket is found, check that it matches the last stored open bracket
        else if (expectedBrackets.pop() !== inputString[letter]) {
            return false;
        }
    }

    // Return based on whether or not anything remains
    // (indicates that there were incorrect brackets)
    return !expectedBrackets.length;
};
