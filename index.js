let i=1
let num = 10
while(i!==num+1){
    console.log(i);
    i++
}

let i1= 20
while(!(i1===0)){
    console.log(i1);
    i1--
}

let i2 = -1
let num1 = -30
while(!(i2=== num1-1)){
    console.log(i2);
        i2--
}

let num2 = -30
let k = num2
while(k !== 0){
       console.log(k);
        k++
}

//PROGRAM1

let num3 = "534791";
let max = 0;
let min = 0;
let str = "";
for (i = 0; i < num3.length; i++) {
  if (num3[i] > 1) {
    let count = 0;
    for (j = 2; j < num3[i]; j++) {
      if (num3[i] % j == 0) {
        count++;
      }
    }
    if (count == 0) {
      str = str + num3[i];
    }
  }
}

//Program 2

let num4 = "534791";
let max1 = 0;
let min1 = 0;
let str1 = "";
for (i = 0; i < num4.length; i++) {
  if (num4[i] > 1) {
    let count1 = 0;
    for (j = 2; j < num4[i]; j++) {
      if (num4[i] % j == 0) {
        count1++;
      }
    }
    if (count1 == 0) {
      str1 = str1 + num4[i];
    }
  }
}
for(i=0;i<str1.length;i++){
  if(str1[i]>max1){
  max1 = Number(str1[i])
}
}
console.log("Largest prime number :" +max1);

// Program 3

let num5 = "534791";
let max2 = 0;
let min2 = 0;
let str2 = "";
for (i = 0; i < num5.length; i++) {
  if (num5[i] > 1) {
    let count2 = 0;
    for (j = 2; j < num5[i]; j++) {
      if (num5[i] % j == 0) {
        count2++;
      }
    }
    if (count2 == 0) {
      str2 = str2 + num5[i];
    }
  }
}
for(i=0;i<str2.length;i++){
  if(str2[i]>max2){
  max2 = Number(str2[i])
}
else{
  min2 = Number(str2[i])
}
}
let sum = max2+min2
console.log("Sum of largest and smallest prime number :"+sum);

// Program4

let num6 = "534791";
let max3 = 0;
let min3 = 0;
let str3 = "";
for (i = 0; i < num6.length; i++) {
  if (num6[i] > 1) {
    let count3 = 0;
    for (j = 2; j < num6[i]; j++) {
      if (num6[i] % j == 0) {
        count3++;
        str3 = str3 + num6[i];
      }
    }
  }
}
for(i=0;i<str3.length;i++){
    if(str3[i]>max3){
    max3 = Number(str3[i])
  }
}
console.log("Largest non prime number :" +max3);



