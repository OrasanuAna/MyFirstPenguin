if(sessionStorage.getItem('id') != null) {
    window.location.href = 'myaccount.html';
}

$('form').submit(function(e) {
    e.preventDefault();
    $.post('http://localhost:3000/login', $('#form').serialize(), function(data) {
        if (data.message == 'Login Successful') {
            sessionStorage.setItem('id', data.id);
            $.get('http://localhost:3000/user/?id=' + data.id, function(response) {
                sessionStorage.setItem('name', response.data.name);
                window.location.href = 'page2.html';
        });
    }

    }).fail(function(error) {
        //console.log(error);
            $('#error').html('Invalid username or password');
    });
});
