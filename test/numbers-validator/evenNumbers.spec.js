import { expect } from 'chai';
import NumbersValidator from '../../app/numbers_validator.js';
import { describe, it, beforeEach, afterEach } from 'mocha';

describe('NumbersValidator', () => {
  let numbersValidator;

  beforeEach(() => {
    numbersValidator = new NumbersValidator();
  });

  afterEach(() => {
    numbersValidator = null;
  })

  describe('isNumberEven', () => {
    it('should return true for even number', () => {
      expect(numbersValidator.isNumberEven(2)).to.be.equal(true);
    });

    it('should return false for odd number', () => {
      expect(numbersValidator.isNumberEven(3)).to.be.equal(false);
    });

    it('should throw an error for non-number input', () => {
      expect(() => {
        numbersValidator.isNumberEven('not a number');
      }).to.throw();
    });
  });

  describe('getEvenNumbersFromArray', () => {
    it('should return an array of even numbers', () => {
      expect(numbersValidator.getEvenNumbersFromArray([1, 2, 3, 4, 5])).to.deep.equal([2, 4]);
    });

    it('should throw an error for non-array input', () => {
      expect(() => {
        numbersValidator.getEvenNumbersFromArray('not an array');
      }).to.throw();
    });

    it('should throw an error if any element is not a number', () => {
      expect(() => {
        numbersValidator.getEvenNumbersFromArray([1, 'not a number', 3]);
      }).to.throw();
    });
  });

  describe('isAllNumbers', () => {
    it('should return true for array of numbers', () => {
      expect(numbersValidator.isAllNumbers([1, 2, 3])).to.be.equal(true);
    });

    it('should return false for array with non-number elements', () => {
      expect(numbersValidator.isAllNumbers([1, 'not a number', 3])).to.be.equal(false);
    });

    it('should throw an error for non-array input', () => {
      expect(() => {
        numbersValidator.isAllNumbers('not an array');
      }).to.throw();
    });
  });

  describe('isInteger', () => {
    it('should return true for integer', () => {
      expect(numbersValidator.isInteger(5)).to.be.equal(true);
    });

    it('should return false for non-integer number', () => {
      expect(numbersValidator.isInteger(5.5)).to.be.equal(false);
    });

    it('should throw an error for non-number input', () => {
      expect(() => {
        numbersValidator.isInteger('not a number');
      }).to.throw();
    });
  });
});
