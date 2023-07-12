// 1.Write a JavaScript program to display the current day and time in the following format.
// Today is : wednesday.
// Current time is : 10 PM : 30 : 38

// code:

function h() {
    const birthday = new Date();
const hours = birthday.getHours();
    return hours;
    
}

function m() {
    const birthday = new Date();
const min = birthday.getMinutes();
    return min;
    
}

function s() {
    const birthday = new Date();
const sec = birthday.getSeconds();
    return sec;
    
}


function time() {
    var dayname={1:"sunday",2:"monday",3:"tuesday",4:"wednesday",5:"thrusday",6:"friday",7:"saturday"};
    var dd=d();
    console.log("Today is :"+dayname[dd+1]);
    
    console.log("Current time is : "+h()+" "+(h()<12?"AM":"PM")+":"+m()+":"+s() );
    
}
// 2.Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// code:

function date() {
    var m=new Date();
    var mm=m.getDate();
    return mm;
    
}

function mon() {
    var m=new Date();
    var mm=m.getMonth();
    return mm;
    
}


function year() {
    var m=new Date();
    var mm=m.getFullYear();
    return mm;
    
}

function dateformat(){

        console.log((mon()+1)+"/"+(date())+"/"+(year()));
}
// 3.WAP to print area and perimeter of rectangle , taking input from the user , using prompt

// code:

function rectengle() {
    var l=parseInt(prompt("Enter the length"));
    var b=parseInt(prompt("Enter the breath"));

    var area=l*b;

    var perimeter =2*(l+b);
    
    console.log("Area is: "+area+" Perimeter is: "+perimeter);
}
// 4.WAP to rotate the string ‘brainmentors in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

// input  = brainmentors

// output = sbrainmentor


// code:

function rev(st) {
    var l=st.length;
    var str = "";
    str += st[l-1];
    for(let i=0;i<st.length-1;i++) 
        str += st[i];

    console.log(str);
}

var st=prompt("Enter the string");
let i = 0;
while(i<5) {
    const timeout = setTimeout(rev(st), 2000);
    
}
// 5.WAP to find out if 1st January will be a Sunday between 2000 and 2030

// code:

for(var i=2000;i<2031;i++){
    var date=new Date(i,0,1,1,1,1,1);
    var day=date.getDay();
    if(day==0)
    console.log(i);
}
