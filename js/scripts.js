const listOfShopping = [
    'Pane',
    'Acqua',
    'Latte',
    'Uova',
    'Carne',
];

const list = document.querySelector('.my-list')
let i = 0;
//console.log(listOfShopping)

while (i < listOfShopping.length) {
    //console.log(i, listOfShopping[i])

    const newLi = document.createElement('li')
    list.innerHTML += `
        <li>
            ${listOfShopping[i]}
        </li>
    `;
    //console.log(i, listOfShopping[i])
    i++;
}
