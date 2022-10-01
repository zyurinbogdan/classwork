const buttons = document.getElementById('buttons');
const res = Math.ceil(Math.random() * 3);

function onBtnClick (event) {
    
    if (res === 1 && event.target === buttons.children[0]) {
        console.log('BOOM');
        buttons.removeEventListener('click', onBtnClick);
        event.target.style.color = 'red';
    } else if (res === 1 && (event.target === buttons.children[1] || event.target === buttons.children[2])) {
        console.log('Shara');
        event.target.disabled = true;
        event.target.style.color = 'green';
    }

    if (res === 2 && event.target === buttons.children[1]) {
        console.log('BOOM');
        buttons.removeEventListener('click', onBtnClick);
        event.target.style.color = 'red';
    } else if (res === 2 && (event.target === buttons.children[0] || event.target === buttons.children[2])) {
        console.log('Shara');
        event.target.disabled = true;
        event.target.style.color = 'green';
    }

    if (res === 3 && event.target === buttons.children[2]) {
        console.log('BOOM');
        buttons.removeEventListener('click', onBtnClick);
        event.target.style.color = 'red';
    } else if (res === 3 && (event.target === buttons.children[0] || event.target === buttons.children[1])) {
        console.log('Shara');
        event.target.disabled = true;
        event.target.style.color = 'green';
    }
}


buttons.addEventListener('click', onBtnClick);