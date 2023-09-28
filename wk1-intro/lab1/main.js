//Harlan Ferguson 101133838

//q1
function capWords(string){
    let cap_string = ''
    let capitalize = true
    for(i = 0; i < string.length; i++){
        let curr_char = string.charAt(i)
        if (curr_char === " "){
            cap_string += curr_char;
            capitalize = true;
        }
        else{
            if(capitalize){
                cap_string += curr_char.toUpperCase();
                capitalize = false;
            }
            else{
                cap_string += curr_char;
                capitalize = false;
            }
        }
    }
    return cap_string
}

//q2
function maxInt(intArr){
    let maxVal = intArr[0]
    for(let i = 0; i < intArr.length; i++){
        if (intArr[i] > maxVal){
            maxVal = intArr[i];
        }
    }
    return maxVal;
}

//q3
function moveToFront(string){
    if (string.length < 3){
        return string;
    }
    else{
        var newStr = '';
        var threeChar = '';
        
        for(let i = string.length - 3; i < string.length; i++){
            threeChar += string.charAt(i);
            }
        
        for(let i = 0; i < string.length - 3; i++){
            newStr += string.charAt(i);
        }
    }
    return threeChar + newStr;
}

//q4
function angles(integer){
    if(integer > 180 || integer < 0){
        return console.log("Please use a number between 1 and 180")
    }
    if(integer >= 1 && integer <= 89){
        return console.log("Acute Angle")
    }
    else if(integer == 90){
        return console.log("Right Angle")
    }
    else if(integer >= 91 && integer <= 179){
        return console.log("Obtuse Angle")
    }
    else{
        return console.log("Straight Line")
    }
}

//q5
//this needs sliding window algo
function array_max_sum(array,k){
    if(array.length < k){
        return console.log("Please provide an array that is larger than k")
    }
    var maxSum = 0;
    var windowSum = 0;

    for(var i = 0; i < k; i++){ //get first window
        windowSum += array[i];
    }

    maxSum = windowSum; //intial max

    for(let i = k; i < array.length; i++){ //check rest of array
        windowSum = windowSum - array[i - k] + array[i]; //removes element from front, adds from back to make new window

        if(windowSum > maxSum){
            maxSum = windowSum;
        }
    }
    return maxSum;
}

console.log("Q1")
console.log("Input: I decided to do all five questions")
console.log("Output:")
console.log(capWords("I decided to do all five questions"))
console.log("---------------------")

console.log("Q2")
console.log("Input: [1,5,50,20,15,3]")
console.log("Output:")
console.log(maxInt([1,5,50,20,15,3]))
console.log("---------------------")

console.log("Q3")
console.log("Input: ThisOneTookLongerThanExpected")
console.log("Output:")
console.log(moveToFront("ThisOneTookLongerThanExpected"))
console.log("---------------------")

console.log("Q4")
console.log("Input: 5,90,110,180,3000")
console.log("Output:")
angles(5)
angles(90)
angles(110)
angles(180)
angles(3000)
console.log("---------------------")

console.log("Q5")
console.log("Input: [20,1,1,5,15,5,8] , 3")
console.log("Output:")
console.log(array_max_sum([20,1,1,5,15,5,8] , 3))
console.log("---------------------")