//create an array called family which has your family members in order of their age

  //code here
    var family = ['Felomina', 'Manny', 'Michael', 'Russell'];


//Remove the oldest member of your family

  //code here
    family.splice(0,1);



//Add a new family member as the youngest member

  //code here
    family.push('youngestMember');


//LOOP over your array to see if you have a family member named 'Tyler'
// If you do, alert ('I have a Tyler'), if you do not, alert ('I have no Tylers')

  //Code here
    for (var i = 0; i < family.length; i++) {
        if (family[i] === 'Tyler') {
            alert('I have a Tyler')
        }
        else {
            alert('I have no Tylers')
        }
    }

// Remove the second oldest member of your family

  //Code here
    family.splice(1,1);;



//Write a function called 'reverse' that takes in a string and returns that string in reverse order

  //Function definition here
    var reverse = function(valueString) {
        var makeArray = valueString.split("");
        var reverseArray = makeArray.reverse();
        var convertBack = revereArray.join("");
        return convertBack
    };

  //Call the function here
    reverse('This is my string');