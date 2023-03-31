const string = "привет! как дела?";

const vowels = ["а", "е", "и", "ы", "о", "э","я"];

const getVowels = stringFilters => {
let extractedVowels = "";

    for (let i = 0; i < stringFilters.length; i++) {
const currentLetter = stringFilters[i].toLowerCase();

if (vowels.includes(currentLetter)) {
    extractedVowels += currentLetter;
    }
}
return extractedVowels;
}

console.log(getVowels(string));

//2

const workers = [
    { "name" : "John", "salary" : 500 },
    { "name" : "Mike", "salary" : 1300 },
    { "name" : "Linda", "salary" : 1500 }
];
    
    const getWorthyWorkers = (workersArr) => {
            const worthyWorkers = [];

                    for (let i = 0; i < workersArr.length; i++) {
                        const currentWorker = workersArr[i];

                        if (currentWorker.salary > 1000) {
                            worthyWorkers.push(currentWorker.name);
                        }
                    }

            return worthyWorkers;
    };

    console.log(getWorthyWorkers(workers));

    //3

    const path = "/users/download/index.html" 

const isHtml = path => {
        const requiredExt = ".html";
        const pathExt = path.slice(-5);

        if (pathExt== requiredExt) {
            return true  } 
        else {
        return false 
    } 

}

console.log(isHtml(path));

//4

const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => {
    return num % 2 == 0;
}
const filterArray = ( arrayToFilter, filterFn ) => {
const filterArray = [];

arrayToFilter.forEach(num => {
    if (filterFn(num)) {
        filterArray.push(num);
    }
})

return filterArray;
}

console.log(filterArray(mixedArray, isEven));

