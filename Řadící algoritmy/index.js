let bubbleSortContainer = document.getElementById("bubblesort-div");
let insertionSortContainer = document.getElementById("bubblesort-div2");
let max = 100;
document.documentElement.style.setProperty("--max-value", max);

let array = new Array(max);
let arrayOfColumns = new Array (array.length);

for (let i = 0; i < array.length; i++) {
    array[i] = Math.round(Math.random() * max) + 1;
}

let bubbleSort = new BubbleSortAnim(array, bubbleSortContainer);
let insertionSort = new InsertionSortAnim(array, insertionSortContainer);

bubbleSort.sortAsc();
insertionSort.sortAsc();
