document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === "u" || e.key === "U")) { // Ctrl + U Disable
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && (e.key === "i" || e.key === "I")) { // Ctrl + Shift + I Disable
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && (e.key === "c" || e.key === "C")) { // Ctrl + Shift + C Disable
        e.preventDefault();
    }
    if (e.ctrlKey && e.key === "s") { // Ctrl + S Disable
        e.preventDefault();
    }
    if (e.ctrlKey && e.key === "p") { // Ctrl + P Disable
        e.preventDefault();
    }
});
