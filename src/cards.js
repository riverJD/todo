import { element } from "./utils";
import { format } from "date-fns";
import { renderProject } from "./interface";


import settingsIcon from "./img/cog.svg";
import expandIcon from "./img/expand.svg";
import finishIcon from "./img/finish-task.svg";
// Create cards to display projects in workspace




const createProjectCard = (project) => {

    
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

    card.appendChild(titleBar());

    
    const content = () => {

        const goal = element('p', {'class': 'card-content card-goal'});
        goal.textContent = project.content.getGoal();

        return goal;
    }

    card.appendChild(content());

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
    card.appendChild(deadlineContainer());

    const buttonBar = () => {

        const buttonBar = element('div', {'class': 'card-button-bar'})
            const expandButton = element('input', {'type': 'image', 'src': expandIcon, 'alt': 'Expand project', 'class': 'card-button'})
                expandButton.addEventListener('click', () => renderProject(project));
        
            const finishButton = element('input', {'type': 'image', 'src': finishIcon, 'alt': 'Complete project', 'class': 'card-button'});
                finishButton.addEventListener('click', () => finishProject(project));
        
                
        
        buttonBar.appendChild(finishButton)
        buttonBar.appendChild(expandButton);
        return buttonBar;
    }
    card.appendChild(buttonBar());

    console.log(card)
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
    console.log(parentButton)
    // popup menu
    parentButton.classList.add('active-settings-button')
    const menu = () => {


    }
}



export { createProjectCard}


