
// 1.Write a function calculate that takes three arugments from the user, say num1 , num2, and operation(1==add, 2==subtract, 
// 3==multiply, 4==divide ).Don`t use switch statement or if else statements
 
// 1.add,
// 2.subtract,
// 3.multiply,
// 4.divide 

// write the calc function for all the operations

function cal(x,y) {

    var  add=function(x,y) {
        return x+y;
    }
 var  sub=function(x,y) {
        return x-y;
    }
var  mul=function(x,y) {
        return x*y;
    }
var  div=function(x,y) {
        return x/y;
    }
    return {add,sub,mul,div};

}

function input(){
    var num1=parseInt(prompt('enter num1'));
    var num2=parseInt(prompt('enter num2'));
    var opr=parseInt(prompt('enter operator number'));

    var op={1:cal(num1,num2).add(num1,num2),2:cal(num1,num2).sub(num1,num2),3:cal(num1,num2).mul(num1,num2),4:cal(num1,num2).div(num1,num2)}

    // console.log(cal(num1,num2,op[opr]));
    // console.log(op[opr]);

    
     var ans=op[opr];
    console.log(ans);

}
input();

// 2 . Create a function Named Triangle which takes 3 parameters, say A, B and C denoting the 3 sides of a triangle.
// Use Callback function, create a method to check if the triangle is Equilateral or not.


// Output:
// "true" if the triangle is equilateral and "false" if its not.
    
    
    function equilateral(a,b,c){
    if(a==b&& b==c){
        console.log( 'yes');
}
    else console.log('no');
}

function triangle(){
    var a=parseInt(prompt());
    var b=parseInt(prompt());
    var c=parseInt(prompt());

    equilateral(a,b,c);
}

triangle();

// 3.Given two strings, return true if they are anagrams of one another

// For example: Mary is an anagram of Army
    

function check(st1,st2){
    var flag=0;
    if(st2.length==st1.length){
    for (var i=0;i<st1.length;i++){
        if(!st2.includes(st1[i]))
           {
            flag=1;
            break;}
    }}
    else
        flag=1;
    
    if(flag==1)
        console.log('no');
    else
        console.log('yes');

}

function anagrum(){
    var st1=prompt('enter string1');
    var st2=prompt('enter string2');
    st1=st1.toLowerCase();
    st1=st2.toLowerCase();
    check(st1,st2);
}

anagrum();

// 4. Write a function to find the maximum and minimum elements in an array.
// arr = [10,3,15,-1,9,6]

// output = maxno. : 15
// 			minno. : -1

arr = [10,3,15,-1,9,6];
var l=arr[0],s=[0];
for(var i=0;i<arr.length;i++)
  {
    if(l<arr[i])
      l=arr[i];
    if(s>arr[i])
      s=arr[i];
  }
console.log('largest nu is : '+l+'smallest number is : '+s);

// 5. Write a function to find the maximum and minimum elements in an array.
//     arr = [10,3,15,-1,9,6]
    
//     output = maxno. : 15, minno. : -1

function findMaxMin() {

    let max = () => Math.max(...arr);
    let min = () => Math.min(...arr); 
      
    let arr = [10, 3, 15, -1, 9, 6];
    console.log("maxNo :", max(), "minNo :", min());
}

findMaxMin();
