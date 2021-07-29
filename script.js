// 1
function count(arr) {
    for (let i = 0;i<arr.length;i++) {
        if (typeof arr[i] !== 'number') {
            return 'Error, tipe data harus berupa number'
        } else {
            let count = 0;
            for (let i = 0;i<arr.length;i++) {
                count += arr[i];
            }
            return count;
        }
    }
} 

// 2
function reverse(arr) {
    for (let i = 0;i<arr.length;i++) {
        if (typeof arr[i] !== 'number') {
            return 'Error, tipe data harus number'
        }
    }
    let array = [];
    for (let i = 0; i<arr.length;i++) {
        let arrString = arr[i].toString();
        // console.log(typeof arrString);
        let reverseArray = ''
        for(let j=arrString.length - 1; j>= 0; j--) {
            reverseArray += arrString[j];
        }
        array.unshift(reverseArray * 1)
    }
    return array;
}

// console.log(reverse([12,23,34, 'Ihsan']))

// 3
function unique (arr) {
    const result = [];
    for(let i=0;i<arr.length;i++) {
        let flag = false;
        for(let j=0;j<result.length;j++) {
            if (arr[i] === result[j]) {
                flag = true;
            }
        }
        if (!flag) result.push(arr[i])
    }
    return result;
}


// 4
function jajanBoba(uang) {
    const listBoba = [
        ['Xing Fu Tang', 38000], 
        ['OneZo', 53500],
        ['KOI The', 36000],
        ['Chatime', 25000],
        ['Kokumi', 42000],
        ['Bubble Station Milk', 13000]
    ]
    console.log(`David memulai jajan dengan uang ${uang} rupiah`);
    for (let i =0;i<listBoba.length;i++) {
        if(uang - listBoba[i][1] >= 0) {
            console.log(`Dengan uang jajan ${uang}, cukup beli ${listBoba[i][0]},
            setelah membeli ${listBoba[i][0]} uangnya berkurang ${listBoba[i][1]}
            `);
            uang -= listBoba[i][1];
            console.log(`Sisa uang ${uang} `)
        } else {
            console.log(`Dengan uang sisa ${uang}, tidak cukup beli ${listBoba[i][0]}`)
        }
    }
    console.log(`David pulang dengan sisa uang ${uang}`)
}

// Bonus
// 5
function searchSameArray(arr1, arr2) {
    let sameArray = [];
    for (let i=0; i < arr1.length; i++) {
        let isSame = false;
        for (let j=0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                isSame = true;
            }
        }
        if (isSame) {
            sameArray.push(arr1[i]);
        }
    }
    return sameArray;
}
