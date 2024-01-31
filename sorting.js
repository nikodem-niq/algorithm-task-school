const runAppSorter = (data) => {
    const bubbleSort = (arr) => {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    const quickSort = (arr) => {
        if (arr.length < 2) return arr;
        let pivot = arr[0];
        let left = [];
        let right = [];

        for (let i = 1; i < arr.length; i++) {
            arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
        }
        return quickSort(left).concat(pivot, quickSort(right));
    }

    let start = performance.now();
    const sortedByBubble = bubbleSort([...data]);
    let bubbleSortTime = performance.now() - start;

    start = performance.now();
    const sortedByQuick = quickSort([...data]);
    let quickSortTime = performance.now() - start;
    
    return {sortedByBubble, sortedByQuick, bubbleSortTime, quickSortTime}
}


// Sorting task
const generateData = (size, sortedPercent) => {
    let data = Array.from({length: size}, () => Math.floor(Math.random() * size));
    let sortedIndex = Math.floor(size * sortedPercent / 100);
    let sortedPart = data.slice(0, sortedIndex).sort((a, b) => a - b);
    let randomPart = data.slice(sortedIndex);
    return [...sortedPart, ...randomPart];
}

const dataToSort = generateData(20000, 0);
const { sortedByBubble, bubbleSortTime, sortedByQuick, quickSortTime } = runAppSorter(dataToSort);
// console.log(`Dane do posortowania: ${dataToSort}`)
console.log(`Sortowanie metodą Bubble Sort zajęło: ${bubbleSortTime}ms`);
console.log(`Sortowanie metodą Quick Sort zajęło: ${quickSortTime}ms`);
console.log(`Przewaga Quick Sorta nad Bubble Sortem w tym przypadku to ${(bubbleSortTime/quickSortTime * 100).toFixed(2)}%`);