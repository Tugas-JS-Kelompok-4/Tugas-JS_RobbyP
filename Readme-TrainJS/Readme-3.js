// Count Unique Values 
const countUniqueValues = (array) => {
    const resultArray = []
    for (const item of array) {
        if(!resultArray.includes(item)) resultArray.push(item)
    }
    console.log(resultArray.length);
}
 

// Function Combine Name Using Array and String
function joinfullName (Description, Name) {
    console.log(Description + " " + Name[0] + " " + Name[1] + " " + Name[2] + " " + Name[3]);
}

joinfullName ("My Name is" ,["Robby", "Putra", "Adhiguna", "Rantung"])