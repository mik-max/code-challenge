function reverseWords(s: string): string {
     let wordsArray = s.split(" ");
     wordsArray.reverse();
     return wordsArray.join(" ").trim().replace(/\s+/g, ' ');
 };