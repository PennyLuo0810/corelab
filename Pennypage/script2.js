
//variable
var myString = "hello this is a string!";
var myNumber = 20;
var myBoolean = false;

//console.log(myString，myNumber,myBoolean);
console.log(myNumber);

// grtting a div via its id:
var myDiv = document.getlementById("wrapper")

console.log(myDiv)
//function
var myFunction = function(){
	   myNumber = myNumber + 1;
	   letterSpacing = letterSpacingValue+1;

	   if (myNumber == true) {
	   //console.log(myNumber)
       myBoolean = false;
       myNumber = myNumber+18;
       //console.log("myBoolean is", myBoolean)
       //myDiv.style.fontSize = myNumber + "px";

	   }else{
            myBoolean = true;
            myNumber =myNumber -8;

            
	   	//console.log(myBoolean,"the myBoolean has been ch")

	   //myBoolean = true;
	   }
       console.log(myNumber)
	   myDiv. style.letterSpacing = myNumber + "px";

}


var function = function(){


      if (myNumber <= 40){

        //keep growing
        myNumber = myNumber + 2;
       
      }else if(myNumber == 40 ){
  

  myNumber = myNumber + 30;

}


      }else if (myNumber == 70) {

     myNumber =20;


      }

myDiv.style.fontSize = myNumber+ "px";


}



myDiv. onclick = myFunction;


// console.log(myNumber - myNumber)


//console.log("hello this is a string!")


