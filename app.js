// !  Function | Switch Statements | While... Do While Loops

// ? Question #1

// function power(base, exponent) {
// 	var result = 1;
// 	if(exponent == undefined)
// 		exponent = 2;
// 	for(var i=1; i<=exponent; i++) {
// 		result = result * base;
// 	}
// 	return result;
// };
// console.log(power(2,4));



// ? Question #2

// function year(){
//     let leapyear = +prompt("Enter a year");
//    if ((leapyear % 100 === 0 )||(leapyear % 400 === 0)||(leapyear % 4 === 0)){
//     document.write("given year is leap year");
//    }else{
//     document.write("given year is not leap year");
//    }
// };
// year();


  // ? Question # 3

//   function side(side1,side2,side3){

//    var s = (side1 + side2 + side3)/2;

//     let area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)))

//     console.log(area);
//   }
// side(4,7,8);

// ? Question # 4

// function main(sub1,sub2,total,){
      
//        let per =  (sub1-sub2/total*100).toFixed(2);
//        console.log(per,"%");

    
//       let ave = sub1+sub2%2;
    
//         console.log("average",ave,"%");
    
                        
// }
// main(65,50,150);


// ? Question # 5

// function num(){
//     let a = "hashir";
//     let b = a[3];
//     console.log(b)
// }
// num();






// ? Question # 6

// function vowels(){
//     let a  = "elephant in the forest";
//     let b = a.replace(/[aeiou]/gi, " ");
//     console.log(b)
// }
// vowels()


// ? Question # 7

// function state(){
//     let my = "Pleases read this application and give me gratuity";
    
//     switch(my){
//         case "a":
//         case "A":
//         case "e":
//         case "E":
//         case "i":
//         case "I":
//         case "o":
//         case "O":
//         case "u":
//         case "U":
      
//     }
// }
// state();


// ? Question # 8

// let distance = +prompt("enter distance in kilometer");

// function meter(){
//    document.write(distance*1000 ," ", "meter");
// };
// meter();

// function feet(){
//     document.write(distance*3280.8 ," ", "feet")
// };
// feet()

// function inches(){
//     document.write(distance/0.0000254 ," ", "inches")
// };
// inches();

// function cm(){
//     document.write(distance*100000 ," ", "centimeters")
// };
// cm();


// ? Question # 9

// function calculateovertimepay(hoursworked){
//   let regularhours = 40;
//   let overtimerate = 12.00;
//   if(hoursworked<=regularhours){
//     return 0;
//   }else{
//   let overtimehours = hoursworked-regularhours;
//   let overtimepay = overtimehours*overtimerate;
//   return overtimepay;
// }
// };
// console.log("overtime pay = ",calculateovertimepay(45).toFixed(0),"rs");


// ? Question # 10

