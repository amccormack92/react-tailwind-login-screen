import ManufacturerLogo from "../../ManufacturerLogo";
import LoginForm from "../LoginForm";

export default function LoginCardMobile() {
  return (
    <>
      <div className="flex flex-col items-center w-full md:hidden">
        <ManufacturerLogo />
        <LoginForm />
      </div>
    </>
  );
}
