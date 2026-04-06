// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return `${num1} is Largest`;
    } else if (num2 > num1 && num2 > num3) {
        return `${num2} is Largest`;
    } else {
        return `${num3} is Largest`;
    }
}
