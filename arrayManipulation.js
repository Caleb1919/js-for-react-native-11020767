function processArray(numbers) {
    return numbers.map(num => num % 2 === 0 ? num ** 2 : num * 3);
  }
  function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
      return numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
  }
  
  const numbers = [1, 2, 3, 4, 5];
const result = processArray(numbers);
console.log(result);