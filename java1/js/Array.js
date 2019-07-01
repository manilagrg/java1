//using of array is to give multipal value

var arr = [1, 2, 3, 4, 5, "first", "second", "Third", "fourth"];

console.log(arr[0])//Array value starts with 0,1,2 etc
console.log(arr[3])
console.log(arr[5])
console.log(arr[arr.length - 1])//to check the last value or the second last value us -1 or -2 accourdly
console.log(arr.length)// to check the full lenth of array

console.log("=====================================================")

//to convert arr into loop

for( var i = 0; i < arr.length; i++){
    console.log(i, arr[i])
}



var arr = [10, 11, 12, 13, 14, "Ram", "Hari", "sita"]

console.log(arr[arr.length-1])

for(var a = 0; a < arr.length; a++){
    console.log(a, arr[a])
}

var b = 0;
while( b < arr.length){
    console.log(b, arr[b])
    b++
}

console.log("==========================================================")

//.push is stand for to push some text or some number inside the array 
var newArr = [];

newArr.push(1);
newArr.push("hello");
newArr.push("world");
newArr.push("Ram");
//.unshift is stand for add another value before the original value

newArr.unshift("shyam");
newArr.unshift("sita");

var test = []

for( var a = 1; a <= 50; a++){
    console.log(test.push(a))
}

for( var a = 1; a <= 50; a++){
    test.push(a)
}
console.log(test)


//another method to push directly to 

for(var b = 0; b < 100; b++){

    if(b % 2 == 0){
        test.unshift(b)
    }
}
console.log(test)

var example = []

//This is just an example
for(var h = 1; h <= 50; h++){
    console.log(example.push(h, h * 2))
}
console.log(example)


for(var h = 1; h <= 50; h++){
    console.log(example.push(h))
    if(h % 3 == 0 ){
        console.log("Odd Number")
    }
}