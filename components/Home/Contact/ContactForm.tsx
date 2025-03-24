import emailjs from "@emailjs/browser";
import { useState } from "react";
const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      email,
      phone: phoneNumber,
      interest: selectedOption,
      message,
    };

    emailjs
      .send(
        "service_9tclkb9", // <- replace with your service ID
        "template_8glc8dp", // <- replace with your template ID
        templateParams,
        "MRmu4rfF8erH2gW_R" // <- replace with your Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully! ✅");
          // Optionally clear the form
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNumber("");
          setSelectedOption("");
          setMessage("");
        },
        (error) => {
          alert("Failed to send message 😢, try again.");
          console.error(error);
        }
      );
  };
  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let's work together!
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Let's work together to build innovative solutions and create impactful
        technology. With my expertise in full-stack development, I am eager to
        contribute and collaborate for success.
      </p>
      {/* Input Fields */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 block w-full overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          ></input>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          ></input>
        </div>
        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          ></input>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          ></input>
        </div>
        {/* Dropdown Selection */}
        <div>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-full mt-5 bg-black text-white placeholder:text-gray-300 px-4 py-3.5 
              rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none
              focus:bg-white focus:text-black"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="developer">Developer</option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Fullstack Development</option>
            <option value="Analyst">Data Analyst</option>
            <option value="other">other</option>
          </select>
        </div>
        {/* Message Area */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          rows={8}
          placeholder="Message"
        ></textarea>
        {/* Button */}
        <div className="mt-4">
          <button className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
