var rate,bill,tip;
function myfunc()
{
	rate=document.getElementById("service").value;
	bill=document.getElementById('bill').value;
	if((bill>=100||bill<=10000)&&(rate>=1||rate<=10))
		{fun2();}
	else if(bill<100 || bill>10000)
		{alert("Your bill should be between 100-10000");}
	else if(v<1||v>10)
		{alert("Rating should be between 1 and 10");}
	
};  
function fun2()
{
	if(rate<=5)
      {tip=(1/10)*bill;}
    else
      {tip=(2/10)*bill;}
document.getElementById("heading").innerHTML="Your Tip Is "+tip;
};