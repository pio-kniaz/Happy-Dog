import { useEffect } from 'react';

function RegisterPage() {
  useEffect(() => {
    console.log('RegisterPage mounted');
  }, []);
  return (
    <div>
      Register Page
    </div>
  );
}

export default RegisterPage;
