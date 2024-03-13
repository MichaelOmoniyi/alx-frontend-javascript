interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Michael",
    lastName: "Omoniyi",
    age: 19,
    location: "Lagos, Nigeria",
};

const student2: Student = {
    firstName: "Deborah",
    lastName: "Omoniyi",
    age: 17,
    location: "Lagos, Nigeria",
};

// type studentsList = Array<{ firstName: string; lastName: string; age: number; location: string; }>;

const studentsList: Student[] = [student1, student2];

function renderTable() {
    const table = document.createElement("table");
    studentsList.forEach(student => {
        const row = table.insertRow();
        const firstNameCell = row.insertCell();
        firstNameCell = student.firstName;
        const locationCell = row.insertCell();
        locationCell = student.location;
    });
    document.body.appendChild(table);
}

renderTable();
