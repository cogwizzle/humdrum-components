# Extend
Javascript extend function used to easily allow for pseudo inheritance prior to ES6.

## Preface
Extend is a Object Oriented Javascript facade for creating inhertiance like behavior with Javascript objects.  It works very similarly to jQuery.extend which was the inital inspiration for the creation of the micro framework.  The micro framework was created as a polyfill for users like me who like extend but don't want everything else that comes along with jQuery.

## Example
* Example of adding properties to a Javascript object.
```
var animal = {"name" : "spot"};
var dog = {"bark" : function(){alert("woof");}, "dig" : function(){yard.destory();}};
extend(dog, animal);
```
The object dog would look like ```{"name" : "spot", "bark" : function(){...}, "dig" : function(){...}, "super" : {...}}```

* Example of overriding properties of a Javascript object.
```
var alertSystem = {"alert" : function(){console.log("Hello world!")}};
var upgradedAlertSystem = {"alert" : function(){alert("Hello world!")}};
extend(alertSystem, upgradedAlertSystem);
```
The object alertSystem would have the same function as the upgradedAlertSystem.

## License
The MIT License
