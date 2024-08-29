function getNumbers() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([1, 2, 3, 4]);
        }, 3000);
      });
    }

    getNumbers().then(numbers => {
      return numbers.filter(number => number % 2 === 0);
    }).then(evenNumbers => {
      return evenNumbers.map(number => number * 2);
    }).then(finalNumbers => {
      document.getElementById('output').innerText = finalNumbers.join(', ');
    });