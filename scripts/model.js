/* scripts/model.js */

/* 
Take in text from user 

Sanitize Text
Remove everything but words
Put words in array
remove popular words
Remove Duplicates
Count Mode
	[word,number of occurrences,word's length]

Views
Use D3.js to Do one of those cool bubble graphs a bubble for every word.
Depending on the occurrence of the work, the larger it is.
	Sorting buttons: Occurrenc, length, mood?, 
*/
var commonWords = ["the","be","to","of","and","a","in","that","have","i","it","for","not","on","with","he","as","you","do","at","this","but","his","by","from","they","we","say","her","she","or","an","will","my","one","all","would","there","their","what","so","up","out","if","about","who","get","which","go","me","when","make","can","like","time","no","just","him","know","take","people","into","year","your","good","some","could","them","see","other","than","then","now","look","only","come","its","over","think","also","back","after","use","two","how","our","work","first","well","way","even","new","want","because","any","these","give","day","most","us","is","was","are","were","says","said","has","had"];
var words = [];
var text = "";
$('#submit').on('click', prepareText);

function prepareText(){
	text = $('#text').val();
	text = text.toLowerCase().replace(/[^A-z\'-]/g," ");
	text = text.replace(/\s+/g,",");
	words = text.split(",");
	removeCommonWords();
}

function removeCommonWords(){
	var temp = [];
	for(var i = 0; i < words.length; i++){
		for(var j = 0; j < commonWords.length; j++){
			if(words[i] == commonWords[j]){
				words[i] = null;
				break;
			}
		}
		if(words[i]){
			temp.push(words[i]);
		}
	}
	words = temp;
	console.log(words);
}



