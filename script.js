document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Keyingi sahifaga o‘tish
        window.location.href = "index2.html"; // auth papkadan chiqib dashboard papkaga
    }
});

document.getElementById('forgotPassword').addEventListener('click', function (e) {
    e.preventDefault();
    // Masalan recovery sahifasiga o‘tish
    window.location.href = "forgot.html"; // recovery.html boshqa papkada bo‘lsa yo‘lni o‘zgartiring
});

document.getElementById('signUp').addEventListener('click', function (e) {
    e.preventDefault();
    // Masalan register sahifasiga o‘tish
    window.location.href = "register.html"; // register.html auth papkada
});
