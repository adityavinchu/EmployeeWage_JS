//UC9

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

let empDailyhrsmap =new Map();

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
    empDailyhrsmap.set(empHrs);
}

console.log(empDailyWageMap);
function totalWages(totalWage,dailyWage)
{
    return totalWage+dailyWage;
}
let empWage = calculateDailyWage(totalEmpHrs);

const findTotal=(totalWage, dailyWage)=>{return totalWage + dailyWage ;}

totalEmpHrs=Array.from(empDailyhrsmap.values()).reduce(findTotal,0);
let totalSalary=empDailyWageArray.filter(dailyWage=>dailyWage>0).reduce(findTotal,0);

console.log("Total : "+Array.from(empDailyWageMap.values()).reduce(totalWages,0));

let nonWorkingDays= new Array();
let partTimeWorkingDays= new Array();
let fullTimeWorkingDays= new Array();

empDailyhrsmap.forEach((value,key,map)=>{
    if(value==8)fullTimeWorkingDays,push(key);
    else if (value==4) partTimeWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("Full working days:"+fullTimeWorkingDays);
console.log("Part working days:"+partTimeWorkingDays);
console.log("Non Working Days:" +nonWorkingDays);