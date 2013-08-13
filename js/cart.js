// JavaScript Document
	

//set up variables to store prices of chosen items
var pizza_price=0;
var wing_price=0;
var drink_price=0;
var side_price=0;
var crust_price=0;
var size_price=0;
var toppings_price=0;
var veggies_price=0;
var cheese_price=0;
var sauce_price=0;
onload= init;
function init(){
	
	/*updateCart();
		console.log("init");="checkpoint 1"*/
	document.getElementById("button1").onclick=function(){sh1()};
	document.getElementById("button2").onclick=function(){sh2()};
	document.getElementById("button3").onclick=function(){sh3()};
	document.getElementById("button4").onclick=function(){sh4()};
/*console.log("");	*/
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
	
	
	
	
	
	document.getElementById("buttonC1").onclick=function (){sh17()};
	document.getElementById("buttonC2").onclick=function (){sh18()};
	document.getElementById("buttonC3").onclick=function (){sh19()};
	document.getElementById("buttonC4").onclick=function (){sh20()};
	
	
	document.getElementById("buttonX1").onclick=function (){sh21()};
	document.getElementById("buttonX2").onclick=function (){sh22()};
	document.getElementById("buttonX3").onclick=function (){sh23()};
	document.getElementById("buttonX4").onclick=function (){sh24()};




	document.getElementById("buttonT1").onclick=function (){sh25()};
	document.getElementById("buttonT2").onclick=function (){sh26()};
	document.getElementById("buttonT3").onclick=function (){sh27()};
	document.getElementById("buttonT4").onclick=function (){sh28()};
	
	
	document.getElementById("buttonT5").onclick=function (){sh29()};
	document.getElementById("buttonT6").onclick=function (){sh30()};
	document.getElementById("buttonT7").onclick=function (){sh31()};
	document.getElementById("buttonT8").onclick=function (){sh32()};
	document.getElementById("buttonT9").onclick=function (){sh33()};
	
	
	
	
	
	
	document.getElementById("buttonV1").onclick=function (){sh34()};
	document.getElementById("buttonV2").onclick=function (){sh35()};
	document.getElementById("buttonV3").onclick=function (){sh36()};
	document.getElementById("buttonV4").onclick=function (){sh37()};
	
	
	document.getElementById("buttonV5").onclick=function (){sh38()};
	document.getElementById("buttonV6").onclick=function (){sh39()};
	document.getElementById("buttonV7").onclick=function (){sh40()};
	document.getElementById("buttonV8").onclick=function (){sh41()};
	document.getElementById("buttonV9").onclick=function (){sh42()};
	
	document.getElementById("buttonE1").onclick=function (){sh43()};
	document.getElementById("buttonE2").onclick=function (){sh44()};
	document.getElementById("buttonE3").onclick=function (){sh45()};
	
	document.getElementById("buttonM1").onclick=function (){sh46()};
	document.getElementById("buttonM2").onclick=function (){sh47()};
	document.getElementById("buttonM3").onclick=function (){sh48()};

}




