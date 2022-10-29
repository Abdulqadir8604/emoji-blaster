
if (is_touch_enabled()) {

    //this is for touchscreen devices
    document.addEventListener('touchmove', function(e) {
        const math = Math.random();

        var emoSpanEl = document.createElement('span');
        emoSpanEl.classList.add('span');
        emoSpanEl.style.left = e.targetTouches[0].pageX + 'px';
        emoSpanEl.style.top = e.targetTouches[0].pageY + 'px';
        emoSpanEl.style.width = math*50 + 'px';
        emoSpanEl.style.height = math*50 + 'px';
        document.body.appendChild(emoSpanEl);
        let now = Date.now(),
        end = now + 2000;
        while (now < end) { now = Date.now(); }
        setTimeout(function() {
            emoSpanEl.remove();
        }, 7000);

        //below code is optional if you want to add text you can remove it if you want
        var txtSpanEl = document.createElement('div');
        txtSpanEl.classList.add('txtSpan');
        txtSpanEl.style.left = e.targetTouches[0].pageX + 'px';
        txtSpanEl.style.top = e.targetTouches[0].pageY + 'px';
        txtSpanEl.style.width = math*50 + 'px';
        txtSpanEl.style.height = math*50 + 'px';
        txtSpanEl.style.fontFamily = 'Lucida Handwriting';
        txt = document.createTextNode("Hii"); //change text ❤️ or clear it if you want, make sure to change the font size in css and also make changes in the similar code below
        txtSpanEl.appendChild(txt);
        document.body.appendChild(txtSpanEl);
        setTimeout(function() {
            txtSpanEl.remove();
        }, 7000);
        //end of optional code
        
    });
} else {
    //this is for desktop devices
    document.addEventListener('mousemove', function(e) {
        const math = Math.random();

        var emoSpanEl = document.createElement('span');
        emoSpanEl.classList.add('span');
        emoSpanEl.style.left = e.clientX + 'px';
        emoSpanEl.style.top = e.clientY + 'px';
        emoSpanEl.style.width = math*50 + 'px';
        emoSpanEl.style.height = math*50 + 'px';
        document.body.appendChild(emoSpanEl);
        setTimeout(function() {
            emoSpanEl.remove();
        }, 10000);

        //below code is optional if you want to add text you can remove it if you want
        var txtSpanEl = document.createElement('div');
        txtSpanEl.classList.add('txtSpan');       
        txtSpanEl.style.left = e.clientX + 'px';
        txtSpanEl.style.top = e.clientY + 'px';
        txtSpanEl.style.width = math*50 + 'px';
        txtSpanEl.style.height = math*50 + 'px';
        txtSpanEl.style.fontSize = math*30 + 'px';
        txtSpanEl.style.fontFamily = 'Lucida Handwriting';
        txt = document.createTextNode("Hii"); //change text❤️ or clear it if you want, make sure to change the font size in css and also make changes in the similar code above
        txtSpanEl.appendChild(txt);
        document.body.appendChild(txtSpanEl);
        setTimeout(function() {
            txtSpanEl.remove();
        }, 10000);
        //end of optional code

        });
}

function is_touch_enabled() {
    return ( 'ontouchstart' in window ) ||
           ( navigator.maxTouchPoints > 0 ) ||
           ( navigator.msMaxTouchPoints > 0 );
}