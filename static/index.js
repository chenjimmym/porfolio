
$(document).ready(function () {

    $('body').scrollspy({ target: ".navbar", offset: 50 });
    $("#navbar_buttons a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }

    });

    var words = ["is a discipline.     ", "requires patients.     ", "is always solvable.     "];
    var scroll = document.getElementById('title_scroll');
    var wordCounter = 0;
    var characterCounter = 0;
    console.log(words);
    function updateText() {
        scroll.innerHTML = scroll.innerHTML + words[wordCounter][characterCounter++];
        if (characterCounter == words[wordCounter].length) {
            characterCounter = 0;
            wordCounter++;
            setTimeout(function () { }, 1000);
            scroll.innerHTML = ' ';
            if (wordCounter == words.length) {
                wordCounter = 0;
            }
        }
    }
    setInterval(updateText, 200);
})