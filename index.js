//функция получения значений из инпутов и переобразования полученных строк в числа 
function getValue(id) {
    let num = document.getElementById(id).value;
    num = Number(num);
    return num;
}
//создание Класса и статичесикх методов сложения, вычитания, умножения и деления
class Calc {
    static addition(num1, num2) {
        return num1 + num2;
    };
    static subtraction(num1, num2) {
        return num1 - num2;
    };
    static multiplication(num1, num2) {
        return num1 * num2;
    };
    static division(num1, num2) {
        return num1 / num2;
    };
}
//функция получения результата сложения чисел (сумма)
function getSum() {
    const num1 = getValue('number1');
    const num2 = getValue('number2');
    let result = Calc.addition(num1, num2); // создаю объект класса и обращаюсь к нему через класс и статический метод с функцией сложения
    document.getElementById('out').innerHTML = 'Результат: ' + result; //вывожу результат в новый инпут
}
//функция получения результата вычитания чисел (разность)
function getDifference() {
    const num1 = getValue('number1');
    const num2 = getValue('number2');
    result = Calc.subtraction(num1, num2); // перезаписываю объект класса и обращаюсь к нему через класс и статический метод с функцией вычитания
    document.getElementById('out').innerHTML = 'Результат: ' + result; //вывожу результат в новый инпут
}
//функция получения результата умножения чисел (произведение)
function getProduct() {
    const num1 = getValue('number1');
    const num2 = getValue('number2');
    result = Calc.multiplication(num1, num2); // перезаписываю объект класса и обращаюсь к нему через класс и статический метод с функцией умножения
    document.getElementById('out').innerHTML = 'Результат: ' + result; //вывожу результат в новый инпут
}
//функция получения результата деления чисел (частное)
function getQuotient() {
    const num1 = getValue('number1');
    const num2 = getValue('number2');
    result = Calc.division(num1, num2); // перезаписываю объект класса и обращаюсь к нему через класс и статический метод с функцией деления
    document.getElementById('out').innerHTML = 'Результат: ' + result; //вывожу результат в новый инпут
}
