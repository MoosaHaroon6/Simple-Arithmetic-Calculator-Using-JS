let string = '';
let buttons = document.querySelectorAll('.btns');
buttons.forEach((btns) => {
    btns.addEventListener('click', (c) => {
        if (c.target.innerHTML === '=') {
            string = eval(string);
            document.querySelector('input').value = string ;
        }
        else if (c.target.innerHTML === 'AC') {
            string = ''
            document.querySelector('input').value = string ;
        }
        else {
            string += c.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});
// 




// let string = '';
// let buttons = document.querySelectorAll('.btns');
// 
// buttons.forEach((btn) => {
    // btn.addEventListener('click', (c) => {
        // if (c.target.innerHTML === '=') {
            // string = eval(string);
            // document.querySelector('input').value = string;
        // } else if (c.target.innerHTML === 'AC') {
            // string = '';
            // document.querySelector('input').value = string;
        // } else {
            // string += c.target.innerHTML;
            // document.querySelector('input').value = string;
        // }
    // });
// });





