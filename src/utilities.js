/*
<script src = "______.js"></script>
	(How you can refrence stuff written from a separate JS file.)
<script>
	(normal HTML code)
</script>

<script src = "js/____.js"></script> (JS file under the js child-folder.)
<script src = "../js/___.js"></script> (".." = go up to parent file, then back to js folder with "js")

javascript files contain ONLY JAVASCRIPT!
*/

function initialize()
	{
	    cartContents = document.getElementById("cart");
		toggleOn = false;
	}
function cartToggle()
	{
		toggleOn = !toggleOn;
		display();
	}
function display()
	{
		if (toggleOn)
			contents = "<hr align = 'right'>" + "on";
		else
			contents = "";
		cartContents.innerHTML = contents;
	}

function getRandomInteger(min, max)
	{
		return parseInt(Math.random()*(max - min + 1)) + min;
	}

/* function getRandomNumber (min, max)
	{
		numberOfOptions = max - min + 1;
		parseInt(Math.random() * numberOfOptions) + min;
	}
 */

function getOrdinalSuffix(number)
	{
		var j = number % 10,
			k = number % 100;
		if (j == 1 && k!= 11)
			return "st";
		if (j == 2 && k!= 12)
			return "nd";
		if (j == 3 && k!= 13)
			return "rd";
		return "th";
	}

	/* 	function getOrdinalSuffix(number)
		{
		lastdigit = number.toString().split('').pop();
		if(lastdigit == 1)
			return "st";
		else if(lastdigit == 2)
			return "nd";
		else if(lastdigit == 3)
			return "rd";
		else
			return "th";
		}
	*/
function round(number, places)
	{
	  return Number(Math.round(number+'e'+places)+'e-'+places);
	}

function delayedText(msg, id, speed)
{
	var sentence = msg;
	var letter = "";
	var textSpeed = speed;
	var nextLetter = 0;
	var sentenceLength = 0;
	var sentenceArray = [];
	var timeRef = false;

	sentenceLength = sentence.length;
	clearInterval(timeRef);
	timeRef = setInterval (function()
	{
		if (sentenceArray.length < sentence.length)
		{
			letter = sentence.charAt(0 + nextLetter);
			nextLetter++;
			sentenceArray.push(letter);
			var finalSentence = sentenceArray.join("");
			document.getElementById(id).innerHTML = finalSentence;
		}
	}
		, speed);
}

function findObjectInArray(array, property, value)
{
    for (var i = 0; i < array.length; i++)
	{
        if (array[i][property] === value)
			/* Triple equal sign for STRICT equality */
			/* Apparently, Brackets are typically used for accessing properties of an Object too */
            return array[i];
	}
}

function randomizeArray(array)
{
	var newArray = [];
	while (array.length > 0)
	{
		var placeHolder = getRandomInteger (0, array.length - 1);
		newArray.push(array[placeHolder]);
		array.splice(placeHolder,1);
	}
	return newArray;
}