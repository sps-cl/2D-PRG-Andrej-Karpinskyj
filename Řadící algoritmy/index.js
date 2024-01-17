//BubbleSort
let container = document.getElementById("bubblesort-div");

let max = 30;
document.documentElement.style.setProperty("--max-value", max);
let array = new Array(max);

for (let index = 0; index < array.length; index++) {
    array[index] = Math.round(Math.random() * max);
}
let bubbleSort = new BubbleSortAnim(array, container);
bubbleSort.sortAsc();


//InsertionSort
let container1 = document.getElementById("insertionsort-div");

let insertionSort = new InsertionSortAnim(array, container1);
insertionSort.sortAsc();


//ShellSort
let container2 = document.getElementById("shellsort-div");

let shellSort = new ShellSortAnim(array, container2);
shellSort.sortAsc();


//QuickSort
let container3 = document.getElementById("quicksort-div");

let quickSort = new QuickSortAnim(array, container3);
quickSort.sortAsc();


//MergeSort
let container4 = document.getElementById("mergesort-div");

let mergeSort = new MergeSortAnim(array, container4);
mergeSort.sortAsc();


//CountingSort
let container5 = document.getElementById("countingsort-div");

let countingSort = new CountingSortAnim(array, container5);
countingSort.sortAsc();
