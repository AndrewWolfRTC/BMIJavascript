/*
	Scenario: A person's body mass index (BMI) is a value derived from
	the mass (weight) and height of the individual using the following
	formula:

	bmi = (weight in pounds / (height in inches * height in inches)) * 703

	The BMI is an attempt to quantify the amount of tissue mass (muscle,
	fat, and bone) in an individual, and then categorize that person as
	underweight, optimal weight, overweight, or obese based on that value.

	There is some debate about where on the BMI scale the dividing lines
	between categories should be placed.

	Commonly accepted BMI ranges are:
	---------------------------------
	Underweight: 		BMI < 18.50
	Optimal weight: 	BMI >= 18.50 and < 25.00
	Overweight: 		BMI >= 25.00 and < 30.00
	Obese: 				BMI >= 30.00
 */
//*******************************************************
/*
	Requirement :#1
	Declare and initialize global constants:
 */
const MINHEIGHT = 12;
const MAXHEIGHT = 96;
const MINWEIGHT = 1;
const MAXWEIGHT = 777;

const MAXUNDER  = 18.50;
const MINOVER   = 25.00;
const MINOBESE  = 30.00;
//*******************************************************
/*
	Requirement #7:
	Declare and initialize global accumulators
 */
var totalUnderweight   = 0;
var totalOptimalweight = 0;
var totalOverweight    = 0;
var totalObese         = 0;
//*******************************************************
/*
	Requirement #2:
	Put main() in a while loop.  Have no global variables,
	except the accumulators shown at the end of these
	requirements.

	In main(), at the end of each loop iteration, ask the
	user if s/he wants to run the program again and let them
	do so indefinitely if/as desired.
*/
function main()
{
    var height = 0;
    var weight = 0;
    var bmi = 0;
    var bmiStatus = "";

    var keepGoing = true;
    var again = "";
    var firstChar = "";

    while(keepGoing)
    {
        height      = inputHeight();
        weight      = inputWeight();
        bmi         = calculateBMI(height, weight);
        bmiStatus   = calculateBMIStatus(bmi);
        outputAllInfo(height, weight, bmi, bmiStatus);

        again = prompt("Run program again? (Y/N):", "Y");
        again = again.toUpperCase();
        firstChar = again.charAt(0);

        if(firstChar === "Y")
        {
            keepGoing = true;
        }
        else
        {
            keepGoing = false;
        }
    }
    outputAccumulators()
}
//*******************************************************
 /*
	Requirement #3:
	Input height; not allowing for blank, non-numeric,
	or out-of-range inputs.
 */
function inputHeight()
{
    var h = parseInt(prompt("Please enter a height between " +
                            MINHEIGHT + " and " + MAXHEIGHT, "72"));

    while(isNaN(h) || h < MINHEIGHT || h > MAXHEIGHT)
    {
        h = parseInt(prompt("INVALID INPUT \n" +
                            "Please enter a height between " + MINHEIGHT +
                            " and " + MAXHEIGHT, "72"));
    }
    return h;
}
//*******************************************************
/*
	Requirement #3:
	Input weight; not allowing for blank, non-numeric,
	or out-of-range inputs.
 */
function inputWeight()
{
    var w = parseInt(prompt("Please enter a weight between " +
                         MINWEIGHT + " and " + MAXWEIGHT, "175"));

    while(isNaN(w) || w < MINWEIGHT || w > MAXWEIGHT)
    {
        w = parseInt(prompt("INVALID INPUT \n" +
                         "Please enter a weight between " + MINWEIGHT +
                         " and " + MAXWEIGHT, "175"));
    }
    return w;
}
//*******************************************************
/*
	Requirement #4:
	Using the formula given, calculate the person's BMI
	to 2 decimal places.
 */
function calculateBMI(height, weight)
{
    return ((weight / (height * height)) * 703).toFixed(2);
}
//*******************************************************
/*
	Requirement #5:
	Using the calculated BMI and the table shown
	previously, determine the person's BMI status.
    Also, increment appropriate accumulators
*/
function calculateBMIStatus(bmi)
{
    var s = "";

    if (bmi > MAXUNDER)
    {
        s = "underweight";
        totalUnderweight++;
    }
    else if (bmi < MINOVER)
    {
        s = "Optimal Weight"
        totalOptimalweight++;
    }
    else if (bmi < MINOBESE)
    {
        s = "Overweight";
        totalOverweight++;
    }
    else
    {
        s = "Obese";
        totalObese++;
    }
    return s;
}
//*******************************************************
/*
	Requirement #6:
	Output each person's height, weight, calculated BMI,
	and status via a JavaScript alert dialog.
*/
function outputAllInfo(height, weight, bmi, bmiStatus)
{
    alert("Height: " + height + "\n" +
        "Weight: " + weight + "\n" +
        "BMI: " + bmi + "\n" +
        "BMI Status: " + bmiStatus);
}
//*******************************************************

/*
	Requirement #7 (cont'd):
	And at the end of the program (when the person no
	longer wants to input any more heights and weights),
	use one or more document.write() statements to print
	out the totals calculated above.
 */
function outputAccumulators()
{
    document.write("Total Underweight: " + totalUnderweight +
    "<br>" + "Total Overweight: " + totalOverweight + "<br>" +
    "Total Optimal Weight: " + totalOptimalweight + "<br>" +
    "Total Obese: " + totalObese);
}
//*******************************************************
