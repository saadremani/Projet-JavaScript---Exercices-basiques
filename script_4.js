const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

function display(data)
{
	console.log(data);
}

//fonction qui renvoie tous les entrepreneurs nés dans les années 70.
function filter70 (entrepreneurs)
{
	result = [];

	for(let index in entrepreneurs)
	{
		checkYear = entrepreneurs[index].year % 100 / 10 ;
		checkYear = Math.trunc(checkYear); 	
		if (checkYear === 7)
		{
			result.push(entrepreneurs[index]);
		}
	}
	return result;
}

//fonction qui produit un tableau de string avec les noms et prénom des entrepreneurs.
function toArray(entrepreneurs)
{
	result = []
	for(let index in entrepreneurs)
	{
		let id = entrepreneurs[index].first + ", " +  entrepreneurs[index].last ;
		result.push(id);
	}
	return result;
}

// Affiche l'age qu'aurait eu les différents entrepreneurs.
function displayAge(entrepreneurs)
{
	for(let index in entrepreneurs)
	{
		console.log(`${entrepreneurs[index].first} ${entrepreneurs[index].last} aurait ${2019 - entrepreneurs[index].year} ans aujourd'hui.`);
	}
}

//Trie les entrepreneurs en fonction de nom de fammille.
function sortEntrepreneurs(entrepreneurs)
{
	res = entrepreneurs ;
	function compare (a, b)
	{                
		if (a.last < b.last) 		
		{                    		
			return -1;         		
		}                    		
														
		if(a.last > b.last)  		
		{                    		
			return 1;          		
		}                    		
														
			return 0;          		
	}                      		
		
	res.sort(compare);		

	return res ;
}

function perform()
{
	entrepreneurs70 = filter70(entrepreneurs);
	display (entrepreneurs70);
	entrepreneursArray = toArray(entrepreneurs);
	display (entrepreneursArray);
	displayAge (entrepreneurs);
	sortedEntrepreneurs = sortEntrepreneurs(entrepreneurs);
	display(sortedEntrepreneurs);
	
}
 
perform();

