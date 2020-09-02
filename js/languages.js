var languages;

// get translations and store them in the languages variable
$.getJSON("data/translations.json", function(translations) {
    languages = translations;
    changeLang();
})
// log potential errors
.fail(function (jqxhr, status, error) {
    console.log('error', status, error);
});

// change the language to the current window's hash
function changeLang() {
    var element;

    if (languages !== undefined && window.location.hash) {
        switch (window.location.hash) {
            case "#en":
                for (text in languages.en) {
                    element = document.getElementById(text.toString());
                    element.textContent = languages.en[text];
                }
                break;
            case "#es":
               for (text in languages.es) {
                   element = document.getElementById(text.toString());
                   element.textContent = languages.es[text];
               }
               break;
            case "#zh":
                for (text in languages.zh) {
                    element = document.getElementById(text.toString());
                    element.textContent = languages.zh[text];
                }
                break;
            default:
        }
    }
}

// change the window's hash to en, then change the language of the site
function changeToEN() {
    window.location.hash = "#en";
    sessionStorage.setItem("oldHash", "#en");

    changeLang();
}

// change the window's hash to es, then change the language of the site
function changeToES() {
    window.location.hash = "#es";
    sessionStorage.setItem("oldHash", "#es");

    changeLang();
}

// change the window's hash to zh, then change the language of the site
function changeToZH() {
    window.location.hash = "#zh";
    sessionStorage.setItem("oldHash", "#zh");

    changeLang();
}

// when a new page loads, load the previously selected language
window.onload = function() {
    if (sessionStorage.getItem("oldHash")) {
        window.location.hash = sessionStorage.getItem("oldHash");
        changeLang();
    }
};
