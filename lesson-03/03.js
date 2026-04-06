// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
    if (a > c && a > b) {
        return `${a} is Largest`;
    } else if (b > a && b > c) {
        return `${b} is Largest`;
    } else {
        return `${c} is Largest`;
    }
}
