/*  The Challenge
This programming challenge is a classic interview question for software engineers: 
given a string, find the longest sub-string that contains, at most, two characters.

Sample Inputs
abbccc
abcabcabcabccc
qwertyytrewq
Sample Outputs
bbccc
bccc
tyyt

Also found at http://www.reddit.com/r/dailyprogrammer/comments/1g0tw1/easy_longest_twocharacter_substring/
*/

var text = "ababacbbcbbcabd"; //input to test

var matchedResults= []; //array to hold all matched results
var longest='';  //variable representing the longest 
//while text is longer than 1, 
while (text.length>1){
	var regEx =  /([\w?])\1*(?!\1)(\w)(\1|\2)*/; 	
	var result = text.match(regEx);		//search for a matched pattern
	matchedResults.push(result[0]); // push only the matched code
	//if result is longest one yet, store it as longest variable
	if( JSON.stringify(result[0]).length> longest.length ) {longest=JSON.stringify(result[0]);}
	//text.replace(/()[\w])\1*/ , '');  // Iwanted to replace all repeated first characters with an empty string... Would like help understanding why this did not work
	text= text.slice(1);  //instead I remove the first character
}
console.log(longest); //--> returns "cbbcbbc"

//Issues:  if two values are tied, the first one matched is returned. 
//This could be easily solved by working with the matchedResults array