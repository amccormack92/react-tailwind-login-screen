import LoginBackground from "../components/LoginComponents/LoginBackground";
import LoginCard from "../components/LoginComponents/LoginCardComponents/LoginCard";

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
