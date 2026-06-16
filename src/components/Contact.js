import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    if (!name && !message) {
      alert("Field is required");
      return;
    }
    setName("");
    setMessage("");
    alert("Thank you for Submitting");
  };
  return (
    <>
      <div className="m-auto w-2/12">
        <h1 className="font-bold text-4xl text-center my-8">Contact Us</h1>
      </div>
      <div className="w-6/12 m-auto">
        <div className="m-auto w-[45%] flex justify-between">
          <input
            placeholder="name"
            className="border border-black p-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="message"
            className="border border-black p-2 rounded-md"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="w-32 bg-green-200 self-center rounded-md shadow-md mt-10 h-10 m-auto justify-center flex">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
};
export default Contact;
