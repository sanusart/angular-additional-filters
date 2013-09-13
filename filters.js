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
}); 
