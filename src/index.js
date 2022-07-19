import './style.css';
import { getUrgency, ToDo} from './todo.js';


const destDate = new Date("7/25/2022");

const test = ToDo("New ggTitle", destDate, 3, "Test Description");


for (let items in test){
    console.log(items);
}
console.log(test.content.getContent())


console.log(getUrgency(test));