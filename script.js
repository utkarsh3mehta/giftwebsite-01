var i = 0;
var txt = ', I hope, to someone.'; /* The text */
var speed = 200; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typeWrite").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}