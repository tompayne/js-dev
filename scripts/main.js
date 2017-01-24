var task = require('./tasks');
var repo = require('./taskRepository');

var task1 = new task (repo.get(1));
var task2 = new task({name: 'create demo for modules'});
var task3 = new task({name: 'create demo for singletons'});
var task4 = new task({name: 'create demo for prototypes'});

task1.complete();
task2.save();
task3.save();
task4.save();
