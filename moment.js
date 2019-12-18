
var result= moment().format('LLLL');

var todaysDate = $('#date')
    todaysDate.text('Todays Date: ' + result)
 
var saveButton = $('#buttonOne')

var nine = $('#9AM')
var ten = $('#10AM')
var eleven = $('#11AM')
var twelve = $('#12PM')
var one = $('#1PM')
var two = $('#2PM')
var three = $('#3PM')
var four = $('#4PM')
var five = $('#4PM')



function displayData(){
    
    var getit = window.localStorage.getItem('9am') 
    console.log(getit)
    document.getElementById('9AM').value = getit;

     var getit2 = window.localStorage.getItem('10am') 
     console.log(getit2)
     document.getElementById('10AM').value = getit2;

    var getit3 = window.localStorage.getItem('11am') 
    console.log(getit3)
    document.getElementById('11AM').value = getit3;

    var getit4 = window.localStorage.getItem('12pm') 
    console.log(getit4)
    document.getElementById('12PM').value = getit4;

    var getit5 = window.localStorage.getItem('1pm') 
    console.log(getit5)
    document.getElementById('1PM').value = getit5;
    
    var getit6 = window.localStorage.getItem('2pm') 
    console.log(getit6)
    document.getElementById('2PM').value = getit6;
    
    var getit7 = window.localStorage.getItem('3pm') 
    console.log(getit7)
    document.getElementById('3PM').value = getit7;
    
    var getit8 = window.localStorage.getItem('4pm') 
    console.log(getit8)
    document.getElementById('4PM').value = getit8;

    var getit9 = window.localStorage.getItem('5pm') 
    console.log(getit9)
    document.getElementById('5PM').value = getit9
}

displayData()


$(function(){
    $("#9AM").keyup(function(event){
        var task1 = $("#9AM").val().trim();
           $("#submit-button1").click(function(event){
          localStorage.setItem('9am',task1)
        });
        event.preventDefault();
    })
    $("#10AM").keyup(function(){
        var task2 = $("#10AM").val().trim();
           $("#submit-button2").click(function(event){
          localStorage.setItem('10am',task2)
        });
        event.preventDefault();
    })
     $("#11AM").keyup(function(){
        var task3 = $("#11AM").val().trim();
           $("#submit-button3").click(function(event){
          localStorage.setItem('11am',task3)
           })
           event.preventDefault();
        });
    $("#12PM").keyup(function(){
        var task4 = $("#12PM").val().trim();
           $("#submit-button4").click(function(event){
          localStorage.setItem('12pm',task4)
           })
        });
    $("#1PM").keyup(function(){
        var task5 = $("#1PM").val().trim();
           $("#submit-button5").click(function(event){
          localStorage.setItem('1pm',task5)
           })
        });
    $("#2PM").keyup(function(){
        var task6 = $("#2PM").val().trim();
           $("#submit-button6").click(function(event){
          localStorage.setItem('2pm',task6)
           })
        });
    $("#3PM").keyup(function(){
        var task7 = $("#3PM").val().trim();
           $("#submit-button7").click(function(event){
          localStorage.setItem('3pm',task7)
           })
        });
    $("#4PM").keyup(function(){
        var task8 = $("#4PM").val().trim();
           $("#submit-button8").click(function(event){
          localStorage.setItem('4pm',task8)
           })
        });
    $("#5PM").keyup(function(){
        var task9 = $("5PM").val().trim();
           $("#submit-button9").click(function(event){
          localStorage.setItem('5pm',task9)
           })
        });
    })


    
    

