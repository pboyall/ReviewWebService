var wff = require('../WorkflowFunctions.js');
var w = require('../Workflow.js');

console.log(wff.getStartNode(3));
console.log(wff.Initialise(1, 3));

w.InitialiseWorkflow(1, 3)
    .then();