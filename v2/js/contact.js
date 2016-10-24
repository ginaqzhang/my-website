var ContactForm = (function() {
  var myForm = {};

  var _updateStatus = function(validationStatus) {
    if (myForm.isValid != validationStatus) {
      var submitButton = myForm.target.find('.button').first();
      submitButton.toggleClass('disabled');
      submitButton.prop('disabled', !validationStatus);
      myForm.isValid = validationStatus;
    }
  };

  var _validateName = function() {
    return myForm.nameField.val().length > 0;
  };

  var _validateMessage = function() {
    return myForm.msgField.val().length > 0;
  };

  var _validateEmail = function() {
    var isValid =  (/.+@.+\..+/i).test(myForm.emailField.val());
    if (!isValid && myForm.emailField.val().length) {
      myForm.emailField.addClass('invalid');
    } else {
      myForm.emailField.removeClass('invalid');
    }
    return isValid;
  };

  var _validate = _.debounce(function() {
    var isValidName = _validateName();
    var isValidEmail = _validateEmail();
    var isValidMessage = _validateMessage();
    _updateStatus(isValidName && isValidEmail && isValidMessage);
  }, 300);

  myForm.init = function() {
    myForm.target = $('#contact-form');
    myForm.isValid = false;

    myForm.nameField = myForm.target.find('#name-input');
    myForm.emailField = myForm.target.find('#email-input');
    myForm.msgField = myForm.target.find('#msg-input');

    myForm.nameField.on('input', _validate);
    myForm.emailField.on('input', _validate);
    myForm.msgField.on('input', _validate);

    _validate();
  };

  return myForm;
})();

ContactForm.init();
