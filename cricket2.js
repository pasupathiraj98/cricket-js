

var team1=[];
var team2=[];
var count1=0;
var count2=0;
var player1=10;
var player2=10;
var total1;
var total2;
var id1=1;
var id2=11;
let teampl1=[];
let teampl2=[];
var balls1=0;
var balls2=0;
var inscore1=[];
var inscore2=[];






function innings1(){


	if (balls1==60 || player1==0){
		// console.log(total1);
document.getElementById("scoreteam1").value=total1;
   alert("innings ends")

   return;
}
 // if (count1==18 || player1==0){
 // 	document.getElementById("bat1").disabled=true;
 // }
balls1=balls1+1;
var score1=Math.floor(Math.random() *7);
// document.getElementById("bat1").innerHTML=score1;
count1++;
  
  teampl1.push(score1);

team1.push(score1);

let finalscore=0;

finalscore=teampl1.reduce(function(prevalue,curvalue){
	return prevalue+curvalue;
 
},0)


if (count1==6 || score1==0) {
   // alert("OUT");
   player1=player1-1;
 
   document.getElementById(id1).value=finalscore;
   teampl1=[];
   inscore1.push(finalscore);
   console.log(inscore1);
   localStorage.setItem("inscore1",inscore1);

   // console.log(team1);
   id1++;
   count1=0;
}

//console.log(score1);


total1=team1.reduce(function(prevalue,curvalue){
// console.log(total1);

return prevalue+curvalue;

},0)
// console.log(total1);
document.getElementById("scoreteam1").innerHTML=total1;
localStorage.setItem('result1', total1);
}


function innings2(){
	if (balls2>=60 || player2==0){
		document.getElementById("scoreteam2").value=total2;
   alert("innings ends")
   return;
}

balls2=balls2+1;

   var score2=Math.floor(Math.random() *7);
// document.getElementById("bat2").innerHTML=score2;
count2++;


teampl2.push(score2)
let finalscore=0;


finalscore=teampl2.reduce(function(prevalue,curvalue){
	return prevalue+curvalue;

},0)


if (count2==6 || score2==0) {
   // alert("OUT");
   player2=player2-1;
 
   document.getElementById(id2).value=finalscore;
   teampl2=[];
   // console.log(team2); 

inscore2.push(finalscore);
console.log(inscore2);
localStorage.setItem("inscore2",inscore2);
   id2++;
   count2=0;
}
// if(count1==0 && count1>=60){
//  	document.getElementById("bat1").disabled=true;
// }


team2.push(score2);



// console.log(score2);

total2=team2.reduce(function(prevalue,curvalue){


return prevalue+curvalue;

},0)
// console.log(total2);
document.getElementById("scoreteam2").innerText=total2;
localStorage.setItem('result2',total2);

}


function boo(){
       data=({"p":total1,
       	       "m":total2})

   
	window.location.href="result.html";

 }

// let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
	
//    return accumulator + currentValue
// }, 0)
// console.log(sum);



// // function f1()
// // {
// // 	var a=10;
// // 	console.log(a);
// // 	return a;
	
// // }
// // f1();



