function tellFortune(jobTitle,location,partnerName,numberOfChildren){
  return `You will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children`;
}
const scenario1 = tellFortune("programmer", "New York", "Rana", 2);
const scenario2 = tellFortune("teacher", "Los Angeles", "David", 3);

console.log(scenario1);
console.log(scenario2);