$(document).ready(function () {
          const apiUrl = "/api/login/";  // Django endpoint for AJAX login
          const message = sessionStorage.getItem('redirectMessage');

          if (message) {
                    $('#message').html(message);
                    sessionStorage.removeItem('redirectMessage');
          }

          $('#login-form').on('submit', function (e) {
                    e.preventDefault();
                    let isValid = true;
                    let formData = new FormData(this);

                    if (!$('#email').val()) { isValid = false; $('#email_error').html('Email is required'); } else { $('#email_error').html(''); }
                    if (!$('#password').val()) { isValid = false; $('#password_error').html('Password is required'); } else { $('#password_error').html(''); }

                    if (isValid) {
                              $.ajax({
                                        url: apiUrl,
                                        type: 'POST',
                                        data: formData,
                                        contentType: false,
                                        processData: false,
                                        headers: { 'X-CSRFToken': $('meta[name="csrf-token"]').attr('content') },
                                        success: function (response) {
                                                  localStorage.setItem('token', response.token);
                                                  window.location.href = '/dashboard/';
                                        },
                                        error: function (response) {
                                                  if (response.responseJSON && response.responseJSON.notice) {
                                                            $('#error').html(response.responseJSON.notice);
                                                  }
                                        }
                              });
                    }
          });
});
