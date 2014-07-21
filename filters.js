'use strict';

angular.module('App.filters', [])
    .filter('joinBy', function () {
        return function (input,delimiter) {
            return (input || []).join(delimiter || ',');
        };
    }).filter('removeFirst', function () {
        return function (input) {
            return input.substring(1);
        };
    }).filter('removeLast', function () {
        return function (input) {
            return input.slice(0,input.length-1);
        };
    }).filter('truncate', function () {
        return function (input,limit,endChar) {
            return input.substr(0,limit || 80) + ((limit >= input.length) ? '' : endChar || '...');
        };
    }).filter('stripHtmlTags', function () {
        return function (input) {
            return input.replace(/(<([^>]+)>)/ig,'');
        };
    }).filter('capitalize', function () {
        return function (input) {
            if (input) {
                return input.toLowerCase().substring(0, 1).toUpperCase() + input.substring(1);
            }
            return input;
        }
    }).filter('kCurrency', function () {
        
        /**
         * Custom Currency Filter
         * This filter given the following inputs will render the following outputs:
         * Input: 50,000 Output: 50K
         * Input 50321 Output: 50.3K
         * Input: 5,000,000 Output: 5M
         */

        var formatNumber = function(number) {
            if (!number) return '';

            var parseNumber = function(number, endIndex, symbol) {
                var major = number.slice(0, endIndex),
                    minor = number.slice(endIndex, endIndex + 1);

                return minor == 0 ? major + symbol : major + '.' + minor + symbol;
            };

            // parse number of digits in a number and format accordingly
            var digitsRegex = /([\d]+)/g;
            var matches = number.match(digitsRegex);
            if (matches.length > 0) {
                var numberOfDigits = matches[0].length;

                /*
                    We can identify that the number is in the thousands
                    range if the number is between 4 and 6 digits.
                 */
                if (numberOfDigits === 4) {
                    return parseNumber(number, 1, 'K');
                } else if (numberOfDigits === 5) {
                    return parseNumber(number, 2, 'K');
                } else if (numberOfDigits === 6) {
                    return parseNumber(number, 3, 'K');
                } else if (numberOfDigits === 7) {
                    return parseNumber(number, 1, 'M');
                } else if (numberOfDigits === 8) {
                    return parseNumber(number, 2, 'M');
                }
            }

            // number does not fit range return original number
            return number;

        };


        var formats = $locale.NUMBER_FORMATS;
        return function (amount, currencySymbol) {
            if (amount) {
                var parts = [];

                if (angular.isUndefined(currencySymbol)) {
                    currencySymbol = formats.CURRENCY_SYM;
                }

                // check if the number is negative and abs the number for easier parsing
                var isNegative = amount < 0;
                amount = Math.abs(Math.round(amount)).toString();

                var formatedText = formatNumber(amount);

                // add negative and symbol placeholder
                if (isNegative) {
                    parts.push('-');
                }
                parts.push(currencySymbol);
                parts.push(formatedText);

                // return the complete formatted number
                return parts.join('');

            }
            return amount;
        }


    });
