function mergeAlternately(word1: string, word2: string): string {
     const word1Array = word1.split("");
     const word2Array = word2.split("");
 
     let count = 0;
     let newWord = "";
 
     const getChar = (index: number, array:string[]): string => {
         return array[index];
     }
 
     if(word1Array?.length >= 1 && word2Array?.length <= 100){
         while(count < word1Array?.length || count < word2Array?.length){
             count < word1Array?.length ? newWord += getChar(count, word1Array) : null ;
             count < word2Array?.length ? newWord += getChar(count, word2Array) : null ;
             count++;
         }
     }
     return newWord;
 };

 // Question

//  You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

//  Return the merged string.
 
  
 
//  Example 1:
 
//  Input: word1 = "abc", word2 = "pqr"
//  Output: "apbqcr"
//  Explanation: The merged string will be merged as so:
//  word1:  a   b   c
//  word2:    p   q   r
//  merged: a p b q c r
//  Example 2:
 
//  Input: word1 = "ab", word2 = "pqrs"
//  Output: "apbqrs"
//  Explanation: Notice that as word2 is longer, "rs" is appended to the end.
//  word1:  a   b 
//  word2:    p   q   r   s
//  merged: a p b q   r   s
//  Example 3:
 
//  Input: word1 = "abcd", word2 = "pq"
//  Output: "apbqcd"
//  Explanation: Notice that as word1 is longer, "cd" is appended to the end.
//  word1:  a   b   c   d
//  word2:    p   q 
//  merged: a p b q c   d
  
 
//  Constraints:
 
//  1 <= word1.length, word2.length <= 100
//  word1 and word2 consist of lowercase English letters.