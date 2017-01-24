'use strict'


class task {
    constructor (data) {
        this.name = data.name;
        this.completed = false;
    };
complete () {
    console.log('completing task: ' + this.name);
        this.complete = true;
    };

save () {
    console.log('saving Task: ' + this.name);
    };

}

var task1 = new task('create demo for constructors');
var task2 = new task('create demo for modules');
var task3 = new task('create demo for singletons');
var task4 = new task('create demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
