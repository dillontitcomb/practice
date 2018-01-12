OPERATORS
-,+,*,/,%

// Assignment Operators: change the value of the variable to the left of the operator.
=,+=,-=,*=,/=

// Comporison Operators: compare two variables but change neither.
===,!==,>,<,>=,<=

// Logical Operators: used for branching.
&&, ===, ||, !

METHODS
// usage: variable.toExponential() or variable.toPrecision(3)

// For numbers
toExponential(decimal place)
toFixed(decimal place)
toPrecision(decimal place)

// For strings
charAt()
toUpperCase()
toLowerCase()
concat() (e.g. "road".concat("hog") = "roadhog")
// Changing images / elements
show()
hide()
toggle()
fadeIn()
fadeout()
fadeToggle()
slideDown()
slideUp()
slideToggle()
addClass("exampleClass")
// Doesn't need . to denote class of argument
removeClass()

FUNCTIONS
// ex. creating a function:
// var exfunction = function (variable1, variable2) {
// 	return result = variable1 + variable 2;
// 	alert(result)
// }
parseInt()
parseFloat()
toString()
alert("text")
// returns undefined
prompt("text")
// returns string
confirm("text")
// returns boolean

FORMS
// Field
var variable= $("#exampleid").val();
// Dropdown
var variable = $("#exampleid").val();
// Radio Buttons
var variable = $("input:radio[name=exampleValueCategory]:checked").val();
// Prompt
var variable = parseInt(prompt("provide number"));
// Prevent Default (submission error causes ? in URL)
event.preventDefault();

EVENT HANDLERS
// listens for events and reacts when they are triggered. Examples are clicking - .click - or submitting a form.
// Click handler
$("exampleElement").click(function()) {
}};
// Select a clicked-on element
$('.exampleClass').click(function() {
  $(this);
});
// Button submission
$("form#exampleid").submit(function(event) {
});

CHANGING THE DOM
// Insert within an element (INSERT TEXT AS IF TYPING IN AN HTML DOCUMENT)
('ul').prepend('<li>textToBePrepended</li>')
('exampleElement').append('textToBeAppended')
// Insert outside of an element, before or after
('p').before('<h3>New header before paragraph<h3>')
('.exampleClass').after('<p>exampleText</p>')
// Remove an element:
('#exampleId').remove()
// Select children, first or last:
$('.some-class').children();
$('ul').children('li');
$('ul').children('li').first();
$('ul').children('li').last();

BRANCHING
if (variable < exampleValue && variable === exampleValue2) {
  // logical operators must have full statement displayed, determined as true or false.
  $('#exampleid').show();
} else if variable > exampleValue) {
  $('#exampleid2').show();
} else {
  $('#exampleid3').show();
}

TERMS
// Data Types: Boolean, Number, String, Undefined, Null
// Method: action run on a piece of data; a message sent to a piece of data resulting in the response.
// Return value: the response to a method.
// Argument: objects that are provided to the method; some methods take more than others.
// Boolean: True or False. Not strings.
