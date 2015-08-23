
		function getRandomColor() {
			var letters = '0123456789ABCDEF',split('');
			var color = '#';
			
			for(var i = 0;i < 6; i++)
			{
				color+=letters[Math.round(Math.random()*15)];
			}
			return color;
		
		}
		
		alert(getRandomColor());
		
		
		var createdTime; var clickedTime; var reactionTime;
		
		makeAgain();
		
		//x=Math.floor();
		
		//alert(x);
		
			document.getElementById("numberOne").onclick = function(){				
				this.style.display = "none";
				clickedTime=Date.now();
				reactionTime=(clickedTime-createdTime)/1000;
				document.getElementById("rtime").innerHTML=reactionTime;
				makeAgain();
				}
		
		function makeAgain(){
			var x=Math.random();
			
			x=x*5000;
			
			setTimeout(function(){
			
			document.getElementById("box").style.backgroundColor=getRandomColor();
			
			createdTime=Date.now();
			document.getElementById("numberOne").style.display="block";
			},x);
	}
