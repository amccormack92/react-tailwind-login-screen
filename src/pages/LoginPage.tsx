import LoginBackground from "../components/LoginBackground";
import LoginCard from "../components/LoginCard";

export default function LoginPage() {
  return (
    <>
      <div className="flex min-h-screen overflow-hidden">
        <LoginBackground />
        <LoginCard />
      </div>
    </>
  );
}
