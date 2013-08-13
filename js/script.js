// JavaScript Document





function show_only_2(){
/*make section 1 disappear*/
	document.getElementById("section1").style.display="none";
/*make section 2 appear*/
	document.getElementById("section2").style.display="block";
	
	document.getElementById("section3").style.display="none";
	
	document.getElementById("section4").style.display="none";
	
	document.getElementById("section5").style.display="none";
	
	document.getElementById("section6").style.display="none";
	
	document.getElementById("cart").style.display="block";
	
	document.getElementById("section7").style.display="none";
	
	document.getElementById("section8").style.display="none";
}
/*endsthe show_only_2 Function()*/


function show_only_1(){
/*make section 1 appear*/
	document.getElementById("section1").style.display="block";
/*make section 2 disappear*/
	document.getElementById("section2").style.display="none";
	
	document.getElementById("section3").style.display="none";
	
	document.getElementById("section4").style.display="none";
	
	document.getElementById("section5").style.display="none";
	
	document.getElementById("section6").style.display="none";
	
	document.getElementById("cart").style.display="none";
	
	document.getElementById("section7").style.display="none";
	
	document.getElementById("section8").style.display="none";
}
/*endsthe show_only_2 Function()*/

function show_only_3(){
/*make section 1 appear*/
	document.getElementById("section1").style.display="none";
/*make section 2 disappear*/
	document.getElementById("section2").style.display="none";
	
	document.getElementById("section3").style.display="block";
	
	document.getElementById("section4").style.display="none";
	
	document.getElementById("section5").style.display="none";
	
	document.getElementById("section6").style.display="none";
	
	document.getElementById("cart").style.display="block";
	
	document.getElementById("section7").style.display="none";
	
	document.getElementById("section8").style.display="none";
}
/*endsthe show_only_2 Function()*/




function show_only_4(){
/*make section 1 appear*/
	document.getElementById("section1").style.display="none";
/*make section 2 disappear*/
	document.getElementById("section2").style.display="none";
	
	document.getElementById("section3").style.display="none";
	
	document.getElementById("section4").style.display="block";
	
	document.getElementById("section5").style.display="none";
	
	document.getElementById("section6").style.display="none";
	
	document.getElementById("cart").style.display="block";
	
	document.getElementById("section7").style.display="none";
	
	document.getElementById("section8").style.display="none";
}
/*endsthe show_only_2 Function()*/


function show_only_5(){
/*make section 1 appear*/
	document.getElementById("section1").style.display="none";
/*make section 2 disappear*/
	document.getElementById("section2").style.display="none";
	
	document.getElementById("section3").style.display="none";
	
	document.getElementById("section4").style.display="none";
	
	document.getElementById("section5").style.display="block";
	
	document.getElementById("section6").style.display="none";
	
	document.getElementById("cart").style.display="block";
	
	document.getElementById("section7").style.display="none";
	
	document.getElementById("section8").style.display="none";
}
/*endsthe show_only_2 Function()*/

function show_only_6(){
/*make section 1 appear*/
	document.getElementById("section1").style.display="none";
/*make section 2 disappear*/
	document.getElementById("section2").style.display="none";
	
	document.getElementById("section3").style.display="none";
	
	document.getElementById("section4").style.display="none";
	
	document.getElementById("section5").style.display="none";
	
	document.getElementById("section6").style.display="block";
	
	document.getElementById("cart").style.display="block";
	
	document.getElementById("section7").style.display="none";
	
	document.getElementById("section8").style.display="none";
}
/*endsthe show_only_2 Function()*/


function show_only_7(){
/*make section 1 appear*/
	document.getElementById("section1").style.display="none";
/*make section 2 disappear*/
	document.getElementById("section2").style.display="none";
	
	document.getElementById("section3").style.display="none";
	
	document.getElementById("section4").style.display="none";
	
	document.getElementById("section5").style.display="none";
	
	document.getElementById("section6").style.display="none";
	
	document.getElementById("cart").style.display="none";
	
	document.getElementById("section7").style.display="block";
	
	document.getElementById("section8").style.display="none";
}
/*endsthe show_only_2 Function()*/



function show_only_8(){
/*make section 1 appear*/
	document.getElementById("section1").style.display="none";
/*make section 2 disappear*/
	document.getElementById("section2").style.display="none";
	
	document.getElementById("section3").style.display="none";
	
	document.getElementById("section4").style.display="none";
	
	document.getElementById("section5").style.display="none";
	
	document.getElementById("section6").style.display="none";
	
	document.getElementById("cart").style.display="none";
	
	document.getElementById("section7").style.display="none";
	
	document.getElementById("section8").style.display="block";
}
/*endsthe show_only_2 Function()*/





function checkForm(){
	var complete = true;
	document.getElementById("name").innerHTML="";
	document.getElementById("name2").innerHTML="";
	document.getElementById("address_error").innerHTML="";
	document.getElementById("city_error").innerHTML="";
	document.getElementById("tele_error").innerHTML="";
	document.getElementById("credit_error").innerHTML="";
	document.getElementById("id_error").innerHTML="";
	
	
	
	
	
	
	
	if(document.getElementById("user_first_name1").value==""){
	document.getElementById("name").innerHTML=" * Required";
	complete=false;
}
	if(document.getElementById("user_last_name1").value==""){
	document.getElementById("name2").innerHTML=" * Required";
	complete=false;
}
	if(document.getElementById("address").value==""){
	document.getElementById("address_error").innerHTML=" * Required";
	complete=false;
}
	if(document.getElementById("city").value==""){
	document.getElementById("city_error").innerHTML=" * Required";
	complete=false;
	
}
	if(document.getElementById("user_tele_name1").value==""){
	document.getElementById("tele_error").innerHTML=" * Required";
	complete=false;
	
}

	if(document.getElementById("cardNumber").value==""){
	document.getElementById("credit_error").innerHTML=" * Required";
	complete=false;
	
}

	if(document.getElementById("Expires").value==""){
	document.getElementById("year_error").innerHTML=" * Required";
	complete=false;
	
}
	if(document.getElementById("IDNumber").value==""){
	document.getElementById("id_error").innerHTML=" * Required";
	complete=false;
	
}
return complete;	
}









function checkForm2(){
	var complete = true;
	document.getElementById("one_error").innerHTML="";
	document.getElementById("two_error").innerHTML="";
	document.getElementById("three_error").innerHTML="";
	document.getElementById("four_error").innerHTML="";
	
	
	
	
	
	if(document.getElementById("user_first_name27").value==""){
	document.getElementById("one_error").innerHTML=" * Required";
	complete=false;
}

if(document.getElementById("user_first_name2").value==""){
	document.getElementById("two_error").innerHTML=" * Required";
	
	complete=false;
}

if(document.getElementById("user_email").value==""){
	document.getElementById("three_error").innerHTML=" * Required";
	complete=false;
}
if(document.getElementById("user_comments2").value==""){
	document.getElementById("four_error").innerHTML=" * Required";
	complete=false;
}
if(complete){
alert('Thank you for your feedback.  We will be in touch soon.');
}
return complete;
}