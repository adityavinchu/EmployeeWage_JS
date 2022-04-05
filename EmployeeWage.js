//UC8

const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

const MAX_HRS_IN_MONTH=160;
const NUM_OF_WORKING_DAYS=20;


let totalEmpHrs=0;
let totalWorkingDays=0;


function getWorkingHours(EmpCheck)
{
    switch (EmpCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            
        default:
            return 0;
    }
}

let empDailyWageArray = new Array();
let empDailyWageMap = new Map(); 

function calculateDailyWage(empHrs)
{
    return empHrs * WAGE_PER_HOUR;
}

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let EmpCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(EmpCheck);
    //console.log(EmpCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calculateDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calculateDailyWage(empHrs));
}

console.log(empDailyWageMap);
function totalWages(totalWage,dailyWage)
{
    return totalWage+dailyWage;
}

//let empWage = calculateDailyWage(totalEmpHrs);
console.log("Total : "+Array.from(empDailyWageMap.values()).reduce(totalWages,0));