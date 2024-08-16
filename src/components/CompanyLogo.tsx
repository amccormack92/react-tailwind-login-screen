import Logo from "../assets/bmw.svg";

export default function CompanyLogo() {
  return (
    <>
      <img
        src={Logo}
        alt="Company Logo"
        className="h-11/12 w-1/2 md:w-8/12 xl:w-7/12 mb-12 mt-12"
      />
    </>
  );
}
