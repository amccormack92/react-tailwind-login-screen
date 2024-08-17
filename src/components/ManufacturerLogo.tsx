import Logo from "../assets/bmw.svg";

export default function ManufacturerLogo() {
  return (
    <>
      <img
        src={Logo}
        alt="Manufacturer Logo"
        className="h-11/12 w-1/2 md:w-6/12 xl:w-5/12 md:absolute md:bottom-full mb-12 md:mb-0 mt-12 md:mt-0"
      />
    </>
  );
}
