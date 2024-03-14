interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director extends DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getToWork(): stirng {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher extends TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getToWork(): stirng {
        return 'Cannot have a break';
    }

    workDirectorTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if(typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

const isDirector = (employee: Teacher | Director): boolean => employee instanceof Director;

const executeWork = (employee: Teacher | Director): string => {
    return isDirector(employee) ? (employee as Director).workDirectorTasks: (employee as Teacher).workTeacherTasks;
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

type Subjects = 'Math' | 'History';
const teachClass = (todayClass: Subjects): string => {
    return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}

teachClass('Math');
teachClass('History');
