const UL = document.querySelectorAll('ul>li>span')

const table = document.querySelector('table');
table.addEventListener('click', handler)

const button = document.querySelector('.reset-btn')
button.addEventListener('click', resetData)

function handler(event) {
    if (event.target.tagName !== 'TD') return false;
    let data = [...event.target.parentNode.children];
    let text = getDataFromTd(data);
    showData(text);
}

function getDataFromTd(tdArr) {
    return tdArr.map((item) => item.innerText);
}

function showData(text) {
    return text.forEach((item, index) => {
        UL[index].textContent = item;
    });
}

function resetData() {
    UL.forEach((item) => {
        item.textContent = '';
    })
}