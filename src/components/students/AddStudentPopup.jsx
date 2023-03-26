import React, { useState } from 'react';
import H2 from '../titels/H2';

function AddStudentPopup(props) {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
      name: name,
      grade: grade,
    };

    props.addStudent(newStudent);

    // Clear the form
    setName('');
    setGrade('');
  };

  return (
    <div className="p-4 bg-white shadow-xl popup">
      <div className="popup-inner">
        <H2>Add New Student</H2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <label>
            Grade:
            <input type="text" value={grade} onChange={handleGradeChange} />
          </label>
          <button type="submit">Add Student</button>
        </form>
        <button onClick={props.closePopup}>Close</button>
      </div>
    </div>
  );
}

export default AddStudentPopup;
