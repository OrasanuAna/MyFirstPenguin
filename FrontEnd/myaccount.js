if(sessionStorage.getItem('id') == null) {
    window.location.href = 'page3.html';
}

$.get('http://localhost:3000/user/?id=' + sessionStorage.getItem('id'), function(response) {
    $('#name').html(response.data.name);
    $('#age').html(response.data.age);
    var rank = '';
    if(response.data.rank == 1) {
        rank = 'Admin';
    }
    else {
        rank = 'User';
    }
    $('#rank').html(rank);
});

$('#button-change-Username').click(function() {
    $('#change-Username').show();
    $('#change-Password').hide();
    $('#button-change-Username').hide();
    $('#button-change-Password').hide();
});

$('#button-change-Password').click(function() {
    $('#change-Password').show();
    $('#change-Username').hide();
    $('#button-change-Username').hide();
    $('#button-change-Password').hide();
});

$('#change-Username').submit(function(e) {
    e.preventDefault();
    if($('#newusername').val() == '') {
        alert('Username field cannot be empty.');
        return false;
    }
    $.post('http://localhost:3000/changeuser/?id=' + sessionStorage.getItem('id'), $('#change-Username').serialize(), function(response) {
        alert('Username changed successfully.');
        sessionStorage.setItem('name', $('#newusername').val());
        window.location.href = 'myaccount.html';
    }).fail(function(error) {
        alert('Username already exists. Please try again.');
    });
});

$('#change-Password').submit(function(e) {
    e.preventDefault();
    if($('#newpassword').val() == '') {
        alert('Password field cannot be empty.');
        return false;
    }
    if($('#newpassword').val() != $('#confirm-password').val()) {
        alert("Passwords didn't match. Please try again.");
        return false;
    }
    $.post('http://localhost:3000/changepassword/?id=' + sessionStorage.getItem('id'), $('#change-Password').serialize(), function(response) {
        alert('Password changed successfully.');
        window.location.href = 'myaccount.html';
    }).fail(function(error) {
        alert('Password not changed. Please try again.');
    });
});
