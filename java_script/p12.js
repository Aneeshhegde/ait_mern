const personDetails = { name: 'Nithin', age: 40 };
const locationDetails = { place: 'Mysuru' };

const person = {
  ...personDetails,
  ...locationDetails,
  gender: 'male'
};

console.log(person);
