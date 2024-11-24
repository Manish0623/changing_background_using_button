const BUTTON = document.querySelectorAll('.button');
const body = document.querySelector('body');

BUTTON.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (click) {
        console.log(click);
        console.log(click.target);

        if (click.target.id === 'green') {
            body.style.backgroundColor = 'green';

        }

        if (click.target.id === 'red') {
            body.style.backgroundColor = 'red';
        }
        if (click.target.id === 'blue') {
            body.style.backgroundColor = 'blue';
        }
        if (click.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow';
        } if (click.target.id === 'purple') {
            body.style.backgroundColor = '';
        }
    });
});

// document.querySelector('.box').addEventListener
//     ('click', function (CLICK) {
//         console.log(CLICK.target.parentNode);
//         let removeIt = CLICK.target.parentNode
//         removeIt.remove();

//     })  