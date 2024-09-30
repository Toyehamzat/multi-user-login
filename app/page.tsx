import LoginForm from "@/components/form/loginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Multi-User Login System</h1>
      <LoginForm />
    </main>
  );
}
