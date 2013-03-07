// JavaScript Document
	

//set up variables to store prices of chosen items
var pizza_price=0;
var wing_price=0;
var drink_price=0;
var side_price=0;

onload= init;


function updateCart(){
	/*console.log*/("updateCart"); 
	/*console.log*/(readCookie("pizza_name"));
	if (readCookie("pizza_name")=="cheese"){
			document.getElementById("cart_pizza").innerHTML="cheese pizza";
			document.getElementById("cart_pizza_type").innerHTML="<img src =\"images/pizza1.jpg\" />";
			pizza_price=10;
		/*	document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large1.png\"/>";*/
			document.getElementById("cart_pizza_price").innerHTML="$"+pizza_price;
	}
		else if(readCookie("pizza_name")=="pep"){
			document.getElementById("cart_pizza").innerHTML="pepperoni pizza";
			document.getElementById("cart_pizza_type").innerHTML="<img src =\"images/small2.jpg\" />";
			pizza_price=11.75;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_pizza_price").innerHTML="$"+pizza_price;
		}
		
			else if(readCookie("pizza_name")=="veggie"){
			document.getElementById("cart_pizza").innerHTML="Veggie pizza";
			document.getElementById("cart_pizza_type").innerHTML="<img src =\"images/small4.jpg\" />";
			pizza_price=12.75;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_pizza_price").innerHTML="$"+pizza_price;
		}
		
			else if(readCookie("pizza_name")=="meat"){
			document.getElementById("cart_pizza").innerHTML="Meat Lovers";
			document.getElementById("cart_pizza_type").innerHTML="<img src =\"images/small3.jpg\" />";
			pizza_price=13.75;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_pizza_price").innerHTML="$"+pizza_price;
		}
			
			
			
			
			
				if (readCookie("wing_name")=="Honey Garlic"){
			document.getElementById("cart_wing").innerHTML="Honey Garlic";
			document.getElementById("cart_wing_type").innerHTML="<img src =\"images/wings1.jpg\" />";
			wing_price=6.75;
		/*	document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large1.png\"/>";*/
			document.getElementById("cart_wing_price").innerHTML="$"+wing_price;
	}
		else if(readCookie("wing_name")=="Garlic Parmesan"){
			document.getElementById("cart_wing").innerHTML="Garlic Parmesan";
			document.getElementById("cart_wing_type").innerHTML="<img src =\"images/wings2.jpg\" />";
			wing_price=6.75;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_wing_price").innerHTML="$"+wing_price;
		}
		
			else if(readCookie("wing_name")=="Honey BBQ"){
			document.getElementById("cart_wing").innerHTML="Honey BBQ";
			document.getElementById("cart_wing_type").innerHTML="<img src =\"images/wings3.jpg\" />";
			wing_price=6.75;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_wing_price").innerHTML="$"+wing_price;
		}
		
			else if(readCookie("wing_name")=="Buffalo Ranch"){
			document.getElementById("cart_wing").innerHTML="Buffalo Ranch";
			document.getElementById("cart_wing_type").innerHTML="<img src =\"images/wings4.jpg\" />";
			wing_price=6.75;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_wing_price").innerHTML="$"+wing_price;
		}
			
			
			
	
				if (readCookie("drink_name")=="Cola"){
			document.getElementById("cart_drink").innerHTML="Cola";
			document.getElementById("cart_drink_type").innerHTML="<img src =\"images/soda_small3.jpg\" />";
			drink_price=1;
		/*	document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large1.png\"/>";*/
			document.getElementById("cart_drink_price").innerHTML="$"+drink_price;
	}
		else if(readCookie("drink_name")=="Root Beer"){
			document.getElementById("cart_drink").innerHTML="Root Beer";
			document.getElementById("cart_drink_type").innerHTML="<img src =\"images/soda_small2.jpg\" />";
			drink_price=1;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_drink_price").innerHTML="$"+drink_price;
		}
		
			else if(readCookie("drink_name")=="Ginger Ale"){
			document.getElementById("cart_drink").innerHTML="Ginger Ale";
			document.getElementById("cart_drink_type").innerHTML="<img src =\"images/soda_small.jpg\" />";
			drink_price=1;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_drink_price").innerHTML="$"+drink_price;
		}
		
			else if(readCookie("drink_name")=="Orange Soda"){
			document.getElementById("cart_drink").innerHTML="Orange Soda";
			document.getElementById("cart_drink_type").innerHTML="<img src =\"images/soda_small4.jpg\" />";
			drink_price=1;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_drink_price").innerHTML="$"+drink_price;
		}
		
		
		
		
		


	
				if (readCookie("side_name")=="Macaroni & Cheese"){
			document.getElementById("cart_side").innerHTML="Macaroni & Cheese";
			document.getElementById("cart_side_type").innerHTML="<img src =\"images/side1.jpg\" />";
			side_price=3;
		/*	document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large1.png\"/>";*/
			document.getElementById("cart_side_price").innerHTML="$"+side_price;
	}
		else if(readCookie("side_name")=="BreadSticks"){
			document.getElementById("cart_side").innerHTML="BreadSticks";
			document.getElementById("cart_side_type").innerHTML="<img src =\"images/side2.jpg\" />";
			side_price=5;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_side_price").innerHTML="$"+side_price;
		}
		
			else if(readCookie("side_name")=="Mozzarella Sticks"){
			document.getElementById("cart_side").innerHTML="Mozzarella Sticks";
			document.getElementById("cart_side_type").innerHTML="<img src =\"images/side3.jpg\" />";
			side_price=5.75;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_side_price").innerHTML="$"+side_price;
		}
		
			else if(readCookie("side_name")=="Pepperoni Rolls"){
			document.getElementById("cart_side").innerHTML="Pepperoni Rolls";
			document.getElementById("cart_side_type").innerHTML="<img src =\"images/roll_small.jpg\" />";
			side_price=3.50;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_side_price").innerHTML="$"+side_price;
		}
document.getElementById("cart_total").innerHTML="TOTAL: $"+(pizza_price+wing_price+drink_price+side_price);
}
function sh1(){
	/*console.log*/("sh1");
	
	createCookie("pizza_name","cheese",0);
	updateCart();
}


