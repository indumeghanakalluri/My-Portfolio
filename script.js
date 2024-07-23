// Toggle navigation menu
 document.querySelector('.nav-toggle').addEventListener('click', () => {
     document.querySelector('.nav-links').classList.toggle('show');
 });

 //Add event listener to project buttons
document.querySelectorAll('.project button').forEach((button) => {
    button.addEventListener('click', () => {
        // Add animation to project button
        button.classList.add('animate');
        setTimeout(() => {
            button.classList.remove('animate');
        }, 2000);
    });
});
