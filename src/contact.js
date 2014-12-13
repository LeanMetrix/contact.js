
(function() {
    var options = {
        message: 'Contact Us',
        position: 'right',
        textColor: 'white',
        backgroundColor: '#11a9cc'
    };

    document.body.innerHTML += render.modal({ sendButton: 'High Five' });
    document.body.innerHTML += render.button({ buttonText: 'Hola' });
    document.head.innerHTML += render.styles({});

    function showDialog() {
        document.getElementById('contact-overlay').className = 'overlay show';
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-message').value = '';
    }

    function hideDialog() {
        document.getElementById('contact-overlay').className = 'overlay';
    }

    function send(url, data, callback) {
        var http = new XMLHttpRequest();
        var params = "name=" + encodeURIComponent(data.name) +
            '&email=' + encodeURIComponent(data.email) +
            '&message=' + encodeURIComponent(data.message);
        http.open("POST", url, true);
        http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        http.onreadystatechange = function() {
            callback();
        };
        http.send(params);
    }

    function submitForm(ev) {
        if (true) { // if AJAX
            ev.preventDefault();
            send('http://localhost:3000/contact/', {
                    name: document.getElementById('contact-name').value,
                    email: document.getElementById('contact-email').value,
                    message: document.getElementById('contact-message').value
                }, function() {
                //send('https://api.leanmetrix.com/contact/', 'hello', function() {
                hideDialog();
                //document.getElementById('contact-sent').setAttribute("display", "block");
            });
        }
    }

    setTimeout(function() {
        document.getElementById('contact-btn').addEventListener('click', showDialog);
        document.getElementById('contact-close').addEventListener('click', hideDialog);

        document.getElementById('contact-form').addEventListener('submit', submitForm);
    });
})();
