export {};

const name : string = "Abc";
const title : number = 3;
const age : number | null | string = null;

const company : any = {};

interface Address {
  firstLine: string,
  secondLine?: string
  postcode: string
}

interface Person {
  name : string,
  age: number | null,
  address?: Address
}


let person : Person= {
  name: "abc",
  age: 19,
};

const Attendee: Person = {
  name : "Naman",
  age : null,
  address : {
    firstLine: "54",
    // secondLine: "43",
    postcode: "110019"
  }
}

const employment = {
  title: "manager",
  company: "Edureka",
};

const number = [2344,423,442,3423]
const combined = {...person, ...employment, title : "Sr Manager", ...number}

const personalContacts = [423421514353,55236254646]
const corporateContacts = [4253546464,6456464,64563456546,64564563456]

const contacts = [...personalContacts, ...corporateContacts];

console.log(contacts)

// combined.name = person.name;
// combined.age = person.age;
// combined.title = employment.title;
// combined.company = employment.company;
// Object.assign(combined, person, employment)





console.log(combined);
