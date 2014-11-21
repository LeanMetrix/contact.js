
(function() {
    var options = {
        message: 'Contact Us',
        position: 'right',
        textColor: 'white',
        backgroundColor: '#11a9cc'
    };

    var style = 'position: fixed; z-index: 100000001; height: 40px; line-height: 40px; padding: 0 15px; ' +
        (options.position === 'bottom'
            ? 'bottom: 0; right: 25%;'
            : 'right: 40px; transform: rotate(-90deg); transform-origin: 100% 0; top: 25%;') +
        'cursor: pointer; border-radius: 5px 5px 0 0;' +
        'color: white; background-color: #11a9cc';

    var addHtml = '<div id="contact-btn" style="' + style + '">CONTACT US</div>';

    document.body.innerHTML += addHtml;

    function showDialog() {
        document.getElementById('contact-overlay').className = 'overlay show';
    }

    function hideDialog() {
        document.getElementById('contact-overlay').className = 'overlay';
    }

    setTimeout(function() {
        document.getElementById('contact-btn').addEventListener('click', showDialog);
        document.getElementById('contact-close').addEventListener('click', hideDialog);
    });
})();
