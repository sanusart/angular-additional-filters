# Angular additional filters

This is small, growing collection of additional [AngularJS](http://angularjs.org) filters to manipulate strings and arrays.

#### Demo at [plunker](http://plnkr.co/edit/gSGSTj7CPthecFlyeQ11?p=preview)

## Filters:

####joinBy
   
    {{ array | joinBy : " | " }}

_Add defined separator between members of outputed array._ 

####removeFirst

    {{ string | removeFirst }}

_Remove first character from string_

####removeLast

    {{ string | removeLast }}
    
_Remove last character from string_

####truncate

    {{ string | truncate : 10 : '...' }}

_Truncate string to defined length and append defined string at the end of the truncation._

####stripHtmlTags

    {{ string | stripHtmlTags }}

_Strip all HTML tags including from a string._

####capitalize

    {{ string | capitalize }}

_Capitalize first letter in a string_

####kCurrency

    {{ price | kCurrency : '$' }}

_Same syntax as angular currency filter only returns a shorter rounded version of the currency for display purposes. e.g: 5K 5.3K 5M 5.5M 55M_

