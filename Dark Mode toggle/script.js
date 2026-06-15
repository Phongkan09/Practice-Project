const color = document.body;
const toggle = document.getElementById('themeToggleBtn');
const savedTheme = localStorage.getItem('myTheme');

if (savedTheme === 'dark') {
    color.classList.add('dark-theme')
} else if(savedTheme === 'light'){
    color.classList.remove('dark-theme')
}

toggle.addEventListener('click', () => {
    color.classList.toggle('dark-theme');

    if (color.classList.contains('dark-theme')) {
        localStorage.setItem('myTheme', 'dark');
    } else {
        localStorage.setItem('myTheme', 'light')
    }
});


