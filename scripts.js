$(function() {
  // jQuery elemek
  let $alertSuccess = $('.alert-success');
  let $alertDanger = $('.alert-danger');
  let $button = $('button.btn.btn-primary');
  let $email = $('input[type="email"]');
  let $password = $('input[type="password"]');

  // email és jelszó
  const properEmail = 'user@email.hu';
  const properPassword = '123456';

  // bejelentkezési kísérlet kezelése
  $button.click(function(event) {
    event.preventDefault();

    if (properEmail === $email.val() && properPassword === $password.val()) {
      $alertDanger.hide();
      $alertSuccess.show();
    } else {
      $alertSuccess.hide();
      $alertDanger.show();
    }
  });
});
