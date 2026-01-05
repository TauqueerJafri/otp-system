import { useState } from 'react';
import './App.css'
import { Button } from './components/buttons'
import { Input } from './components/Input'
import { Otp } from './components/Otp'

function App() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-4 bg-gradient-to-b from-[#000033] to-[#1E2761]">
        {/* Heading */}
        <h1 className='text-2xl font-semibold text-slate-300 pb-6'>Let's Get Started</h1>

        {/* Description */}
        <p className="text-sm text-slate-300">
          Please confirm your email address. This data will not be stored.
        </p>

        <Input type='email' placeholder='Email Id' value={email} onChange={handleEmailChange} />

        <Button disabled={!isEmailValid}>Sign Up</Button>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-4 bg-gradient-to-b from-[#1E2761] to-[#000033]">
        <h1 className='text-2xl font-semibold text-slate-300 pb-6'>Check Your Email For A Code</h1>

        <p className="text-sm text-slate-300">
          Please enter the verification code sent to your email Id.
        </p>

        <Otp />
        <p className="text-sm text-slate-300">
          Can't find the email? Click <a href="..." className="underline">here</a> to resend.
        </p>
      </div>
    </>
  )
}

export default App
