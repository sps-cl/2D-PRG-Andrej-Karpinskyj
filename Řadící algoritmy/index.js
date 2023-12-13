let container = document.getElementById("bubblesort-div");

let max = 30;
document.documentElement.style.setProperty("--max-value", max);
let array = new Array(max);

for (let index = 0; index < array.length; index++) {
    array[index] = Math.round(Math.random() * max);
}
let bubbleSort = new BubbleSortAnim(array, container);
bubbleSort.sortAsc();

let container1 = document.getElementById("insertionsort-div");

let insertionSort = new InsertionSortAnim(array, container1);
insertionSort.sortAsc();
