import { ChangeEvent, useState } from "react";
import { useCreateContactMutation } from "../../../services/todo";

const ContactForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [createContact] = useCreateContactMutation();

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({ ...prev, name: event.target.value }));
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({ ...prev, email: event.target.value }));
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({ ...prev, phone: event.target.value }));
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setUserData((prev) => ({ ...prev, message: event.target.value }));
  };

  const clearInputFields = () => {
    setUserData(() => {
      return {
        name: "",
        email: "",
        phone: "",
        message: "",
      };
    });
  };

  const submit = () => {
    if (
      userData.name.length > 0 &&
      userData.email.length > 0 &&
      userData.message.length > 0
    ) {
      const data = {
        name: userData.name,
        email: userData.email,
        message: userData.message,
      };
      createContact(data);
      setIsFormSubmitted(true);
      setTimeout(() => {
        clearInputFields();
        setIsFormSubmitted(false);
      }, 10000);
    }
  };

  return (
    <>
      {!isFormSubmitted && (
        <form
          action="/contact"
          className="flex flex-col mt-10 max-w-[425px] m-auto"
        >
          <label htmlFor="name" className="flex flex-col">
            Name
            <input
              className="border-black border-[1px] p-2 mt-2 rounded-md"
              placeholder="Sam"
              type="text"
              id="name"
              name="name"
              required
              value={userData.name}
              onChange={handleNameChange}
            />
          </label>

          <label htmlFor="email" className="flex flex-col mt-6">
            Email
            <input
              className="border-black border-[1px] p-2 mt-2 rounded-md"
              placeholder="samaltman@gmail.com"
              type="email"
              id="email"
              name="email"
              required
              value={userData.email}
              onChange={handleEmailChange}
            />
          </label>

          <label htmlFor="phone" className="flex flex-col mt-6">
            Phone
            <input
              className="border-black border-[1px] p-2 mt-2 rounded-md"
              placeholder="+380441111111"
              type="phone"
              id="phone"
              name="phone"
              required
              value={userData.phone}
              onChange={handlePhoneChange}
            />
          </label>

          <label htmlFor="message" className="flex flex-col mt-6">
            Message(max length 300)
            <textarea
              className="resize-none border-black border-[1px] p-2 mt-2 rounded-md"
              id="message"
              name="message"
              rows={10}
              required
              maxLength={300}
              placeholder="It's tough to imagine my life without Todojo..."
              value={userData.message}
              onChange={handleMessageChange}
            ></textarea>
          </label>

          <button
            className="bg-black text-white py-2 px-4 text-[17px] rounded-sm mt-7 max-w-[200px] w-full m-auto font-bold transition duration-200 hover:bg-[#fff] hover:text-black hover:duration-200"
            type="submit"
            onClick={submit}
          >
            Submit
          </button>
        </form>
      )}
      {isFormSubmitted && (
        <div className="transition-all duration-300 flex flex-col items-center mt-[50px]">
          <p>Thanks for contacting us!</p>
          <p>We will contact you as soon as possible</p>
        </div>
      )}
    </>
  );
};

export default ContactForm;
