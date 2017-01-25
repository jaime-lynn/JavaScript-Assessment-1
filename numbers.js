//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

function sum(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += Number(arguments[i]);
    }
    return sum;
}
//2. write a loop that will log only numbers divisible by 3 between 20 - 100
function divisibleBy3(begin, end){
    for(var i = begin; i <= end; i++){
        if(i % 3 == 0) {
            console.log(i);
        }
    }
}


//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 

function scoreAverage(arr) {
    var total = 0;
    for(var i = 0; i < arr.length; i++){
        total += arr[i];
    }
    var avg = total / arr.length;
    return avg;
}