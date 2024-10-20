if(sessionStorage.getItem('id') != null) {
    window.location.href = 'myaccount.html';
}

$('form').submit(function(e) {
    e.preventDefault();
    if($('#name').val() == '') {
        alert('Username field cannot be empty.');
        return false;
    }

    if($('#age').val() == '') {
        alert('Age field cannot be empty.');
        return false;
    }
    
    if($('#password').val() == '') {
        alert('Password field cannot be empty.');
        return false;
    }
    if($('#confirmpassword').val() == '') {
        alert('Confirm Password field cannot be empty.');
        return false;
    }
    if($('#password').val() != $('#confirmpassword').val()) {
        alert("Passwords didn't match. Please try again.");
        return false;
    }

    $.post('http://localhost:3000/register', $('#form').serialize(), function(data) {
        if (data.message == 'User Created') {
            alert('User Created Successfully. Please login to continue.');
            window.location.href = 'page3.html';
        }
    }).fail(function(error) {
        alert('User already exists. Please try again.');
    });
});
