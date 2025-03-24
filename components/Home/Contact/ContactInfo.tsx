import { contactData } from "@/Data/data";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div>
      <div className="flex items-center space-x-10">
        <div className="flex flex-col bg-gradient-to-r h-10 justify-center rounded-full w-10 from-emerald-900 items-center md:h-16 md:w-16">
          <FaPhone className="h-4 text-white w-4 md:h-7 md:w-7" />
        </div>
        <div>
          <h1 className="text-lg text-white font-bold sm:text-xl">Phone</h1>
          <h1 className="text-base text-opacity-70 text-white sm:text-lg">
            {contactData.phone}
          </h1>
        </div>
      </div>
      <div className="flex items-center mb-8 mt-8 space-x-8">
        <div className="flex flex-col bg-gradient-to-r h-10 justify-center rounded-full w-10 from-emerald-500 items-center md:h-16 md:w-16 to-emerald-900">
          <FaEnvelope className="h-4 text-white w-4 md:h-7 md:w-7" />
        </div>
        <div>
          <h1 className="text-lg text-white font-bold sm:text-xl">
            Email Address
          </h1>
          <h1 className="text-base text-opacity-70 text-white sm:text-lg">
            {contactData.email}
          </h1>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <div className="flex flex-col bg-gradient-to-r h-10 justify-center rounded-full w-10 from-emerald-500 items-center md:h-16 md:w-16 to-emerald-900">
          <FaMap className="h-4 text-white w-4 md:h-7 md:w-7" />
        </div>
        <div>
          <h1 className="text-lg text-white font-bold sm:text-xl">Address</h1>
          <h1 className="text-base text-opacity-70 text-white sm:text-lg">
            {contactData.address}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
