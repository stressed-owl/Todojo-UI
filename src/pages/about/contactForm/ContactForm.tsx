import { ChangeEvent, useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  }

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const clearInputFields = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const submit = () => {
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      const data = {
        name: name,
        email: email,
        message: message,
      };
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
              value={name}
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
              value={email}
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
              value={phone}
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
              value={message}
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
