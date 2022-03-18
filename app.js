// create a memoized function

 function memoize(fn) {
   var cache = {};
   return function(arg) {
     if (cache[arg]) {
       return cache[arg];
     }
     else {
       cache[arg] = fn(arg);
       return cache[arg];
     }
   }
 }

    var fibonacci = memoize(function(n) {
        if (n < 2) {
            return n;
        }
        else {
            console.log(n)
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    });

    for(let i = 1; i < 59; i++) {
        console.log(fibonacci(i));
    }
    

    // which command pushes code to github?

    // git add .
    // git commit -m "message"
    // git push origin master
    