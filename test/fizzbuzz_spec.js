import chai from "chai";
import FizzBuzz from "../src/fizzbuzz";

const expect = chai.expect;

describe('FizzBuzz', () => {
   describe('Testing the non-substitution condition', () => {
        it('should return the number 4 itself', () => {
            const fizzBuzz = new FizzBuzz(4);
            expect(fizzBuzz.substitute()).to.eql(4);
        });

        it('should return the number 98 itself', () => {
            const fizzBuzz = new FizzBuzz(98);
            expect(fizzBuzz.substitute()).to.eql(98);
        });
   });

   describe('Testing the Fizz solo substitution', () => {
        it('should substitute the number 3 by Fizz', () => {
            const fizzBuzz = new FizzBuzz(3);
            expect(fizzBuzz.substitute()).to.eql("Fizz");
       });

        it('should substitute the number 99 by Fizz', () => {
            const fizzBuzz = new FizzBuzz(3);
            expect(fizzBuzz.substitute()).to.eql("Fizz");
        });
   });

   describe('Testing the Buzz solo substitution', () => {
        it('should substitute the number 5 by Buzz', () => {
            const fizzBuzz = new FizzBuzz(5);
            expect(fizzBuzz.substitute()).to.eql("Buzz");
        });

        it('should substitute the number 95 by Buzz', () => {
            const fizzBuzz = new FizzBuzz(95);
            expect(fizzBuzz.substitute()).to.eql("Buzz");
        });
    });

    describe('Substituion by FizzBuzz when the number can be divide by 3 and 5', () => {
        it('should substitute the number 15 by FizzBuzz', () => {
            const fizzBuzz = new FizzBuzz(15); 
            expect(fizzBuzz.substitute()).to.eql("FizzBuzz");
        });

        it('should substitute the number 90 by FizzBuzz', () => {
            const fizzBuzz = new FizzBuzz(90); 
            expect(fizzBuzz.substitute()).to.eql("FizzBuzz");
        });
    });
});