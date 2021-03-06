contactjs = (function() {

    var options = {
        message: 'Contact Us',
        position: 'right',
        textColor: 'white',
        backgroundColor: '#11a9cc'
    };

    function init(cfg) {
        cfg = cfg || {};
        document.body.innerHTML += contactjs.modal({ sendButtonText: cfg.sendButtonText || 'Send' });
        document.body.innerHTML += contactjs.button({ buttonText: cfg.buttonText || 'Contact Us' });
        document.head.innerHTML += contactjs.styles({ buttonPosition: cfg.buttonPosition || 'bottom'});
    }

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

    return {
        init: init,
        show: showDialog,
        hide: hideDialog
    };
})();

contactjs["button"] = function anonymous(data) {
var out='<div id="contact-btn">'+(data.buttonText)+'</div>';return out;
};
contactjs["modal"] = function anonymous(data) {
var out='<div id="contact-overlay" class="overlay"> <form id="contact-form" action="https://api.leanmetrix.com/contact/" method="POST"> <svg id="contact-close" class="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"> <path class="yolo" d="M62.146,49.999L92.364,19.78c1.159-1.159,1.159-3.037,0-4.195l-7.95-7.95c-1.158-1.158-3.036-1.158-4.195,0L50,37.854  L19.781,7.635c-1.158-1.158-3.037-1.158-4.196,0l-7.95,7.95c-1.159,1.158-1.159,3.036,0,4.195l30.219,30.219L7.636,80.219  c-1.16,1.159-1.16,3.037,0,4.195l7.949,7.95c1.159,1.159,3.038,1.159,4.196,0L50,62.146l30.218,30.218  c1.159,1.159,3.037,1.159,4.195,0l7.95-7.95c1.159-1.158,1.159-3.036,0-4.195L62.146,49.999z"/> </svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" display="none" id="contact-sent"> <path fill="#52cc14" d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm3 4.594l1.406 1.406-5.406 5.406-3.406-3.406 1.406-1.406 2 2 4-4z" /> </svg> <input id="contact-name" type="text" name="name" placeholder="Name" required> <input id="contact-email" type="email" name="email" placeholder="Email" required> <textarea id="contact-message" placeholder="Message" name="message" required></textarea> <button>'+(data.sendButtonText)+'</button> </form></div>';return out;
};
contactjs["styles"] = function anonymous(data) {
var out='<style> #contact-btn { position: fixed; z-index: 100000001; height: 40px; line-height: 40px; padding: 0 15px; ';if(data.buttonPosition == 'bottom'){out+=' bottom: 0; right: 25%; ';}else{out+=' transform: rotate(-90deg); transform-origin: 100% 0; top: 25%; right: 40px; ';}out+=' cursor: pointer; border-radius: 5px 5px 0 0; color: white; background-color: #11a9cc; } * { transition: all 0.3s; font-size: 14px; } .overlay { position: fixed; left: 0; right: 0; top: 0; bottom: 0; background: rgba(255, 255, 255, 0.3); display: none; opacity: 0; } .show.overlay { display: block; opacity: 1; } form { width: 300px; max-width: 90%; background: white; padding: 20px 30px; box-shadow: 0 0 40px rgba(0, 0, 0, .25); border-top: 2px solid #11a9cc; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); } input, textarea { margin-bottom: 10px; border: none; border-bottom: 1px solid #cccccc; padding: 10px 0; width: 100%; } input:focus, textarea:focus, input:active, textarea:active  { border-bottom: 1px solid #11a9cc; } button { display: block; margin: 10px auto 0; padding: 10px 50px; } textarea { height: 75px; resize: none; } button { color: #11a9cc; background-color: white; border-radius: 100px; cursor: pointer; border: 1px solid #11a9cc; -box-shadow: 0 0 2px rgba(0, 0, 0, .1), 0 2px 4px rgba(0, 0, 0, .25); } button:hover, button:focus { color: white; background-color: #11a9cc; -box-shadow: 0 0 4px rgba(0, 0, 0, .15), 0 4px 8px rgba(0, 0, 0, .3); } button:focus, input:focus, textarea:focus { outline: none; } .close { float: right; right: -20px; margin: -20px -30px; width: 15px; height: 15px; cursor: pointer; padding: 10px; } .yolo { fill: #11a9cc; }</style>';return out;
};