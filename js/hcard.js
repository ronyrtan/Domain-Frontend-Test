// Personal Details

// captures the values of the input fields into a variable
// which is output onto the hCard preview.

$('#givenNameInput').on('keyup', function(){
  var name = $(this).val();
  $('#name').text(name + " " + $('#surnameInput').val() );
});

$('#surnameInput').on('keyup', function(){
  var name = $(this).val();
  $('#name').text($('#givenNameInput').val() + " " + name);
});

$('#emailInput').on('keyup', function(){
  var email = $(this).val();
  $('#email').text(email);
});

$('#phoneInput').on('keyup', function(){
  var phone = $(this).val();
  $('#phone').text(phone);
});


// Avatar

// When the upload avatar button is pressed the avatar icon
// on the hCard appears. Used fadeIn() for a nicer effect

$('#uploadAvatar').click(function() {
  $('#avatar').fadeIn();
});


// Address

$('#houseNumberInput').on('keyup', function(){
  var houseNumber = $(this).val();
  $('#addressLineOne').text(houseNumber + " " + $('#streetInput').val() );
});

$('#streetInput').on('keyup', function(){
  var street = $(this).val();
  $('#addressLineOne').text($('#houseNumberInput').val() + " " + street);
});

$('#suburbInput').on('keyup', function(){
  var suburb = $(this).val();
  $('#addressLineTwo').text(suburb + ", " + $('#stateInput').val() );
});

$('#stateInput').on('keyup', function(){
  var state = $(this).val();
  $('#addressLineTwo').text($('#suburbInput').val() + ", " + state);
});

$('#postcodeInput').on('keyup', function(){
  var postcode = $(this).val();
  $('#postcode').text(postcode);
});

$('#countryInput').on('keyup', function(){
  var country = $(this).val();
  $('#country').text(country);
});