function updateCart(){
	/*console.log("updateCart");*/ 
	/*console.log(readCookie("pizza_name"));*/
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
			
			
			
			
		

				if (readCookie("crust_name")=="tossed"){
			document.getElementById("cart_pizza2").innerHTML="Hand-Tossed";
			
			crust_price=2;
		/*	document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large1.png\"/>";*/
			document.getElementById("cart_crust_price").innerHTML="$"+crust_price;
	}
		else if(readCookie("crust_name")=="pan"){
			document.getElementById("cart_pizza2").innerHTML="Pan Pizza";
			
			crust_price=3;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_crust_price").innerHTML="$"+crust_price;
		}
		
			else if(readCookie("crust_name")=="stuffed"){
			document.getElementById("cart_pizza2").innerHTML="Stuffed Crust";
			
			crust_price=4;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_crust_price").innerHTML="$"+crust_price;
		}
		
			else if(readCookie("crust_name")=="thin"){
			document.getElementById("cart_pizza2").innerHTML="Thin Crust";
			
			crust_price=2;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_crust_price").innerHTML="$"+crust_price;
		}
			
			
			
			
			
			
			
			
			
			
						if (readCookie("size_name")=="Small 12"){
			document.getElementById("cart_pizza3").innerHTML="Small 12";
			
			size_price=1;
		/*	document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large1.png\"/>";*/
			document.getElementById("cart_size_price").innerHTML="$"+size_price;
	}
		else if(readCookie("size_name")=="Medium 14"){
			document.getElementById("cart_pizza3").innerHTML="Medium 14";
			
			size_price=2;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_size_price").innerHTML="$"+size_price;
		}
		
			else if(readCookie("size_name")=="Large 18"){
			document.getElementById("cart_pizza3").innerHTML="Large 18";
			
			size_price=3;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_size_price").innerHTML="$"+size_price;
		}
		
			else if(readCookie("size_name")=="Extra Large 24"){
			document.getElementById("cart_pizza3").innerHTML="Extra Large 24";
			
			size_price=4;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_size_price").innerHTML="$"+size_price;
		}
			
			
			
			
			
			
			
			
						
						if (readCookie("toppings_name")=="Pepperoni"){
			document.getElementById("cart_pizza4").innerHTML="Pepperoni";
			
			toppings_price=1;
		/*	document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large1.png\"/>";*/
			document.getElementById("cart_toppings_price").innerHTML="$"+toppings_price;
	}
		else if(readCookie("toppings_name")=="Ham"){
			document.getElementById("cart_pizza4").innerHTML="Ham";
			
			toppings_price=2;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_toppings_price").innerHTML="$"+toppings_price;
		}
		
			else if(readCookie("toppings_name")=="Pork"){
			document.getElementById("cart_pizza4").innerHTML="Pork";
			
			toppings_price=2;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_toppings_price").innerHTML="$"+toppings_price;
		}
		
			else if(readCookie("toppings_name")=="Beef"){
			document.getElementById("cart_pizza4").innerHTML="Beef";
			
			toppings_price=2;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_toppings_price").innerHTML="$"+toppings_price;
		}
			
				else if(readCookie("toppings_name")=="Italian Sausage"){
			document.getElementById("cart_pizza4").innerHTML="Italian Sausage";
			
			toppings_price=2;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_toppings_price").innerHTML="$"+toppings_price;
		}
			
					else if(readCookie("toppings_name")=="Bacon"){
			document.getElementById("cart_pizza4").innerHTML="Bacon";
			
			toppings_price=2;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_toppings_price").innerHTML="$"+toppings_price;
		}
		
					else if(readCookie("toppings_name")=="Anchovies"){
			document.getElementById("cart_pizza4").innerHTML="Anchovies";
			
			toppings_price=3;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_toppings_price").innerHTML="$"+toppings_price;
		}
		
		
					else if(readCookie("toppings_name")=="Chicken"){
			document.getElementById("cart_pizza4").innerHTML="Chicken";
			
			toppings_price=3;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_toppings_price").innerHTML="$"+toppings_price;
		}
		
				else if(readCookie("toppings_name")=="None"){
			document.getElementById("cart_pizza4").innerHTML="None";
			
			toppings_price=0;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_toppings_price").innerHTML="$"+toppings_price;
		}
			
		
		
			
			
			
			
			
			
		
		
		
		
		
		
								
						if (readCookie("veggies_name")=="Mushrooms"){
			document.getElementById("cart_pizza5").innerHTML="Mushrooms";
			
			veggies_price=1;
		/*	document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large1.png\"/>";*/
			document.getElementById("cart_veggies_price").innerHTML="$"+veggies_price;
	}
		else if(readCookie("veggies_name")=="Green Peppers"){
			document.getElementById("cart_pizza5").innerHTML="Green Peppers";
			
			veggies_price=1;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_veggies_price").innerHTML="$"+veggies_price;
		}
		
			else if(readCookie("veggies_name")=="Onions"){
			document.getElementById("cart_pizza5").innerHTML="Onions";
			
			veggies_price=1;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_veggies_price").innerHTML="$"+veggies_price;
		}

		
			else if(readCookie("veggies_name")=="Black Olives"){
			document.getElementById("cart_pizza5").innerHTML="Black Olives";
			
			veggies_price=1;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_veggies_price").innerHTML="$"+veggies_price;
		}
			
				else if(readCookie("veggies_name")=="Diced Tomatoes"){
			document.getElementById("cart_pizza5").innerHTML="Diced Tomatoes";
			
			veggies_price=2;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_veggies_price").innerHTML="$"+veggies_price;
		}
			
					else if(readCookie("veggies_name")=="Jalapenos"){
			document.getElementById("cart_pizza5").innerHTML="Jalapenos";
			
			veggies_price=2;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_veggies_price").innerHTML="$"+veggies_price;
		}
		
					else if(readCookie("veggies_name")=="Pineapple"){
			document.getElementById("cart_pizza5").innerHTML="Pineapple";
			
			veggies_price=2;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_veggies_price").innerHTML="$"+veggies_price;
		}
		
		
					else if(readCookie("veggies_name")=="Banana Peppers"){
			document.getElementById("cart_pizza5").innerHTML="Banana Peppers";
			
			veggies_price=1;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_veggies_price").innerHTML="$"+veggies_price;
		}
					else if(readCookie("veggies_name")=="None"){
			document.getElementById("cart_pizza5").innerHTML="None";
			
			veggies_price=0;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_veggies_price").innerHTML="$"+veggies_price;
		}
			
		
		
		
		
		
					
						if (readCookie("cheese_name")=="Regular"){
			document.getElementById("cart_pizza7").innerHTML="Regular";
			
			cheese_price=1;
		/*	document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large1.png\"/>";*/
			document.getElementById("cart_cheese_price").innerHTML="$"+cheese_price;
	}
		else if(readCookie("cheese_name")=="Extra"){
			document.getElementById("cart_pizza7").innerHTML="Extra";
			
			cheese_price=2;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_cheese_price").innerHTML="$"+cheese_price;
		}
		
			else if(readCookie("cheese_name")=="None"){
			document.getElementById("cart_pizza7").innerHTML="None";
			
			cheese_price=0;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_cheese_price").innerHTML="$"+cheese_price;
		}
		
		
		
		
		
		
					if (readCookie("sauce_name")=="Regular"){
			document.getElementById("cart_pizza9").innerHTML="Regular";
			
			sauce_price=1;
		/*	document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large1.png\"/>";*/
			document.getElementById("cart_sauce_price").innerHTML="$"+sauce_price;
	}
		else if(readCookie("sauce_name")=="Extra"){
			document.getElementById("cart_pizza9").innerHTML="Extra";
			
			sauce_price=2;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_sauce_price").innerHTML="$"+sauce_price;
		}
		
			else if(readCookie("sauce_name")=="None"){
			document.getElementById("cart_pizza9").innerHTML="None";
			
			sauce_price=0;
			//document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
			document.getElementById("cart_sauce_price").innerHTML="$"+sauce_price;
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
document.getElementById("cart_total").innerHTML="TOTAL: $"+(pizza_price+wing_price+drink_price+side_price+crust_price+size_price+toppings_price+veggies_price+cheese_price);
}
function sh1(){
	/*console.log("sh1");*/
	
	createCookie("pizza_name","cheese",0);
	updateCart();
}


function sh2(){
	/*console.log("sh2");*/
	createCookie("pizza_name","pep",0);
	updateCart();
}
function sh3(){
	/*console.log("sh3");*/
	createCookie("pizza_name","veggie",0);
	updateCart();
}
function sh4(){
	/*console.log("sh4");*/
	createCookie("pizza_name","meat",0);
	updateCart();
}
function sh5(){
	/*console.log("sh5");*/
	
	createCookie("wing_name","Honey Garlic",0);
	updateCart();
}


function sh6(){
	/*console.log("sh6");*/
	createCookie("wing_name","Garlic Parmesan",0);
	updateCart();
}
function sh7(){
	/*console.log("sh7");*/
	createCookie("wing_name","Honey BBQ",0);
	updateCart();
}
function sh8(){
	/*console.log("sh8");*/
	createCookie("wing_name","Buffalo Ranch",0);
	updateCart();
}



function sh9(){
	/*console.log("sh9");*/
	
	createCookie("drink_name","Cola",0);
	updateCart();
}


function sh10(){
	/*console.log("sh10");*/
	createCookie("drink_name","Root Beer",0);
	updateCart();
}
function sh11(){
	/*console.log("sh11");*/
	createCookie("drink_name","Ginger Ale",0);
	updateCart();
}
function sh12(){
	/*console.log("sh12");*/
	createCookie("drink_name","Orange Soda",0);
	updateCart();
}





function sh13(){
	/*console.log("sh13");*/
	
	createCookie("side_name","Macaroni & Cheese",0);
	updateCart();
}


function sh14(){
	/*console.log("sh14");*/
	createCookie("side_name","BreadSticks",0);
	updateCart();
}
function sh15(){
	/*console.log("sh15");*/
	createCookie("side_name","Mozzarella Sticks",0);
	updateCart();
}
function sh16(){
	/*console.log("sh16");*/
	createCookie("side_name","Pepperoni Rolls",0);
	updateCart();
}







////////////THIS STARTS THE CUSTOM PIZZA SECTION






function sh17(){
	/*console.log("sh17");*/
	

	createCookie("crust_name","tossed",0);
	updateCart();
}


function sh18(){
	/*console.log("sh18");*/
	createCookie("crust_name","pan",0);
	updateCart();
}
function sh19(){
	/*console.log("sh19");*/
	createCookie("crust_name","stuffed",0);
	updateCart();
}
function sh20(){
	/*console.log("sh20");*/
	createCookie("crust_name","thin",0);
	updateCart();
}












function sh21(){
	/*console.log("sh21");*/
	
	createCookie("size_name","Small 12",0);
	updateCart();
}


function sh22(){
	/*console.log("sh22");*/
	createCookie("size_name","Medium 14",0);
	updateCart();
}
function sh23(){
	/*console.log("sh23");*/
	createCookie("size_name","Large 18",0);
	updateCart();
}
function sh24(){
	/*console.log("sh24");*/
	createCookie("size_name","Extra Large 24",0);
	updateCart();
}






function sh25(){
	/*console.log("sh25");*/
	
	createCookie("toppings_name","Pepperoni",0);
	updateCart();
}


function sh26(){
	/*console.log("sh26");*/
	createCookie("toppings_name","Ham",0);
	updateCart();
}
function sh27(){
	/*console.log("sh27");*/
	createCookie("toppings_name","Pork",0);
	updateCart();
}
function sh28(){
	/*console.log("sh28");*/
	createCookie("toppings_name","Beef",0);
	updateCart();
}
function sh29(){
	/*console.log("sh29");*/
	
	createCookie("toppings_name","Italian Sausage",0);
	updateCart();
}


function sh30(){
	/*console.log("sh30");*/
	createCookie("toppings_name","Bacon",0);
	updateCart();
}
function sh31(){
	/*console.log("sh31");*/
	createCookie("toppings_name","Anchovies",0);
	updateCart();
}
function sh32(){
	/*console.log("sh32");*/
	createCookie("toppings_name","Chicken",0);
	updateCart();
}
function sh33(){
	/*console.log("sh33");*/
	createCookie("toppings_name","None",0);
	updateCart();
}










function sh34(){
	/*console.log("sh34");*/
	
	createCookie("veggies_name","Mushrooms",0);
	updateCart();
}


function sh35(){
	/*console.log("sh35");*/
	createCookie("veggies_name","Green Peppers",0);
	updateCart();
}
function sh36(){
	/*console.log("sh36");*/
	createCookie("veggies_name","Onions",0);
	updateCart();
}
function sh37(){
	/*console.log("sh37");*/
	createCookie("veggies_name","Black Olives",0);
	updateCart();
}
function sh38(){
	/*console.log("sh38");*/
	
	createCookie("veggies_name","Diced Tomatoes",0);
	updateCart();
}


function sh39(){
	/*console.log("sh39");*/
	createCookie("veggies_name","Jalapenos",0);
	updateCart();
}
function sh40(){
	/*console.log("sh40");*/
	createCookie("veggies_name","Pineapple",0);
	updateCart();
}
function sh41(){
	/*console.log("sh41");*/
	createCookie("veggies_name","Banana Peppers",0);
	updateCart();
}
function sh42(){
	/*console.log("sh42");*/
	createCookie("veggies_name","None",0);
	updateCart();
}



function sh43(){
	/*console.log("sh43");*/
	createCookie("cheese_name","Regular",0);
	updateCart();
}
function sh44(){
	/*console.log("sh44");*/
	createCookie("cheese_name","Extra",0);
	updateCart();
}
function sh45(){
	/*console.log("sh45");*/
	createCookie("cheese_name","None",0);
	updateCart();
}




function sh46(){
	/*console.log("sh46");*/
	createCookie("sauce_name","Regular",0);
	updateCart();
}
function sh47(){
	/*console.log("sh47");*/
	createCookie("sauce_name","Extra",0);
	updateCart();
}
function sh48(){
	/*console.log("sh48");*/
	createCookie("sauce_name","None",0);
	updateCart();
}




		/*console.log("here");*/












//WING SECTION
/*
function updateCart2(){
	/*console.log("updateCart"); */
	/*console.log(readCookie("wing_name"));
	if (readCookie("wing_name")=="garlic"){
			document.getElementById("cart_wing").innerHTML="garlic";
			//document.getElementById("cart_shirt_image").innerHTML="<img src =\"img/shirt_small1.jpg\" />";
			wing_price=1.99;*/
		/*	document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large1.png\"/>";

	}*/
//this curly closes update cart
//SHIRT SECTION ////////////
//if user chose green shirt...

//try to store a name/value pair on users computer in a COOKIE
	//document.cookie = "user_name = Bernice; expires = Thu, 6 Sept 2012 20:47:11 UTC; path =/"
	
	//document.cookie = "fav_color = blue; expires = Thu, 6 Sept 2012 20:47:11 UTC; path =/"
	//createCookie("shoe_size",8,2)
		///*console.log*/(document.cookie);	

//They have clicked the red shirt so store that. 0 days means the cookie is destroyed when broswer closes.
