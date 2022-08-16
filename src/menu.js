// Menu for manipulating content 

import { addNewProject, switchDisplayStyle } from "./content";
import { storage } from "./settings";
import { element } from "./utils";

const menu = () => {
const header = element('div', {'id': 'header'});
const stats = element('div', {'id': 'stats'});
const subHeader = element('div', {'id': 'sub-header'});

const toggleStyle = element('input', {'type': 'button', 'id': 'style-toggle', 'value': 'switch mode'});
    toggleStyle.addEventListener('click', () => {loadProjects()})

header.appendChild(toggleStyle)
header.appendChild(stats);
header.appendChild(subHeader);


return header;
}

const loadProjects = () => {

    console.log(storage.loadProject('0').content.getTitle());
    addNewProject(storage.loadProject('0'))


}

export { menu}
