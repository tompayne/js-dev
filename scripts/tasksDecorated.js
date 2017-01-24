var task = function (name) {
    this.name = name;
    this.completed = false;
}

task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
        this.complete = true;
};

task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
};

var myTask = new task('Legacy Task');
myTask.complete();
myTask.save();

var UrgentTask = function(name, priority) {
    task.call(this, name);
    this.priority = priority;
};

UrgentTask.prototype = Object.create(task.prototype);

UrgentTask.prototype.notify = function() {
    console.log('notifying important people');
};

UrgentTask.prototype.save = function () {
    this.notify();
    console.log('do special stuff before saving');
    task.prototype.save.call(this)
};

var ut = new UrgentTask('this is urgent', 1);

ut.complete();
ut.save();
console.log(ut);
//module.exports = task;