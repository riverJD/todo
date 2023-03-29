// Menu for manipulating content 

import { addNewProject, switchDisplayStyle, renderProjectList, loadProjectsFromStorage} from "./content";
import { storage } from "./settings";
import { element } from "./utils";
import { renderProject } from "./projectUI";
import { createProjectCard } from "./cards";

const menu = () => {
const header = element('div', {'id': 'header'});
const stats = element('div', {'id': 'stats'});
const subHeader = element('div', {'id': 'sub-header'});

const toggleStyle = element('input', {'type': 'button', 'id': 'style-toggle', 'value': 'switch mode'});
    toggleStyle.addEventListener('click', () => {loadProjectDebug()})


const clearStorage = element('input', {'type': 'button', 'id': 'clear-data', 'value': 'clear data'});
    clearStorage.addEventListener('click', () => {clearSavedData()})



header.appendChild(toggleStyle)
header.appendChild(clearStorage);
header.appendChild(stats);
header.appendChild(subHeader);


return header;
}

const loadProjects = () => {

    console.log(storage.loadProject('0').content.getTitle());
    addNewProject(storage.loadProject('0'))

}

const clearSavedData = () => {

    console.log("ERASING STORED DATA")
    window.localStorage.clear();

}

const loadProjectDebug = () => {

    const projLoc = 0;
    console.log (`Attempting load project at location ${projLoc}...`);
    console.log(storage.loadProject(projLoc));
    loadProjectsFromStorage();
}

export { menu}
