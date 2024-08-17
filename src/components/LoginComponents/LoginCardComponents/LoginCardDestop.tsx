import LoginForm from "../LoginForm";
import BackgroundImage from "../../../assets/bm.jpg";
import ManufacturerLogo from "../../ManufacturerLogo";

export default function LoginCardDesktop() {
  return (
    <>
      <div className="h-full hidden md:flex">
        <div className="relative w-1/2 rounded-s-3xl">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center rounded-s-3xl"
            style={{
              backgroundImage: `url(${BackgroundImage})`,
            }}
          ></div>

          {/* Color Overlay */}
          <div className="absolute inset-0 bg-[#3c4046] bg-opacity-95 rounded-s-3xl">
            <div className="flex flex-col items-end top-1/2 relative right-10">
              <ManufacturerLogo />
              <hr className="h-px w-7/12 absolute top-5 my-8 bg-white border-0 dark:bg-white"></hr>
              <h1 className="lg:text-3xl text-2xl top-20 text-white absolute">
                MORGAN MOTORS
              </h1>
            </div>
          </div>
        </div>
        {/* <div className="w-1/2 bg-[#3c4046] rounded-s-3xl"></div> */}
        <div className="w-1/2 flex justify-center items-center">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
