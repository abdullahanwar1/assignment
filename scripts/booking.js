/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let cost_per_day=35;
let day=0;
var mon=document.getElementById("monday");
mon.addEventListener("click",function(){colourChange(mon);});
var tues=document.getElementById("tuesday");
tues.addEventListener("click",function(){colourChange(tues);}); 
var wed=document.getElementById("wednesday");
wed.addEventListener("click",function(){colourChange(wed);});
var thur=document.getElementById("thursday");
thur.addEventListener("click",function(){colourChange(thur);});
var fri=document.getElementById("friday");
fri.addEventListener("click",function(){colourChange(fri);});
var clearButton=document.getElementById("clear-button");
clearButton.addEventListener("click",clear);
var full=document.getElementById("full");
var half=document.getElementById("half");
half.addEventListener("click",halfBtn);
full.addEventListener("click",fullBtn);
var calculated_cost=document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function colourChange(x)
{
    if(x.classList.contains("blue-hover"))
    {
        x.classList.remove("blue-hover");
        x.classList.add("clicked");
        day=day+1;
    }
    calculate();
}




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clear()
{
    mon.classList.remove("clicked");
    mon.classList.add("blue-hover");
    tues.classList.remove("clicked");
    tues.classList.add("blue-hover");
    wed.classList.remove("clicked");
    wed.classList.add("blue-hover");
    thur.classList.remove("clicked");
    thur.classList.add("blue-hover");
    fri.classList.remove("clicked");
    fri.classList.add("blue-hover");
    day=0;
    full.classList.add("clicked");
    half.classList.remove("clicked");
    calculate();
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfBtn()
{
    cost_per_day=20;
    half.classList.add("clicked");
    full.classList.remove("clicked");
    calculate();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullBtn()
{
    cost_per_day=35;
    full.classList.add("clicked");
    half.classList.remove("clicked");
    calculate();
}




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate()
{
    calculated_cost.innerHTML=cost_per_day*day;
}