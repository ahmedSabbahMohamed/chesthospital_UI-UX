import React from 'react'
import { FormContainer, LoginForm } from '../features/authentication';

const Login: React.FC = () => {
  return <div className="min-h-screen flex items-center justify-center">
    <FormContainer>
        <LoginForm />
    </FormContainer>
  </div>;
}

export default Login