function maxInArray(numbers){

   console.log(numbers)
   let largest=numbers[0];
   for(let i=0;i<numbers.length;i++)
   {
        const element=(numbers[i]);
        if(element>largest)
        largest = element;
   }
  
   return largest;

}

const height = [20,30,99,50,60,10]
const tallest = maxInArray(height);
console.log(tallest)