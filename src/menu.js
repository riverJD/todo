// Menu for manipulating content 

import { switchDisplayStyle } from "./content";
import { element } from "./utils";


const menu = () => {
const header = element('div', {'id': 'header'});
const stats = element('div', {'id': 'stats'});
const subHeader = element('div', {'id': 'sub-header'});

const toggleStyle = element('input', {'type': 'button', 'id': 'style-toggle', 'value': 'switch mode'});
    toggleStyle.addEventListener('click', () => {switchDisplayStyle()})

header.appendChild(toggleStyle)
header.appendChild(stats);
header.appendChild(subHeader);


return header;
}
export { menu}
