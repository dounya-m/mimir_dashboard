import React, { useState } from 'react';
import H2 from '../titels/H2';
import AddButton from '../button/AddButton';
import {storage} from '../../firebase'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'

function AddStudentPopup(props) {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [password, setPassword] = useState('');
    const [uploading, setUploading] = useState(null)
    
    const uploadImage = () => {
        if (uploading == null) return;
    
    const imageRef = ref(storage, `userProfile/${uploading.name + v4()}`);
    uploadBytes(imageRef, uploading)
        .then((snapshot) => {
        getDownloadURL(snapshot.ref)
            .then((url) => {
            console.log(url); 
            })
            .catch((error) => {
            console.error('Error getting download URL:', error);
            });
            
        })
        .catch((error) => {
        console.error('Error uploading image:', error);
        });
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = {
            name: name,
            lastname: lastname,
            email : email,
            image : image,
            password : password
        }
        console.log(newStudent);
        fetch('http://localhost:5000/api/mimir/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(newStudent)
                })
                .then(res => {
                    if (res.ok) {
                        return res.json()
                }
                })
    };
    
 

  return (
    <div className="p-4 bg-white shadow-xl popup">
      <div className="popup-inner">
            <div className='flex justify-between'>
            <H2>Add New Student</H2>
            <button className='hover:text-gray-400' onClick={props.closePopup}>X</button>
            </div>
        <form className='grid grid-cols-2 gap-4 my-8'
        onSubmit={handleSubmit}>
            <label className='flex flex-col gap-1  text-[14px] font-semibold'>Name : 
                <input onChange={(e) => (setName(e.target.value))} required
                className='p-1 font-normal border-2 rounded-sm' type="text" name="name"  placeholder='name ' />
            </label>
            <label className='flex flex-col gap-1  text-[14px] font-semibold'>Last name :
                <input onChange={(e) => (setLastname(e.target.value))} required
                className='p-1 font-normal border-2 rounded-sm' type="text" name="lastname"  placeholder='name ' />
            </label>

            <label className='flex flex-col gap-1  text-[14px] font-semibold'>Email:
                <input onChange={(e) => (setEmail(e.target.value))} required
                className='p-1 font-normal border-2 rounded-sm' type="email" name="email"  placeholder='name ' />
            </label>
            <label className='flex flex-col gap-1  text-[14px] font-semibold'>Password:
                <input onChange={(e) => (setPassword(e.target.value))} required
                className='p-1 font-normal border-2 rounded-sm' type="password" name="password"  placeholder='name ' />
            </label>

            <label for="dropzone-file" className="items-center justify-center w-full h-48 col-span-2 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer fx-col colflex bg-gray-50 dark:hover:bg-bray-800 ">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input onClick={uploadImage()} 
                onChange={(e) => (setUploading(e.target.files[0]))}   required
                id="dropzone-file" type="file" className="hidden" />
                
            </label>


        <AddButton onSubmit={handleSubmit}>Add Student</AddButton>
          <button type="submit">Add Student</button>
        </form>
        <div>
            {/* <input type="file" 
            onClick={uploadImage()} 
            onChange={(e) => (setUploading(e.target.files[0]))} 
            /> */}
            {/* <button>Upload</button> */}
        </div>
      </div>
    </div>
  );
}

export default AddStudentPopup;
