/* scripts/model.js */

/* 
:D Take in text from user 

:D Sanitize Text
:D Remove everything but words
:D Put words in array
:D remove popular words
:D Remove Duplicates
Count Mode
    [word,number of occurrences,word's length]

Views
Use D3.js to Do one of those cool bubble graphs a bubble for every word.
Depending on the occurrence of the work, the larger it is.
    Sorting buttons: Occurrenc, length, mood?, 
*/
var text, words, COMMONWORDS;
COMMONWORDS = ["the", "be", "to", "of", "and", "a", "in", "that", "have", "i", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at", "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what", "so", "up", "out", "if", "about", "who", "get", "which", "go", "me", "when", "make", "can", "like", "time", "no", "just", "him", "know", "take", "people", "into", "year", "your", "good", "some", "could", "them", "see", "other", "than", "then", "now", "look", "only", "come", "its", "over", "think", "also", "back", "after", "use", "two", "how", "our", "work", "first", "well", "way", "even", "new", "want", "because", "any", "these", "give", "day", "most", "us", "is", "was", "are", "were", "says", "said", "has", "had"];


// Sanitize text from user
// Remove Everything but words
// Put Words in Array
function prepareText() {
    text = $('#text').val();
    text = text.toLowerCase().replace(/[^A-z\'\-]/g, " ");
    text = text.replace(/\s+/g, ",");
    words = text.split(",");
    removeCommonWords();
}

// Remove Popular words
function removeCommonWords() {
    var temp, i, j;
    temp = [];
    for (i = 0; i < words.length; i++) {
        for (j = 0; j < COMMONWORDS.length; j++) {
            if (words[i] === COMMONWORDS[j]) {
                words[i] = null;
                break;
            }
        }
        if (words[i]) {
            temp.push(words[i]);
        }
    }
    words = temp;
    removeDuplicates();
}

// Remove and Count Duplicates
// Organized in an Array of [word, number of times]
function removeDuplicates() {
    var i, temp;
    temp = [];
    // Go through each word
    for (i = 0; i < words.length; i++) {
        // If the word is a key in the temp array then increase the value
        // Else add it to the temp array as a key then assign the value to 1
        if (temp[words[i]]) {
            temp[words[i]]++;
        } else {
            temp[words[i]] = 1;
        }
    }
    // Clear out the word array to be reorganized
    words = [];

    // Push every item in temp array to the word array as [word, count]
    var key;
    for (key in temp) {
        if (temp.hasOwnProperty(key)) {
            words.push([ key, temp[key]]);
        }
    }
    sortMode();
}

// Sort Words by Mode
function sortMode() {
    words.sort(function (a, b) {
        // If the 1st words 2nd array item "mode count" is greater
        // then move it left
        if (a[1] > b[1]) {
            return -1;
        }
        if (a[1] < b[1]) {
            return 1;
        }
        return 0;
    });
    console.log("The most common word is " + words[0][0]);
    console.log(words);
}





// Take in Text from user
$('#submit').on('click', prepareText);

