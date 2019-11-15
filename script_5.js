const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//Vérifie su tous les livres ont été prêté.
function allRented(books)
{
	let	res = true;
	for (let index in books)
	{
		if  (books[index].rented == 0)
		res = false;	
	}
	return true;
}

//renvoie le livre le plus emprunté.
 function mostRented(books)
{
	let max = 0;
	let book;

	for (let index in books)
	{
		if (books[index].rented > max)	
		{
			max = books[index].rented;
			book = books[index];
		}
	}

	return book; 
}


//renvoie le livre le moins emprunté.
function lessRented(books)
{
	let min = 1000000000000;
	let book;

	for (let index in books)
	{
		if (books[index].rented < min)	
		{
			max = books[index].rented;
			book = books[index];
		}
	}

	return book; 
}

//renvoie le livre ayant l'id indiqué.
function searchBook(id, books)
{
	for(let index in books)
	{
		if (id == books[index].id)
		{
			return books[index];
		}
	}
}	

//supprime le livre ayant l'id indiqué.
function deleteBook(id, books)
{
	let toDelete; 
	for(let index in books)
	{
		if (id == books[index].id)
		{
			toDelete = index ;
		}
	}
	
	books.splice(toDelete,1) ;
	
	return books;
}

function compare(a,b)
{
	if (a.title < b.title)
	{
		return -1;
	}
	
	if (a.title > b.title)
	{
		return 1;
	}

	return 0;
}

//Trie les livre en fonction de leur titre.
function sortBooks(books)
{
	books.sort(compare);
	return books ;
}

function perform()
{
	let book;	
	if (allRented)	
	{
		console.log("Tous les livres ont été prêté au moins une fois");
	}
	else
	{
		console.log("Certains livres n'ont pas été prêté.");
	}
	
	book = mostRented(books) ;
	console.log(`le livre le plus emprunté est ${book.title}`);	
	book = lessRented(books) ;
	console.log(`le livre le moins emprunté est ${book.title}`);	
	book = searchBook("873495",books)
	console.log(`le livre recherché est ${book.title}`);
	let books_2 = deleteBook("133712", books) ;
	books_2.sort(compare);
	console.log(books_2);
}

perform() ;
	
