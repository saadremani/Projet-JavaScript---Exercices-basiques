function talk()
{
	let answer = prompt("Tu kiffes la life ?");
	return answer ;
}

//Série de fonctions qui testent la phrase entrée par l'utilisateur. 
function question (sentence)
{
	if (sentence[sentence.length - 1] === '?')
	{
		return true ;
	}
	else
	{
		return false;
	}
}

function scream (sentence)
{
	if (sentence == sentence.toUpperCase())
	{
		return true;
	}
	else
	{
		return false;
	}
}

function fortnite (sentence)
{
	if (sentence.indexOf("fortnite") !== -1)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function empty(sentence)
{
	if (sentence == "")
	{
		return true;
	}
	else
	{
		return false ;
	}
}

function bot (sentence)
{
	if (question (sentence))
	{
		return "Ouais Ouais..." ;
	}

	if (scream (sentence))
	{
		return "Pwa, calme-toi..."	;
	}

	if (fortnite (sentence))
	{
		return "on s' fait une partie soum-soum ?";
	}

	if (empty (sentence))
	{
		return "t'es en PLS ?" ;
	}

	return "balek";
}

function perform()
{
	let sentence = talk();
	let answer =	bot(sentence) ;
	console.log(answer) ;
}

perform() ;
