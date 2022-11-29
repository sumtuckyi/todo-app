const endDate = document.getElementById("endDate");
const ddayform = document.getElementById("d-day-form");
const ddayCount = document.getElementById("d-day");

const HIDDEN2_CLASSNAME = "hidden";
const STILL_KEY = "STILL";
const DDAY_KEY = "D-DAY";
//const ENDDATE_KEY = "ENDDATE";


function D_DAY_COUNTER(event){
    event.preventDefault();
    ddayform.classList.add(HIDDEN2_CLASSNAME);
    const dday = endDate.valueAsNumber;
    const today = new Date();
    const difference = dday - today;
    const remains = Math.ceil(difference/(1000*3600*24)) - 1;

    localStorage.setItem(STILL_KEY, remains);
    localStorage.setItem(DDAY_KEY, dday);
    paintDday(remains);
}

ddayform.addEventListener("submit", D_DAY_COUNTER);
const d_day = localStorage.getItem(DDAY_KEY);

function paintDday(remain){

    ddayCount.innerText = `until D-DAY still.. ${remain} days`;
    ddayCount.classList.remove(HIDDEN2_CLASSNAME);
}

function updateDday(){
    const dday = localStorage.getItem(DDAY_KEY);
    const today = new Date();
    const difference = dday - today;
    const remains = Math.ceil(difference/(1000*3600*24)) - 1;

    ddayCount.innerText = `until D-DAY still.. ${remains} days`;
    ddayCount.classList.remove(HIDDEN2_CLASSNAME);
}

const savedDday = localStorage.getItem(STILL_KEY);

if(savedDday === null || savedDday <= 0){
    ddayform.classList.remove(HIDDEN2_CLASSNAME);
    ddayform.addEventListener("submit", D_DAY_COUNTER);
}
    else {
        updateDday();
    //paintDday(savedDday);
    //setInterval(paintDday, 1000);
}