function sh2(){
	/*console.log*/("sh2");
	createCookie("pizza_name","pep",0);
	updateCart();
}
function sh3(){
	/*console.log*/("sh3");
	createCookie("pizza_name","veggie",0);
	updateCart();
}
function sh4(){
	/*console.log*/("sh4");
	createCookie("pizza_name","meat",0);
	updateCart();
}
function sh5(){
	/*console.log*/("sh5");
	
	createCookie("wing_name","Honey Garlic",0);
	updateCart();
}


function sh6(){
	/*console.log*/("sh6");
	createCookie("wing_name","Garlic Parmesan",0);
	updateCart();
}
function sh7(){
	/*console.log*/("sh7");
	createCookie("wing_name","Honey BBQ",0);
	updateCart();
}
function sh8(){
	/*console.log*/("sh8");
	createCookie("wing_name","Buffalo Ranch",0);
	updateCart();
}



function sh9(){
	/*console.log*/("sh9");
	
	createCookie("drink_name","Cola",0);
	updateCart();
}


function sh10(){
	/*console.log*/("sh10");
	createCookie("drink_name","Root Beer",0);
	updateCart();
}
function sh11(){
	/*console.log*/("sh11");
	createCookie("drink_name","Ginger Ale",0);
	updateCart();
}
function sh12(){
	/*console.log*/("sh12");
	createCookie("drink_name","Orange Soda",0);
	updateCart();
}





function sh13(){
	/*console.log*/("sh13");
	
	createCookie("side_name","Macaroni & Cheese",0);
	updateCart();
}


function sh14(){
	/*console.log*/("sh14");
	createCookie("side_name","BreadSticks",0);
	updateCart();
}
function sh15(){
	/*console.log*/("sh15");
	createCookie("side_name","Mozzarella Sticks",0);
	updateCart();
}
function sh16(){
	/*console.log*/("sh16");
	createCookie("side_name","Pepperoni Rolls",0);
	updateCart();
}








		/*console.log*/("here");

function init(){
	updateCart();
		/*console.log*/("init");
	document.getElementById("button1").onclick=function(){sh1()};
	document.getElementById("button2").onclick=function(){sh2()};
	document.getElementById("button3").onclick=function(){sh3()};
	document.getElementById("button4").onclick=function(){sh4()};
///*console.log*/("");	
	document.getElementById("buttonW1").onclick=function (){sh5()};
	document.getElementById("buttonW2").onclick=function (){sh6()};
	document.getElementById("buttonW3").onclick=function (){sh7()};
	document.getElementById("buttonW4").onclick=function (){sh8()};
	
	document.getElementById("buttonD1").onclick=function (){sh9()};
	document.getElementById("buttonD2").onclick=function (){sh10()};
	document.getElementById("buttonD3").onclick=function (){sh11()};
	document.getElementById("buttonD4").onclick=function (){sh12()};
	
	
	document.getElementById("buttonS1").onclick=function (){sh13()};
	document.getElementById("buttonS2").onclick=function (){sh14()};
	document.getElementById("buttonS3").onclick=function (){sh15()};
	document.getElementById("buttonS4").onclick=function (){sh16()};

}













//WING SECTION
/*
function updateCart2(){
	/*console.log*/("updateCart"); 
	/*console.log*/(readCookie("wing_name"));
	if (readCookie("wing_name")=="garlic"){
			document.getElementById("cart_wing").innerHTML="garlic";
			//document.getElementById("cart_shirt_image").innerHTML="<img src =\"img/shirt_small1.jpg\" />";
			wing_price=1.99;
		/*	document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large1.png\"/>";*/

	}
//this curly closes update cart
//SHIRT SECTION ////////////
//if user chose green shirt...

//try to store a name/value pair on users computer in a COOKIE
	//document.cookie = "user_name = Bernice; expires = Thu, 6 Sept 2012 20:47:11 UTC; path =/"
	
	//document.cookie = "fav_color = blue; expires = Thu, 6 Sept 2012 20:47:11 UTC; path =/"
	//createCookie("shoe_size",8,2)
		///*console.log*/(document.cookie);	

//They have clicked the red shirt so store that. 0 days means the cookie is destroyed when broswer closes.
