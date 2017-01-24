var repo = require('./taskRepository');

var task = function (data) {
    this.name = data.name;
    this.completed = false;
}

task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
        this.complete = true;
};

task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
    repo.save(this);
};

module.exports = task;

