$('document').ready(function() {  

  var $dpPercent = (+$('#dp-percent').val())/100;
  //convert down payment input to float

  $('#dp-amount').val(+($('#house-price-mort').val()) * (+$('#dp-percent').val())/100)

  $('#house-price-mort').change(function() {
    $('#dp-amount').val(+($('#house-price-mort').val()) * (+$('#dp-percent').val())/100)
  });

  $('#dp-percent').change(function() {
    $('#dp-amount').val(+($('#house-price-mort').val()) * (+$('#dp-percent').val())/100)
  });
  //when user leaves down pmt input box, calculate down payment amount


//on form submission, calculate loan amount, monthly payment, and total interest amount
  $('#mort-calc-submit').click(function(){

    var $housePriceCalc = +($('#house-price-mort').val());
    var $dpAmount = +($('#dp-amount').val());
    var $loanAmount = $housePriceCalc - $dpAmount;
    var $loanTerm = +($('#loan-period').val()) * 12;
    var $interestRate = +($('#interest-rate').val())/1200;

    var $monthlyPayment = ($loanAmount * ($interestRate * Math.pow(1+$interestRate, $loanTerm)) / (Math.pow(1+$interestRate, $loanTerm) - 1))
    var $totalInterest = ($monthlyPayment * $loanTerm - $loanAmount)

    $( "#mort-calc-loan" ).empty();
    $( "#mort-calc-monthly").empty();
    $( "#mort-calc-interest").empty();

    $('#mort-calc-loan').append($housePriceCalc - $dpAmount).attr("class", "calc-result, bold");
    $('#mort-calc-monthly').append(Math.round($monthlyPayment*100)/100).attr("class", "calc-result, bold");
    $('#mort-calc-interest').append(Math.round($totalInterest*100)/100).attr("class", "calc-result, bold");

}); 

});