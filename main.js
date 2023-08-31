const UL = document.querySelectorAll('ul>li>span')

const table = document.querySelector('table');
table.addEventListener('click', handler)


function handler(event) {
    if (event.target.tagName !== 'TD') return false;
    let data = [...event.target.parentNode.children];
    let text = getDataFromTd(data);
    // console.log(text);
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