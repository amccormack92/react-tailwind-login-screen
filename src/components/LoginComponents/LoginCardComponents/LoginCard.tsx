import LoginCardDesktop from "./LoginCardDestop";
import LoginCardMobile from "./LoginCardMobile";

export default function LoginCard() {
  return (
    <>
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
        <div className="bg-white p-0 rounded-3xl shadow-2xl shadow-[#A1A19F] w-11/12 h-5/6 lg:w-3/4 relative">
          {/* Mobile Layout */}
          <LoginCardMobile />
          {/* Desktop Layout */}
          <LoginCardDesktop />
        </div>
      </div>
    </>
  );
}
