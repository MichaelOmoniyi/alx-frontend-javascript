namespace Subject {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class CPP extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }

        getAvailableTeacher(): string {
            if(this.Teacher?.experienceTeachingC){
                return `Available Teacher: ${this.Teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}
