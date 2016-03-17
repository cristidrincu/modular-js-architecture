var synetoCompleteTeam = ["cristi", "robert", "csaba", "dan", "roberto", "vadim", "dragos", "olivia", "romeo", "dan dan"];

//extract the marketing team
var marketingTeam = synetoCompleteTeam.slice(synetoCompleteTeam.indexOf("vadim"), synetoCompleteTeam.indexOf("romeo"));

console.log("Syneto complete team before slice: " + synetoCompleteTeam);
console.log("Syneto complete team after slice: " + synetoCompleteTeam);
console.log("Marketing team after slicing syneto complete team: " + marketingTeam);