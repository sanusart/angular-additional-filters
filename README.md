# Angular additional filters

This is small, growing collection of additional [AngularJS](http://angularjs.org) filters to manipulate strings and arrays.

#### Demo at [plunker](http://plnkr.co/edit/7fF45P2BODrvSROxjDjf?p=preview)

## Filters:

####joinBy
   
    {{array | joinBy : " | "}}

Add defined separator between members of outputed array. 

####removeFirst

    {{string | removeFirst }}

Remove first character from string

####removeLast

    {{string | removeLast }}
    
Remove last character from string

####truncate

    {{string | truncate : 10 : '...'}}

Truncate string to defined lenght and append defined string at the end of the truncation.
