// 1. Find Occurance of a target value in given array;
// arr= [19, 22, 18, 19, 16, 18, 19, 21, 24];
// target = 19;

arr.filter(e=>e==target).length

// 2 . Reverse a given string using reverse() method 
// input = "BrainMentors"
// output = "srotnemniarB"

var output=input.split("").reverse().join("");

// 3. Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
// Count of vowels in string;
// ex:- str = "brainmentors"
// 		output: count = 4

var count=str.filter((e)=>(e=='a'||e=='e'||e=='i'||e=='o'||e=='u'))
count.length


// 4. Write a function to find the sum of all elements in an array.
// ex:- arr = [1,2,3,4,5];

array.reduce((acc,e)=>acc+e,0)



// 5.Write a function to reverse the order of elements in an array.
// don't Use reverse() Method 
// ex:- var arr = ['a','b','c','d','e','f']
			
// 		output = ['f','e','d','c','b','a']

var reverse=arr.reduceRight((acc,e)=>{
    
        acc.push(e);
    return acc;
},[])
reverse;

// 6. Write a function to remove a specific element from an array.

// 	arr = [1,2,3,4,5];
// 	remove = 3

// 	output :- [1,2,4,5]

console.log(arr.filter(e=>e!=remove))




// 7. Write a function to find the second largest number in an array.

// ex:- var arr = [12,4,6,9,2,15,3,9];
		
// 		output second largest : 12

var arr= [12,4,6,9,2,15,3,9];
var a=arr.filter((item,index)=>arr.indexOf(item)===index);
a=a.sort((f,s)=>s-f)
console.log(a[1])


// 8.Write a function to rotate an array by a given number of steps to the right.

// ex:- arr = [1,2,3,4,5];
// 		step = 2;

//  output = [5,4,1,2,3]

function rotateArray(a){
    var steps=2;
    return (a.splice(a.length-steps,steps)).concat(a);
}
console.log(rotateArray(arr));


// 9.Write a function to find the intersection of two arrays (common elements between the two arrays).

// ex:- arr1 = [2,4,1,7,4,2] , arr2 = [5,1,4,7,3,1];

// output = [1,4,7]

var commonarr=arr1.filter(e=>  arr2.indexOf(e)!=-1)
commonarr;

// 10.Write a function to remove duplicate elements from an array while preserving the original order.
// 	ex:- arr = [1,2,5,2,5,1,6,7,7]

// 		output:- [1,2,5,6,7]

var duparr=arr.filter((item,
        index) => arr.indexOf(item) === index);
duparr;
