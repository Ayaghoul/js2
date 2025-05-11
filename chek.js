//String Manipulation Functions

 function  Reversegiven(str)
 {let st="";
    for(let i = str.length-1 ;i>=0 ; i++)
    {
        st += str[i]; 
    }
  return st;
 }

 function CountCharacters(str)
 {
    return str.length;
 }

 function capitalizeWords(sentence) {
    let words = sentence.split(" "); 
    for (let i = 0; i < words.length; i++) {
      
      words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(" "); 
   }
//Array Functions
 function minMax(arr) {
    let max=arr[0];
    let min=arr[0];
    for(let i=1; i<arr.length;i++)
    {
        if(max<arr[i])
        {
            max=arr[i]
        }
        if(min>arr[i])
            {
                min=arr[i]
            }
    }
    return[min,max];
    }
    function sumOfArray(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];  
        }
        return sum;
      }
    function filterArray(arr){
      let res =[];
      for (let index = 0; index < arr.length; index++) {
         if(arr[index]%2!==0)
         {
            res.push(arr[index]);
         }
        
      }
      return res;
    }
//Mathematical Functions
    function factorial(n) {
      let fact = 1;
      for (let i = 1; i <= n; i++) {
      fact *= i; 
      }
      return fact;
    }
    function PrimeCheck(n) {
        if (n <= 1) { 
            return false; 
        }
        for (let i = 2; i <n; i++) {
          if (n % i === 0) {
            return false; 
          }
        }
        return true; 
      }
      function generateFibonacci(n) {
        let res = [0, 1]; 
      
        for (let i = 2; i < n; i++) {
          res.push(res[i - 1] + res[i - 2]); 
        }
      
        return res;
      }  