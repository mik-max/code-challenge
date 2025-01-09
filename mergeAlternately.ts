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