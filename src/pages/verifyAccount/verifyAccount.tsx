import React, {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';
import Google from '@/assets/images/google.svg';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import queryString from 'query-string';

const VerifyAccount = () => {
  const [seconds, setSeconds] = useState(4 * 60); // Adjust for 4 minutes (4 minutes * 60 seconds/minute)
  const queryParams = queryString.parse(location.search);
  const email = queryParams.email;

  useEffect(() => {
    let intervalId = null;

    if (seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60); // Calculate minutes from remaining seconds
  const remainingSeconds = seconds % 60; // Calculate remaining seconds within the current minute
  // Function to format time with leading zeros
  const formatTime = time => String(time).padStart(2, '0');

  return (
    <React.Fragment>
      <div className="mb-space600">
        <h1 className="text-[1.5rem] text-primary font-bold">Enter OTP</h1>
        <p className="text-[0.8rem] text-gray002">
          Enter 6-digit OTP sent to you
        </p>
      </div>
      <form className="flex flex-col justify-between h-[65vh]">
        <div className="flex flex-col gap-space200 ">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <Button className="w-full">Submit</Button>
          <p className="text-[0.8rem] leading-4 text-gray002">
            Resend code in
            <span className="text-blue001">
             {' '} {formatTime(minutes)}:{formatTime(remainingSeconds)}
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-space100">
          <Button className="w-fit bg-transparent" variant="outline">
            <img src={Google} className="mr-3" /> Sign in with Google
          </Button>
          <span className="text-[0.8rem]">
            New user? <a>Sign up</a>
          </span>
        </div>
      </form>
    </React.Fragment>
  );
};

export default VerifyAccount;
