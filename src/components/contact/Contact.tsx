import {useRef, useState} from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      setErrMsg("Form reference is invalid.");
      return;
    }

    emailjs
        .sendForm('service_kgauu1i', 'template_640gk3l', form.current, 'f85SL_OtvhCvRO5-P')
        .then(
            (response) => {
              console.log("SUCCESS!", response);
              setSuccessMsg("Email sent successfully!");
              setErrMsg("");
              form.current?.reset(); // Reset form after success
            },
            (error) => {
              console.log("FAILED...", error.text);
              setErrMsg("Failed to send email. Please try again.");
            }
        );
  };



  return (
      <section id="contact" className="w-full min-h-screen flex flex-col items-center px-5 bg-[#191b1e] pb-15">
        <div className="w-full flex justify-center items-center text-center">
          <Title title="CONTACT" des="Contact With Me"/>
        </div>

        <div className="w-full flex flex-col lgl:flex-row justify-between items-start">
          <div className="w-full lgl:w-[40%]">
            <ContactLeft/>
          </div>

          <div className="w-full lgl:w-[60%] bg-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg">
            <form ref={form} className="w-full flex flex-col gap-4" onSubmit={sendEmail}>
              {errMsg && <p className="text-red-500 text-center">{errMsg}</p>}
              {successMsg && <p className="text-green-500 text-center">{successMsg}</p>}

              {/* First Row (Two Input Fields in One Row) */}
              <div className="flex flex-col lgl:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    name="user_name"
                    className="input w-full lgl:w-[48%] px-4 py-2 rounded-md border border-gray-600 focus:border-yellow-400 bg-[#2e2e2e] text-white outline-none transition-all duration-300"
                    required
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    name="user_phone"
                    className="input w-full lgl:w-[48%] px-4 py-2 rounded-md border border-gray-600 focus:border-yellow-400 bg-[#2e2e2e] text-white outline-none transition-all duration-300"
                    required
                />
              </div>

              {/* Second Row (Two Input Fields in One Row) */}
              <div className="flex flex-col lgl:flex-row gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    className="input w-full lgl:w-[48%] px-4 py-2 rounded-md border border-gray-600 focus:border-yellow-400 bg-[#2e2e2e] text-white outline-none transition-all duration-300"
                    required
                />
                <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    className="input w-full lgl:w-[48%] px-4 py-2 rounded-md border border-gray-600 focus:border-yellow-400 bg-[#2e2e2e] text-white outline-none transition-all duration-300"
                    required
                />
              </div>

              {/* Textarea */}
              <textarea
                  placeholder="Message"
                  name="message"
                  className="textarea w-full px-4 py-2 h-32 rounded-md border border-gray-600 focus:border-yellow-400 bg-[#2e2e2e] text-white outline-none resize-none transition-all duration-300"
                  required
              ></textarea>

              {/* Submit Button */}
              <button
                  type="submit"
                  className="btn w-48 h-12 font-bold text-white text-center px-6 py-3 rounded-md bg-black border-1 border-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg mx-auto"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>

      </section>
  );
};

export default Contact;
