
size = prompt ("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

let res=""
if ( (1 <= size) && (size <= 25)) 
{
	for(let i = 1; i <= size; i++)
	{
		for(let j = 1; j <= size - i; j++) // (size-1) car il faut un espace en moins par rapport à l'étage.
		{
			res = res +	" ";
		}			

		for(let j = 1; j <= i; j++) // Le nombre de "#" est égal à l'étage courant.
		{
			res = res +	"#";
		}
		res = res + "\n"
	}
	console.log(res);
}
else
{
	console.log("il faut choisir un nombre entre 1 et 25");
}
