// Fibonacci Series 
let a=0;
let b=1;
for(i=0;i<=10;i++){
    console.log(a);
    let c=a+b;
    a=b;
    b=c;
}

// Armstrong number 

let num=153;
let sum=0;
let temp=num;
while(temp>0){
    let digit=temp%10;
    sum=sum+digit**3;
    temp=Math.floor(temp/10);

}
if(num==sum){
    console.log(num+" is an Armstrong number");
}
else{
    console.log(num+" is not an Armstrong number");
}

// Num is prime or not 

let num1=12;
if(num1%2==0){
    console.log(num1+" is not a prime number");
}
else{
    console.log(num1+" is a prime number");
}

// print all digits of a number 

let number=123456;
while(number>0){
    let digit=number%10;
    console.log(digit);
    number=Math.floor(number/10);
} 

// by using for loop 

let number1=123456;
for(i=0;i<=number1;i++){
    let digit=number1%10;
    console.log(digit);
    number1=Math.floor(number1/10);
}





// if num divisible ny 3 print hello , if num divisble by 5 print world , if num divisible by both 3 and 5 print hello world 

let a1=5;
if(a1%3==0 && a1%5==0){
    console.log("HelloWorld");
}
else if(a1%5==0){
    console.log("World");
}
else if(a1%3==0){
    console.log("Hello");
}
else{
    console.log(a1);
}


// pallindrome letters

let num2=505;
let temp1=num2;
let sum1=0;
while(temp1>0){
    let digit=temp1%10;
    sum1=sum1*10+digit;
    temp1=Math.floor(temp1/10);
}
if(num2==sum1){
    console.log(num2+" is a pallindrome number");
}
else{
    console.log(num2+" is not a pallindrome number");
}

// factorial of number 

let number2=5;
let fact=1;
for(let i=number2;i>0;i--){
    fact=fact*i;

}
console.log(fact);
