import LoginForm from "./LoginForm";
import BackgroundImage from "../assets/bm.jpg";
import ManufactureLogo from "../assets/bmw.svg";
import CompanyLogo from "../CompanyLogo";

export default function LoginCard() {
  return (
    <>
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
        <div className="bg-white p-0 rounded-3xl shadow-2xl shadow-[#A1A19F] w-11/12 h-5/6 lg:w-3/4 relative">
          {/* Mobile Layout */}
          <div className="flex flex-col items-center w-full md:hidden">
            <CompanyLogo />
            <LoginForm />
          </div>
          {/* Desktop Layout */}
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
                  <img
                    src={ManufactureLogo}
                    alt="Company Logo"
                    className="h-11/12 w-6/12 lg:w-5/12 absolute bottom-full "
                  />
                  <hr className="h-px w-7/12 absolute top-5 my-8 bg-white border-0 dark:bg-white"></hr>
                  <h1 className="text-4xl top-20 text-white absolute">
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
        </div>
      </div>
    </>
  );
}
