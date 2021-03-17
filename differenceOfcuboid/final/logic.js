//function statement named find_difference with param a, b
function find_difference(a, b) {
    //return Math.abs method with param a.reduce method acc, curr arrow 
    //function acc * cur minus b.reduce method acc, curr arrow func
    //acc * cur
        return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
    }