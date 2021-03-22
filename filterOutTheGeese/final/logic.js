//function statement named gooseFilter with parameter bird
function gooseFilter (birds) {
    //variable statment named geese, these are the strings that i 
    //want to remove from my bird array. so that i get an array of
    //only goose
        var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
    //return filter method with a birds property new name
    //apply a function on each element of the array of birds
    //fatarrow NOT OPERATOR geese includes (so basically geese does not 
    //include applied to bird array) 
    //bird parameter (this removes geese from bird array).
        return birds.filter( bird => !geese.includes(bird));
    };