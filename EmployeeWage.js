{
    const IS_ABSENT=0;
    let EmpCheck=Math.floor(Math.random()*10)%2;
    if(EmpCheck==IS_ABSENT)
    {
        console.log("Employee is ABSENT");
    }
    else
    {
        console.log("Employee is PRESENT");
    }
}