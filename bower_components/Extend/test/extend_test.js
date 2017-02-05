/**
 * Test the extend microlibrary.
 */

var objectA = {};
var objectB = {};

QUnit.module("Extend", {
 beforeEach : function(){
   console.info("Before extend test fire.");
   objectA = {"x" : "x"};
   objectB = {"x" : "z", "y" : "y"};
 }
});

QUnit.test("Extend shall have the ability to append new properties.", function(assert){
  extend(objectA, objectB);
  objectB.super = objectA;
  assert.deepEqual(objectA, objectB, "Expected that objectA has objectB's values.");
});
  
QUnit.test("Extend shall be able to override previously existing properties.", function(assert){
  var expectedResults = {"x" : "x", "y" : "y"};
  extend(objectB, objectA);
  expectedResults.super = objectA;
  assert.deepEqual(objectB, expectedResults, "Expected that objectB's x value will be objectA's x value.");
});

QUnit.test("Extend should have the ability to append only attributes don't exists in the extended object.", function(assert){
  var expectedResults = {"x" : "x", "y" : "y"};
  safeExtend(objectA, objectB);
  assert.deepEqual(objectA, expectedResults, "Expected that objectA has the properties that objectB has but objectA did not.");
});
