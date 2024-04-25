const fizzBuzz = require('./FizzBuzz');

describe('WHEN "FizzBuzz" is called', function () {
    it('AND number is not multiples of five or three MUST return "10" ', function () {
        expect(fizzBuzz(2)).toBe("2");
    });

    it('AND number is  multiples of three MUST return "Fizz" ', function () {
        expect(fizzBuzz(3)).toBe("Fizz");
        expect(fizzBuzz(9)).toBe("Fizz");
    });

    it('AND number is  multiples of five MUST return "Buzz" ', function () {
        expect(fizzBuzz(5)).toBe("Buzz");
    });

    it('AND number is  multiples of five and three MUST return "FizzBuzz" ', function () {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
        expect(fizzBuzz(30)).toBe("FizzBuzz");
    });
});
