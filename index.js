const addNumber = () => {
    const number = Math.ceil(Math.random()*100)
    console.log(number);
    localStorage.setItem("Number", number)
}
console.log('Hi My Name Is JavaScript');

const getNumber = () => {
    const number = localStorage.getItem('number');
    console.log('From Saved Get Number', number);
}