
class FizzBuzz {

    constructor (number) {
        this.number = number;
    }

    substitute() {
        if(this._shouldSubstitute()) {
            return this._makeSubstitutions();
        } else {
            return this.number;
        }
    }

    _shouldSubstitute() {
        return this._isMultipleOf(3) || this._isMultipleOf(5);
    }

    _makeSubstitutions() {
        let substitutedValue = this._valueIfNumberIsMultipleOf3();
        substitutedValue += this._valueIfNumberIsMultipleOf5();

        return substitutedValue;
    }

    _valueIfNumberIsMultipleOf3() {
        if(this._isMultipleOf(3)) {
            return 'Fizz';
        } else {
            return '';
        }
    }

    _valueIfNumberIsMultipleOf5() {
        if(this._isMultipleOf(5)) {
            return 'Buzz';
        } else {
            return '';
        }
    }

    _isMultipleOf (divisor) {
        return this.number % divisor === 0;
    }
}

export default FizzBuzz;