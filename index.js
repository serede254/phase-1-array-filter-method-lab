const drivers=[];

function findMatching(drivers,query){
    return drivers.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}
console.log(findMatching(drivers,"Bobby"));

function fuzzyMatch(drivers,query){
   // drivers.filter(drivers.startsWith("Sa"))
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

console.log(fuzzyMatch);

function matchName(drivers,query){
    return drivers.filter(driver =>driver.name.toLowerCase() === query.toLowerCase());
}
console.log(matchName(drivers,"Bobby"));