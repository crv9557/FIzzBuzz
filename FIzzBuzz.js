// Prints out #1-100, changing numbers divisible by 3 and 5
 for (var n = 1; n <= 100; n++) {
   output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}
