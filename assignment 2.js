// 1. Write a JS Function to validate Phone Number 
// Only number and must be 10 digit long



function validatephone(){
    var n=prompt();
    console.log("number is: "+n);
    if((n.length)==10)
    {
        if(isNaN(n)){
            console.log("invalid");}
        else
        { console.log("valid");}
        
    }
    else{
        console.log("invalid");}
}
// 2.Write a JavaScript function that Print Sum of Even Place and Odd Place Digit

// E.g num = 2914
// O/p Even Place (9+4)
// Odd Place 2+1

function sum() {
    var sume=0,sumo=0;

    var n=prompt();
    n='0'+n;
    

    for(var i=1;i<n.length;i++){
        if(i%2==0)
            sumo+=parseInt(n[i]);

        else 
            sume+=parseInt(n[i]);

    }
    console.log("Number is "+n);
    console.log("Even sum= "+sume+" Odd sum= "+sumo);
    
}

//3. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : ‘learn javascript from brain mentors’
// Expected Output : ‘Learn Javascript From Brain Mentors


function string() {

    var st=prompt();
    st+=' ';
     var str="",fullstr="";

    for(var i=0;i<st.length;i++){

        var ch=st[i];

        if(ch!==" "){
           str+=ch;
        }
        else {
            str=str.toLowerCase();
            
            var w=str.charAt(0).toUpperCase();
            str=w+str.slice(1);
            fullstr+=str;
            fullstr+=" ";
            str="";
        }
      
    }
    console.log("string= "+st);
    console.log("output= "+fullstr);
    
}

// 4. Write a JS Function to validate Email Address
// Must contains @
// Must ends with .com/.org/.edu

function validateEmail() {
    var email = prompt("Enter the email address");
    if(email.includes("@") && (email.includes(".com") || email.includes(".org") || email.includes(".edu"))) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

// validateEmail();

// 5. Write a JS Function to find the occurrence of each character in JS
// Input : “brain mentors”
// O/P : b 1
// r 2
// A 1
// I 1
// N 2
// M 1
// E 1
// T 1
// O 1
// S 1

function count() {
    var str = prompt("Enter the string");
    obj = {};
    for(let i in str) {
        if(str[i] === ' ') {
            continue;
        }
        else if(isNaN(obj[str[i]])) {
            obj[str[i]] = 1;
        }
        else {
            obj[str[i]]++;
        }
    }
    console.log(obj);
    for(let i in obj) {
        console.log(i + ":", obj[i]);
    }
}

count();
