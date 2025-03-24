import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#0f0715] pb-16 pt-16">
      <div>
        <Image
          src="/images/main.png"
          alt="logo"
          width={180}
          height={180}
          className="mx-auto"
        />
      </div>
      <div className="flex flex-wrap justify-center text-white font-bold items-center space-x-10 space-y-4">
        <div className="space-y-6">Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Projects</div>
        <div>Contacts</div>
      </div>
      Footer
    </div>
  );
};

export default Footer;
