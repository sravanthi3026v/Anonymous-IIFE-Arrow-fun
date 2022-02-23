//Q.Do the below programs in anonymous function & IIFE
//anonymus function:-
//a.Print odd numbers in an array
let getodd=function(arr){
       let odd=[];
       for(let i in arr){
              if(arr[i]%2!==0){
                     odd.push(arr[i]);
              }
       }
       return odd;
}
console.log(getodd([1,2,3,4,5,6,7,8,9,10]));

//OUTPUT:-[1,3,5,7,9]

//b.Convert all the strings to title caps in a string array
let myName=function(data){
  data=data.toLowerCase().split(" ");
  for(var i=0;i<data.length;i++){
    data[i]=data[i].charAt(0).toUpperCase()+data[i].slice(1);
  }
return data.join(" ");
  }
let name="i am sravanthi";
console.log(myName(name));

//OUTPUT:-I Am Sravanthi

//c.Sum of all numbers in an array
let sumarray=function(arr){
       let sum=0;
       for(let i in arr){
              sum += arr[i];
       }
       return sum;
}
console.log(sumarray([1,2,3,4,5,6,7,8,9,10]));

//OUTPUT:-55

//d.Return all the prime numbers in an array
let prime=function(arr){
  let temp=[];
  for(var i=0;i<arr.length;i++){
    var flag=true;
    for(var j=2;j<arr[i];j++){
      if(arr[i]%j==0){
        flag=false;
        break;
      }
    }
    if(flag==true){
      temp.push(arr[i]);
    }
  }
  return temp.join(" ");
}
console.log(prime([3,4,5,6,7,8,9,10,11,12,13,14,15]));

//OUTPUT:-3 5 7 11 13

//e.Return all the palindromes in an array
let palindrome=function(arr){
  var temp=[];
  for(var i=0;i<arr.length;i++){
    var s=arr[i];
    var flag=true;
    var j=0;
    var k=s.length-1;
    while(j<k){
if(s[j++]==s[k--])
continue;
else{
  flag=false;
  break;
}
}
if(flag==true)
temp.push(arr[i]);
    }
    return temp;
  }
  console.log(palindrome(["car", "racecar", "12321"]));

//OUTPUT:-[ 'racecar', '12321' ]

//f.Return median of two sorted arrays of same size
let median=function(arr1,arr2){
    var arr3=[];
    arr3=arr3.concat(arr1);
    arr3=arr3.concat(arr2);
    arr3.sort(function(a,b){return a-b});
    if(arr3.length%2==0){
        console.log(arr3[arr3.length/2]+arr3[arr3.length/2-1]);
    }
    }([1,3,2],[5,8,7]);

//OUTPUT:-8

//g.Remove duplicates from an array
let removeDuplicates=function(city){
       let unique_city=[new Set(city)];
       return unique_city;
}
console.log(removeDuplicates(["karimnagar","hyd","wrngl","karimnagar","hyd",13,14,13]));

//OUTPUT:-[ Set { 'karimnagar', 'hyd', 'wrngl', 13, 14 } ]

//h.Rotate an array by k times
let rotatearray=function(arr,k){
       var temp=[];
       for(var i=arr.length-k;i<arr.length;i++){
       temp.push(arr[i]);
       }
       for(i=0;i<arr.length-k;i++){
        temp.push(arr[i]);
       }
       return temp.join(" ");
       }
       console.log(rotatearray([1,2,3,4,5,6,7,8,9,10],4));

//OUTPUT:-7 8 9 10 1 2 3 4 5 6

//IIFE:-
//a.Print odd numbers in an array
(function(arr){
       let odd=[];
       for(let i in arr){
              if(arr[i]%2!==0){
                     odd.push(arr[i]);
              }
       }
       console.log(odd);
})([1,2,3,4,5,6,7,8,9,10]);

//OUTPUT:[1,3,5,7,9]

//b.Convert all the strings to title caps in a string array
function Suman_Camel_Case(data) { 
data = data.toLowerCase().split(" "); 
for (let i = 0; i < data.length; i++) { 
data[i] = data[i].charAt(0).toUpperCase() + data[i].slice(1);
}
 return data.join(" ");
} 
let name_1 = "my name is sravanthi"; 
console.log(name_1); 
console.log(Suman_Camel_Case(name_1));

//OUTPUT:-my name is sravanthi
//        My Name Is Sravanthi

//c.Sum of all numbers in an array
(function sum(arr){
       let sum=0;
       for(let i in arr){
              sum += arr[i];
       }
       console.log(sum);
})([1,2,3,4,5,6,7,8,9,10]);

