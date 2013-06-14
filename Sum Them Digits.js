/*
As a crude form of hashing function, Lars wants to sum the digits of a number. 
Then he wants to sum the digits of the result, and repeat until he have only one digit left. 
He learnt that this is called the digital root of a number, but the Wikipedia article is just confusing him.

Can you help him implement this problem in your favourite programming language?
Find the problem here:  http://www.reddit.com/r/dailyprogrammer/comments/1fnutb/06413_challenge_128_easy_sumthedigits_part_ii/

Sample Input
31337
Sample Output
8, because 3+1+3+3+7=17 and 1+7=8
*/

function sumDigits(input) {
    input= input+ "";
    var value= 0;
    var tempInput=0;
    while(input.length>1) {
        for (var i =0; i<input.length; i++) {
            tempInput+= parseInt(input.charAt(i), 10); 
        }
        input= tempInput+ "";
        console.log(input);
        tempInput= 0;
    }
    return input;
}

sumDigits(554536999999999);  --> 109--> 10-->1