let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
let result = 1;

//boucle de calcul
for(let count = 1; count <= number; count++)
	{
		result *= count;
	}

console.log(`le résultat est : ${result}`);
		