//OUTPUT:-55

//d.Return all the prime numbers in an array
(function prime(arr){
  var temp=[];
  for(var i=0;i<arr.length;i++){
    var flag=true;
    for(var j=2;j<arr[i];j++){
      if(arr[i]%2==0){
        flag=false;
        break;
      }
    }
    if(flag==true){
      temp.push(arr[i]);
    }
  }
    console.log(temp.join(" "));
  })([3,4,5,6,7,8,9]);

//OUTPUT:-3 5 7 9

//e.Return all the palindromes in an array
(function palindrome(arr){
       var temp=[];
       for(i=0;i<arr.length;i++){
       var s=arr[i];
       var flag=true;
       var k=0;
       var j=s.length-1;
       while(k<j){
           if(s[k++]==s[j--])
           continue;
           else{
               flag=false;
               break;
           }
       }
       if(flag==true)
       temp.push(arr[i]);
       }
       console.log(temp);
   })(["car","racecar","12321"]);

//OUTPUT:- [ 'racecar', '12321' ]

//f.Return median of two sorted arrays of same size
(function median(arr1,arr2){
    var arr3=[];
    arr3=arr3.concat(arr1);
    arr3=arr3.concat(arr2);
    arr3.sort(function(a,b){return a-b});
    if(arr3.length%2==0){
        console.log(arr3[arr3.length/2]+arr3[arr3.length/2-1]);
    }
    })([1,3,2],[5,8,7]);

//OUTPUT:-8

//g.Remove duplicates from an array
(function(city){
let unique_city=[new Set(city)];  
console.log(unique_city);
})(["karimnagar","hyd","wrngl","karimnagar","hyd",13,14,13]);

//OUTPUT:-[ Set { 'karimnagar', 'hyd', 'wrngl', 13, 14 } ]

//h.Rotate an array by k times
(function rotate(arr,k){
       var temp=[];
       for(var i=arr.length-k;i<arr.length;i++){
              temp.push(arr[i]);
              }
       for(i=0;i<arr.length-k;i++){
              temp.push(arr[i]);
              }
       console.log(temp.join(" "));
})([1,2,3,4,5,6,7,8,9,10],4);

//OUTPUT:-7 8 9 10 1 2 3 4 5 6

//Q.Do the below programs in arrow functions
//a.Print odd numbers in an array
//code:-
let getodd1=(arr)=>{
  let odd=[];
  for(let i in arr){
      if(arr[i]%2!==0){
          odd.push(arr[i]);
      }
  }
  return odd;
  }
  console.log(getodd1([1,2,3,4,5]));

//OUTPUT:-[ 1, 3, 5 ]

//b.Convert all the strings to title caps in a string array
//code:-
myName=data=> {
  data=data.toLowerCase().split(" ");
  for(var i=0;i<data.length;i++){
    data[i]=data[i].charAt(0).toUpperCase()+data[i].slice(1);
  }
return data.join(" ");
  }
let name1="i am sravanthi";
console.log(myName(name1));

//OUTPUT:-I Am Sravanthi

//c.Sum of all numbers in an array
//code:-
sum=(arr)=>{
  let sum=0;
  for(var i=0;i<arr.length;i++){
    sum +=arr[i];
  }
  return sum;
}
console.log(sum([1,2,3,4,5]));

//OUTPUT:-15

//d.Return all the prime numbers in an array
//code:-
prime=(arr)=>{
  let temp=[];
  for(var i=0;i<arr.length;i++){
    var flag=true;
    for(var j=2;j<arr[i];j++){
      if(arr[i]%j==0){
        flag=false;
        break;
      }
    }
    if(flag==true){
      temp.push(arr[i]);
    }
  }
  return temp.join(" ");
}
console.log(prime([3,4,5,6,7,8,9,10,11,12,13,14,15]));

//OUTPUT:-3 5 7 11 13

//e.Return all the palindromes in an array
//code:-
palindrome=(arr) => {
  var temp=[];
  for(var i=0;i<arr.length;i++){
    var s=arr[i];
    var flag=true;
    var j=0;
    var k=s.length-1;
    while(j<k){
if(s[j++]==s[k--])
continue;
else{
  flag=false;
  break;
}
}
if(flag==true)
temp.push(arr[i]);
    }
    return temp;
  }
  console.log(palindrome(["car", "racecar", "12321"]));

//OUTPUT:-[ 'racecar', '12321' ]
