import React from 'react';



const sampleData = [

    { id: 1, name: 'John Doe', age: 25, city: 'New York', occupation: 'Engineer' },
  
    { id: 2, name: 'Jane Smith', age: 30, city: 'San Francisco', occupation: 'Designer' },
  
    { id: 3, name: 'Bob Johnson', age: 28, city: 'Chicago', occupation: 'Accountant' },
  
    { id: 4, name: 'Alice Brown', age: 35, city: 'Los Angeles', occupation: 'Teacher' },
  
    { id: 5, name: 'Charlie Wilson', age: 40, city: 'Houston', occupation: 'Doctor' },
  
    { id: 6, name: 'Eva Davis', age: 22, city: 'Miami', occupation: 'Artist' },
  
    { id: 7, name: 'Frank Miller', age: 32, city: 'Seattle', occupation: 'Software Engineer' },
  
    { id: 8, name: 'Grace Taylor', age: 45, city: 'Boston', occupation: 'Lawyer' },
  
    { id: 9, name: 'Henry Clark', age: 28, city: 'Denver', occupation: 'Marketing Manager' },
  
    { id: 10, name: 'Ivy Adams', age: 33, city: 'Atlanta', occupation: 'Entrepreneur' },
  
  ];


  function Table({ sampleData }) {
    const name = sampleData.name;
    const id=sampleData.id;
    const age=sampleData.age;
    const city=sampleData.city;
    const occupation=sampleData.occupation;
      
  
    return (
      <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>{id}</td>
        <td>{city}</td>
        <td>{occupation}</td>
       
      </tr>
    );
  }

  function SearchBar({ sampleData, filterText }) {
    return (
      <form>
        <input 
          type="text" 
          value={filterText} 
          placeholder="Search..."/>
        <label>
          <input 
            type="checkbox" 
            checked={sampleData} />
          {' '}
        show only search data
        </label>
      </form>
    );
  }


  


export default Table;