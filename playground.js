const params = {
  id: 1,
};

console.log(params.id);

const idParams = params.id;
console.log(idParams);

// destructuring

const { id } = params;

// creation d'une variable id
// valeur de id : valeur de la propriété id dans params

console.log(id);

const threewa = {
  name: '3wa',
  budget: 1000000,
  teachers: 30,
  studentsPerTeacher: 25,
  slack: true,
  address: {
    city: 'Paris',
    street: '15 rue des tulipes',
  },
};

// const name = threewa.name;
// const budget = threewa.budget;
// const teachers = threewa.teachers;
// const studentsPerTeacher = threewa.studentsPerTeacher;
// const slack = threewa.slack;
// const street = threewa.address.street;

console.clear();
// const { name, budget, teachers, studentsPerTeacher, slack, street } = threewa;
// console.log(name, budget, teachers, studentsPerTeacher, slack, street);

// Rename declared variables

// const {
//   name: nameSchool,
//   budget,
//   teachers,
//   studentsPerTeacher,
//   slack,
//   street,
// } = threewa;

// // console.log(name);
// console.log(nameSchool);

// Rename declared variables

const {
  name: nameSchool,
  budget,
  teachers,
  studentsPerTeacher,
  slack,
  address: { street: streetSchool },
} = threewa;

// console.log(name);
console.log(streetSchool);
