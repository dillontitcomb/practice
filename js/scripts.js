$(document).ready(function() {
// CREATING VARIABLES FROM FORMS

// FIELD
var variable= $("#exampleid").val();

// DROPDOWN
var variable = $("#exampleid").val();

// RADIO BUTTONS
var variable = $("input:radio[name=exampleValueCategory]:checked").val();

// BUTTON SUBMISSION
$("form#exampleid").submit(function(event) {

// PREVENT DEFAULT (submission error causes ? in URL)
event.preventDefault();
