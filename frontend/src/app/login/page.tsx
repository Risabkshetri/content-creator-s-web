import LoginForm from '@/components/loginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}