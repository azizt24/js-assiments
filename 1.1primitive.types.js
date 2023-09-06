const message = "You enter a dimly lit room.";
let treasureCount = 3;
const key = {
  type: "golden",
  carvings: "intricate"
};
let isTrapActivated = false;
let secretPassage = null;
let mysteriousArtifact;
const ancientSymbol = Symbol("ancient");


console.log("Type of 'message':", typeof message);
console.log("Type of 'treasureCount':", typeof treasureCount);
console.log("Type of 'key':", typeof key);
console.log("Type of 'isTrapActivated':", typeof isTrapActivated);
console.log("Type of 'secretPassage':", typeof secretPassage);
console.log("Type of 'mysteriousArtifact':", typeof mysteriousArtifact);
console.log("Type of 'ancientSymbol':", typeof ancientSymbol);