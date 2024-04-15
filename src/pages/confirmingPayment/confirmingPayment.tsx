import {Button} from '@/components/ui/button';
import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

function ConfirmingPayment() {
  const navigate = useNavigate();
  const location = useLocation();
  const dataFromSource = location.state;
  return (
    <React.Fragment>
      <h1 className="font-bold text-center text-primary">
        {dataFromSource.tag}
      </h1>
      <div className=" flex flex-col w-full h-[70vh] items-center justify-center ">
        <div className=" font-bold text-center text-[2rem] ">
          Thank you for making payment!
        </div>
        <p className="text-primary text-center mt-[1.1875rem] mb-6 ">
          We will confirm your payment and get back to you within 1 hour.
        </p>
      </div>
      <Button
        variant="outline"
        className="w-full hover:bg-[#1E427D] hover:text-white "
        onClick={() => {
          navigate('/');
        }}
      >
        Go back to Dashboard
      </Button>
    </React.Fragment>
  );
}
export default ConfirmingPayment;