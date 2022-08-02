import { element } from "./utils";
import { add, format } from "date-fns";
import { cyclePriority, deleteProject, editProjectBox as editProject, finishProject, renderProject } from "./projectUI.js";
import { renderTask } from "./projectUI.js";


import settingsIcon from "./img/cog.svg";
import expandIcon from "./img/expand.svg";
import finishIcon from "./img/finish-task.svg";
import { compare } from "semver";
import { priorityStyle } from "./taskUI";
import { addNewProject } from "./content";
// Create cards to display projects in workspace



// Create a card to represent the project in small detail, and return reference to the DOM object of that card.
// The card is divided vertically into different sections which are customizable here
const createProjectCard = (project) => {

    // Will be returned
    const card = element('div', {'class': 'card project-card'})
   

    const titleBar = () => {
        const titleBar = element('div', {'class': 'card-button-bar'});    
            const title = element('h3', {'class': 'card-title'});
                title.textContent = project.content.getTitle();
            const settings = element('input', {'type': 'image', 'src': settingsIcon, 'alt': 'settings', 'class': 'card-button'})
                settings.addEventListener('click', (e) => openSettings(e.target, project))
            titleBar.appendChild(title);
            titleBar.appendChild(settings);

        return titleBar;
    }


    const content = () => {

        const goal = element('p', {'class': 'card-content card-goal'});
        goal.textContent = project.content.getGoal();

        return goal;
    }

    const deadlineContainer = () => {

        const container = element('div', {'class': 'card-deadline deadline-container'})
            const daysLeft = element('div', {'class': 'card-deadline-days'});
            const dueDate = element('div', {'class': 'card-due-date'})
                dueDate.textContent = format(project.content.getDeadline(), 'MM/dd/yy');
            daysLeft.textContent = `${getDaysRemaining(project)} days left`;
            
            container.appendChild(daysLeft);
            container.appendChild(dueDate);

        return container;
    }
   
    const buttonBar = () => {

        const buttonBar = element('div', {'class': 'card-button-bar'})

            const expandButton = element('input', {'type': 'image', 'src': expandIcon, 'alt': 'Expand project', 'class': 'card-button'})
                expandButton.addEventListener('click', () => renderProject(project));

            const percentageContainer = element('div', {'class': 'card-info card-percent-container'})
            const percentageLeft = element('p', {'class': 'card-percentage'})
            const projectCount = project.tasks.getTaskList();


            if (projectCount.length > 0){
                const completedCount = project.tasks.getCompletedTasks();
                const completionPercentage = Math.round((completedCount.length /projectCount.length) * 100)

                percentageLeft.textContent = `complete: ${completedCount.length}/${projectCount.length} (${completionPercentage}%)`
                if (completionPercentage === 100){
                    console.log('complete')
                    percentageContainer.classList.add("card-completed")
                   
                }
                percentageContainer.appendChild(percentageLeft)
            }
            

        
            const finishButton = element('input', {'type': 'image', 'src': finishIcon, 'alt': 'Complete project', 'class': 'card-button'});
                finishButton.addEventListener('click', () => finishProject(project));
        
                
        
        buttonBar.appendChild(finishButton)
        buttonBar.appendChild(percentageContainer)
        buttonBar.appendChild(expandButton);
        return buttonBar;
    }

    card.appendChild(titleBar());
    card.appendChild(content());
    card.appendChild(deadlineContainer());
    card.appendChild(buttonBar());

    return card;
}

// Simply returns days between due date and current date
const getDaysRemaining = (project) => {

    const dueDate = project.content.getDeadline();
    const today = Date.now();
    
    
    return format((dueDate - today), 'dd') 


}

const openSettings = (parentButton, project) => {

    console.log('open settings menu')
    const parentCard = parentButton.parentNode.parentNode;
    console.log(parentCard)
    // popup menu
    parentButton.classList.add('active-settings-button')

    settingsMenu(parentCard, project)

}

// Gear menu for quick access to various options
const settingsMenu = (card, project) => {
    console.log(card);
    console.log('settings menu')
    const container = element('div', {'id': 'context-menu-container'});
    const menu = element('div', {'id': 'context-menu'});
    const menuItems = element('ul', {'id': 'menu-items menu-list'});

    const open = element('li', {'class': 'menu-open menu-item', });
    open.textContent = 'open';
        open.addEventListener('click', () => {
            renderProject(project);
            close();
        });

    const edit = element('li', {'class': 'menu-edit menu-item'});
    edit.textContent = 'edit';
        edit.addEventListener('click', () => {
            renderProject(project);
            editProject(project);
            close();
        })
    const toggle = element('li', {'class': 'menu-toggle menu-item'});
    toggle.textContent = `change priority(${priorityStyle(project.content).priorityText.toLowerCase()})`
        toggle.addEventListener('click', () => {
            cyclePriority(project);
        });
    const finish = element('li', {'class': 'menu-finish menu-item'});
            finish.textContent = 'toggle completion';
            finish.addEventListener('click', () => {finishProject(project)})        
        
    const del = element('li', {'class': 'menu-delete menu-item'});
    del.textContent = 'delete project';
        del.addEventListener('click', () => {
            console.log('cli')
            deleteProject(project);
        })

   


    menuItems.appendChild(open);
    menuItems.appendChild(edit);
    menuItems.appendChild(toggle);
    menuItems.appendChild(finish);
    menuItems.appendChild(del);

    menu.appendChild(menuItems);
    container.appendChild(menu);
    card.appendChild(container);

    const close = () => {

        container.remove();

    }


}





export { createProjectCard}



