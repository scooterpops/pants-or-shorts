import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LogInForm from '../../components/LogInForm/LogInForm';

export default function AuthPage({ setUser }) {
  return (
    <main>
      <h1>SignUp</h1>
      <SignUpForm setUser={setUser} />
      <h1>LogIn</h1>
      <LogInForm setUser={setUser}/>
    </main>
  );
}