import {useContext, useState} from 'react'
import {AuthContext} from '../../context/AuthContext'


function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {setUser} = useContext(AuthContext)



  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/mimir/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        console.log(data);
        window.location.replace('/dashboard');
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className=''>

        <form  onSubmit={handleLogin}
        className='flex flex-col items-center justify-center gap-5 sm:w-[60vw] lg:w-[20vw] '>
          <input  className='w-full px-2 py-2 text-sm bg-transparent border-2 border-black rounded-[5px]' placeholder='Email'
                type="email" 
                name='email'
                id='email'
                onChange={(e) => setEmail(e.target.value)}
          />
          <input  className='w-full px-2 py-2 text-sm bg-transparent border-2 border-black rounded-[5px]' placeholder='Password'
              type='password'
              name='password'
              id='password'
              onChange={(e) => setPassword(e.target.value)}
          />
            <button type='submit' className='w-full px-2 py-2 text-white bg-black rounded-[5px]'>login</button>
        </form>


    </div>
  )
}

export default LoginForm

