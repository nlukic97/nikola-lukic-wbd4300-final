//--------------------------API validation-------------------------
function convertValidation() { //maybe change name
	var amount1 = $('#amount1').val()
	var currency1 = $('#currency1').val()
	var currency2 = $('#currency2').val()

	$('#amount2').removeAttr('placeholder') //when we validate, we remove the placeholder

	if (isNaN(amount1) || amount1 == ''){
		$('h3').remove()
		$('#theApp').prepend('<h3>' + currency2 + '</h3>')
		$('#theApp').prepend('<h3>Please enter a number.</h3>')
		$('h3:first-child').css('color','red')
	} else if (currency1 == currency2) {
		$('h3').remove()
		$('#theApp').prepend('<h3>' + currency2 + '</h3>')
		$('#theApp').prepend('<h3>Please select different currencies.</h3>')
		$('h3:first-child').css('color','red')
	}  else {
		convert(amount1, currency1, currency2)
	}
}

//AJAX function - converting the currencies
function convert(amount1, currency1, currency2){
	$.ajax('https://api.exchangeratesapi.io/latest?base=' + currency1)
		.done(function(response){

			var value = response.rates[currency2];
			var result = Math.round(((amount1 * value) + Number.EPSILON) * 100) / 100
			

			$('h3').remove()
			$('#theApp').prepend('<h3>' + result + ' ' + currency2 + '</h3>')
			$('#theApp').prepend('<h3>' + amount1 + ' ' + currency1 + ' equals</h3>')
			$('#amount2').attr('placeholder', result)
		})
		.fail(function(){
			$('h3').remove()
			$('#theApp').prepend('<h3>' + amount2 + ' ' + currency2 + '</h3>')
			$('#theApp').prepend('<h3>' + amount1 + ' ' + currency1 + ' equals</h3>')
		})
}



/*------------------------- Form validation -------------------------*/

// ------individual input check
function firstNameCheck(){
	var firstName = $('#firstName').val()
	if(firstName == ''){
		return 'Please enter your name'
	}

	if(firstName.length < 3 || firstName.length > 12) {
		return 'Please enter a name from 3 to 12 characters'
	}

	if (firstName.indexOf('@') != -1) {
		return 'Please use letters only'
	} 
	if(isNaN(firstName) == false){
		return 'Please use letters only'
	}
}

function lastNameCheck(){
	var lastName = $('#lastName').val()
	if(lastName == ''){
		return 'Please enter your last name'
	}

	if(lastName.length < 3 || lastName.length > 12) {
		return 'Please enter a last name from 3 to 12 characters'
	}

	if (lastName.indexOf('@') != -1) {
		return 'Please use letters only'
	} 
	if(isNaN(lastName) == false){
		return 'Please use letters only'
	}
}

function emailCheck(){
	var email = $('#email').val()
	if(email == ''){
		return 'Please enter an email address'
	}
	if(email.indexOf('@') == -1) {
		return 'Please use the correct email format'
	}
}

function telephoneCheck(){
	var telephone = $('#telephone').val()
	if(telephone == ''){
		return 'Please enter a telephone number'
	}
	if(isNaN(telephone)){
		return 'Please use numbers only'
	}
}

function dateCheck(){
	var date = $('#date').val()
	console.log(date)
	if(date == ''){
		return 'Required'
	}
}


//------validation and warning display
function validateForm(){
	var firstNameResult  = firstNameCheck()
	if(firstNameResult) {
		$('#firstName').next('p').text(firstNameResult)
	} else {
		$('#firstName').next('p').text('')
	}


	//last name adding
	var lastNameReslt  = lastNameCheck()
	if(lastNameReslt) {
		$('#lastName').next('p').text(lastNameReslt)
	} else {
		$('#lastName').next('p').text('')
	}

	//email
	var emailResult  = emailCheck()
	if(emailResult) {
		$('#email').next('p').text(emailResult)
	} else {
		$('#email').next('p').text('')
	}

	//telephone
	var telephoneResult = telephoneCheck();
	if(telephoneResult){
		$('#telephone').next('p').text(telephoneResult)
	} else {
		$('#telephone').next('p').text('')
	}

	//date
	var dateResult = dateCheck();
	if(dateResult){
		$('#date').next('p').text(dateResult)
	} else {
		$('#date').next('p').text('')
	}
}



/*--------------------------Image slider------------------------------*/
var autoSlide = setInterval(function(){
	slideshow('forward')
},3700)

$('#next').on('click', function(){
	clearInterval(autoSlide)
	slideshow('forward')
})

$('#prev').on('click', function(){
	clearInterval(autoSlide)
	slideshow('backward')
})


function slideshow(direction){
	 $('button').prop('disabled', true);
	var images = $('#gallery ul li'); 

	(direction == 'forward') ? $(images[0]).appendTo('#gallery ul') : $(images[3]).prependTo('#gallery ul');
	var signAnimate = (direction == 'forward') ? '-' : '+';
	var signCancel = (direction == 'forward') ?  '+': '-';

	$('#gallery ul').css('left',signCancel + '=435px');
	$('ul').animate({
        left: signAnimate + '=435px'
    },{
        done: function(){
            $('button').prop('disabled', false);
        }
    });
}


// -----------------Collapsing the hamburger menu on click of link
$('#collapse_target ul li').on('click', function(){
	$('nav div').removeClass('show')
})


