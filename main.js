
	var arrayNumbers = new Array();
	function AddNumber()
		{
			var newElement = document.createElement("input");
			newElement.setAttribute("type", "text");
			newElement.setAttribute("name", "number2");
			newElement.setAttribute("size", "4");
			newElement.setAttribute("maxlength", "5");
			var last = document.getElementById("ff1");
			last.appendChild(newElement);
		
		}
	
	function checkIt() 
	{
		theGroup = document.Form1.result;
		for (i=0; i< theGroup.length; i++) 
		{
			if (theGroup[i].checked)
			{
			return (theGroup[i].value);
			
			}
		}
	}
	
	function makeCalculation()
		{
		var choice = checkIt();
		var tegInput = document.getElementById("ff1"); 
		var arrNum = tegInput.getElementsByTagName("input");
		for (var i = 0; i<arrNum.length; i++)
			{
				function compare(tf)
				{    
					if ( tf == 0 ) return res = false;
					return res = ( tf / tf ) ? true : false;										
				}
				var k1 = arrNum[i].value;
				var com = compare(k1);
				if (com==false) 
					{
						var answer = "Error input! ";
						var s1 = "Please, reload page and try again";
						break;
					}	
					
			}
		if (com==true)
		{
		switch (choice)
			{
			case "sum":
				var s = 0;
				for (var i = 0; i<arrNum.length; i++)
					{
						var x = arrNum[i].value;					
						x = parseInt(x);
						s=s+x;
					}
				var s1 = s;
				var answer = "The sum of numbers is ";		
				break;
			case "product":
				var s = 1;
				for (var i = 0; i<arrNum.length; i++)
					{
						var x = arrNum[i].value;					
						x = parseInt(x);
						s=s*x;
					}
				var s1 = s;
				var answer = "The product of numbers is ";																				
				break;
			case "avarage":
				var s = 0;
				for (var i = 0; i<arrNum.length; i++)
					{
						var x = arrNum[i].value;					
						x = parseInt(x);
						s=s+x;
					}
				var s1 = s/arrNum.length;
				var answer = "The avarage number is ";
				break;
			case "sort1":
				function min (n1, n2)
				{
					if (n1 == n2) return 0;
					if (n1 > n2)  return 1;
					else
					return -1;
				}
				var s1 = new Array();
				for (var i = 0; i<arrNum.length; i++)
					{
						var x = arrNum[i].value;					
						x = parseInt(x);
						s1.push(x);
					}					
				s1.sort(min);
				
				var answer = "The sort numbers from min to max: ";												
				break;	
			case "sort2":
				function max (n1, n2)
				{
					if (n1 == n2) return 0;
					if (n1 > n2)  return -1;
					else
					return 1;
				}
				var s1 = new Array();	
				for (var i = 0; i<arrNum.length; i++)
					{
						var x = arrNum[i].value;					
						x = parseInt(x);
						s1.push(x);
					}	
				s1.sort(max);
				
				var answer = "The sort numbers from max to min: ";					
				break;					
			
			}
		}						
			var last = document.getElementById("ff2");
			var output = document.createElement("span")
			output.innerHTML = "<h2>"+answer+"<font color = #00FFFF><ins>"+s1+"</ins></h2>";
			last.appendChild(output);
			//alert(s1);
			//document.write(output);
			return s1;
		}
	
	
	
	