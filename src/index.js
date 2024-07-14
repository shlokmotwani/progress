import "./style.css";
import { differenceInDays } from "date-fns";
import { grid } from "./grid";

const GRID_SIZE = 10;
const SUCCESS_COLOR = "rgba(11, 117, 37, 0.9)";

let wrapper = document.createElement("div");
let titleDiv = document.createElement("div");
let title = document.createElement("span");
let gridDiv = document.createElement("div");
let currentGrid = grid(GRID_SIZE);
let totalDaysCount;

function daysCompleted() {
  let startDate = new Date("2024-07-01");
  let currentDate = new Date();
  return differenceInDays(currentDate, startDate);
}

function colorTheGrid() {
  let coloredCellsCount = 0;
  let childrenRows = currentGrid.children;
  for (let i = 0; i < childrenRows.length; i++) {
    let childrenCells = childrenRows[i].children;
    for (let j = 0; j < childrenCells.length; j++) {
      if (coloredCellsCount < totalDaysCount) {
        childrenCells[j].style.backgroundColor = SUCCESS_COLOR;
        coloredCellsCount++;
      }
    }
  }
}

wrapper.id = "wrapper";
titleDiv.id = "title-div";
gridDiv.id = "grid-div";
currentGrid.id = "grid";

title.textContent = "Retention";

titleDiv.appendChild(title);
gridDiv.appendChild(currentGrid);
wrapper.appendChild(titleDiv);
wrapper.appendChild(gridDiv);
document.body.appendChild(wrapper);

totalDaysCount = daysCompleted();
colorTheGrid();
