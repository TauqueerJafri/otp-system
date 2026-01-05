import React, { useState, useRef } from "react";
import { Button } from "./buttons";

export const Otp = ({ length = 6 }) => {
    const [otp, setOtp] = useState(Array(length).fill(""));
    const inputRef = useRef([]);

    //when user first types -> validate input, update OTP array, move focus to next input.
    const handleChange = (element, index) => {
        const value = element.value;

        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp]; //[1,2,3,4,"",""]
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < length - 1) {
            inputRef.current[index + 1].focus();
        }
    }

    //when the box is empty and user presses backspace -> focus move to the previous box
    const handleKeyDown = (element, index) => {
        if (element.key === "Backspace" && !otp[index] && index > 0) {
            inputRef.current[index - 1].focus()
        }
    }

    return (
        <div>
            <div className="flex items-center justify-center space-x-2 pb-8">
                {otp.map((input, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={input}
                        onChange={(e) => handleChange(e.target, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        ref={(el) => (inputRef.current[index] = el)}
                        className="w-8 h-10 text-xl text-center text-white bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-1 focus:ring-white/60"
                    />
                ))}
            </div>
            <Button disabled={!otp.every((digit) => digit !== "")}>Verify</Button>
        </div>

    )
}
