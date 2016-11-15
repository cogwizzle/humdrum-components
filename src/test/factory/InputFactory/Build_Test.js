/**
  Test and documents InputFactory.
  // TODO Rewrite test to reflect changes in code.

  @author Joe Fehrman
  @since 11/12/2016
*/
QUnit.module("Build");

QUnit.test("InputFactory shall take a JSON description of a text field and create a text input.", function(assert){
  assert.expect(2);
  var factory = new InputFactory();
  var input = {"type":"text", "id":"name"};
  var results = factory.build(input);
  var expectedType = "INPUT";
  var expectedId = "name";
  assert.equal(results.nodeName, expectedType);
  assert.equal(results.id, "name");
});

QUnit.test("InputFactory shall take a JSON description of a textarea field and create a textarea.", function(assert){
  assert.expect(2);
  var factory = new InputFactory();
  var input = {"type":"textarea", "id":"name"};
  var results = factory.build(input);
  var expectedType = "TEXTAREA";
  var expectedId = "name";
  assert.equal(results.nodeName, expectedType);
  assert.equal(results.id, "name");
});

QUnit.test("InputFactory shall take a JSON description of a password field and create a password field.", function(assert){
  assert.expect(3);
  var factory = new InputFactory();
  var input = {"type":"password", "id":"name"};
  var results = factory.build(input);
  var expectedType = "INPUT";
  var expectedId = "name";
  assert.equal(results.nodeName, expectedType);
  assert.equal(results.getAttribute("type"), "password");
  assert.equal(results.id, "name");
});

QUnit.test("InputFactory shall take a JSON description of a checkbox field and create a checkbox field.", function(assert){
  assert.expect(8);
  var factory = new InputFactory();
  var input = {"type":"checkbox", "id":"name", "values" : ["test", "test2"]};
  var results = factory.build(input);
  var expectedType = "SPAN";
  var expectedId = "name";
  assert.equal(results.nodeName, expectedType);
  assert.equal(results.id, "name");
  for(var i = 0; i < results.children.length; i++){
    var child = results.children[i];
    assert.equal(child.nodeName, "INPUT");
    assert.equal(child.getAttribute("type"), "checkbox");
    assert.equal(child.getAttribute("name"), "name");
  }
});
