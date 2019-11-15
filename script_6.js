
//On commence par diviser l'ARN en codons de trois lettres.
function divideARN(ARN)
{

	let codons = [];
	
	let current = 0;
	while (current < ARN.length - 1)
	{
		let codon = "" ;
		codon = ARN[current] + ARN[current + 1] + ARN[current + 2]
		codons.push(codon)	;
		current = current + 3;
	}
	return codons ;
}

//on transcrit chaque codons en protéïne grâce à une serie de if.

function transcriptOne(codon)
{
	if (codon == "UCU" || codon == "UCC" || codon == "UCA" || codon == "UCG" || codon == "AGU" || codon == "AGC") 
	{
		return "Serine" ;
	}

	if (codon == "CCU" || codon == "CCC" || codon == "CCA" || codon == "CCG")
	{
		return "Prolin" ;
	}

	if (codon == "UUA" || codon == "UUG")
	{
		return "Leucine";
	}
	
	if (codon == "UUU" || codon == "UUC")
	{
		return "Phenylalanine";	
	}

	if (codon == "CGU" || codon == "CGC" || codon == "CGA" || codon == "CGG" || codon == "AGA" || codon == "AGG") 
	{
		return "Arginine" ;
	}
	
	if (codon == "UAU" || codon == "UAC")
	{
			return "Tyrosine" ;
	}

	return "erreur" ;
}

//Fonction qui transcrit tous les codons.
function transcriptAll(codons)
{
	let result = ""
	for(let index in codons)
	{
		let prot = transcriptOne(codons[index]) ;
		result = result + prot + '-' ;	
	}
		result = result.slice(0,result.length - 2) ;
		return result ;
}

function perform()
{
	console.log("CCGUCGUUGCGCUACAGC donne : ") ;
	codons = divideARN("CCGUCGUUGCGCUACAGC") ;
	console.log(codons) ;
	result = transcriptAll(codons) ;
	console.log(result) ;

	console.log("CCUCGCCGGUACUUCUCG donne : ") ;
	codons = divideARN("CCUCGCCGGUACUUCUCG") ;
	console.log(codons) ;
	result = transcriptAll(codons) ;
	console.log(result) ;
}

perform() ;
