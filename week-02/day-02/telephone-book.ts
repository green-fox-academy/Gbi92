'use strict';

let telephoneBook: any = {
  'William A. Lathan': '405-709-1865',
  'John K. Miller': '402-247-8568',
  'Hortensia E. Foster': '606-481-6467',
  'Amanda D. Newland': '319-243-5613',
  'Brooke P. Askew': '307-687-2982',
};

//What is John K. Miller's phone number?
console.log(telephoneBook['John K. Miller']);

//Whose phone number is 307-687-2982?
Object.keys(telephoneBook).forEach((key) => {
  if (telephoneBook[key] === '307-687-2982') {
    console.log(key);
  }
});

//Do we know Chris E. Myers' phone number?
console.log(telephoneBook['Chris E. Myers']); //nope
