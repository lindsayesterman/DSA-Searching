function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
}

const LIBRARY = [
  {
    deweyNum: "000.13",
    title: "Dictionary",
  },
  {
    deweyNum: "001.13",
    title: "Dictionary2",
  },
  {
    deweyNum: "020.13",
    title: "Dictionary5",
  },
  {
    deweyNum: "300.13",
    title: "Dictionary7",
  },
  {
    deweyNum: "430.13",
    title: "Dictionary9",
  },
  {
    deweyNum: "500.13",
    title: "Dictionary0",
  },
];

function deweyFind(
  deweyNum,
  title,
  library,
  start = 0,
  end = library.length - 1
) {
  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const book = library[index];

  if (parseFloat(book.deweyNum) === deweyNum) {
    if (book.title === title) {
      return index;
    }
    return -1;
  } else if (parseFloat(book.deweyNum) < deweyNum) {
    return deweyFind(deweyNum, title, library, index + 1, end);
  } else if (parseFloat(book.deweyNum) > deweyNum) {
    return deweyFind(deweyNum, title, library, start, index - 1);
  }
}

function maxSales(sharePrices) {
  let maxProfit = 0;
  let previous = 0;
  for (let i = 0; i < sharePrices.length - 1; i++) {
    let currProfit = sharePrices[i + 1] - sharePrices[i];
    if (currProfit >= previous) {
      maxProfit = currProfit;
    }
    previous = maxProfit;
  }
  return maxProfit;
}

function main() {
  let sortedList = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
  console.log("Index is " + binarySearch(sortedList, 8));
  console.log("Index is " + binarySearch(sortedList, 16));
  let sharePrices = [8, 97, 121, 123, 98, 97, 105];
  console.log(maxSales(sharePrices));
}

main();
