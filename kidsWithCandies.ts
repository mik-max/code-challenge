function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
     let result: boolean[] = [];
     if(candies?.length >= 2 && candies?.length <= 100 && extraCandies >= 1 && extraCandies <= 50){
         let max = Math.max(...candies);
         for(let i = 0; i < candies?.length; i++){
             if(candies[i] >= 1 && candies[i] <= 100){
                  candies[i] += extraCandies;
                 result.push(candies[i] >= max);
             }
         }
     }
     return result;
 };