import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import HeadSection from "../components/HeadSection";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const notify = () =>
    toast("Sucessfully Sent", {
      duration: 9000,
      position: "top-center",
      style: {},
      className: "",
      icon: "👏",
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

  const func = () => {
    setSending(true);
    notify();
  };
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (data) => {
    fetch("/api/createMail", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
  };
  return (
    <>
      <HeadSection title="Ashish - Contact" />
      <section className="text-white bg-[#121212] body-font relative pt-28">
        {submitted ? (
          <>
            <Toaster position="top-center" reverseOrder={false} />

            <div className=" mx-auto flex  flex-col p-44 text-white">
              <h3 className="text-3xl font-bold">
                Thank you for texting me!!!
              </h3>
              <p>{`I'll be sure to text you back!!!!!!`}</p>
            </div>
          </>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto  flex max-w-2xl flex-col p-5"
          >
            <h3 className="text-sm text-slate-300">Wanna Chat With Me!!!</h3>
            <h4 className="text-3xl font-bold mb-10">Feel Free To Text Me</h4>

            <label className="mb-5 block">
              <span>Name</span>
              <input
                {...register("name", { required: true })}
                className="form-input text-black mt-1 block w-full rounded bg-gray-300 border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring placeholder:text-slate-500"
                placeholder="Ashish"
                type="text"
              />
            </label>
            <label className="mb-5 block">
              <span>Email</span>
              <input
                {...register("email", { required: true })}
                className="form-input text-black e mt-1 block w-full  bg-gray-300 rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring placeholder:text-slate-500"
                placeholder="asespandey2@gmail.com"
                type="email"
              />
            </label>
            <label className="mb-5 block">
              <span>Message</span>
              <textarea
                {...register("message", { required: true })}
                className="form-textarea mt-1 text-black block w-full bg-gray-300 rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring placeholder:text-slate-500"
                placeholder="Awesome Dude"
                rows={8}
              />
            </label>

            <div className="flex flex-col p-5">
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
              {errors.comment && (
                <span className="text-red-500">Comment is required</span>
              )}
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>

            {sending ? (
              <input
                type="submit"
                className="focus:shadow-outline h-10 cursor-pointer rounded-sm bg-slate-600  font-bold 
          shadow hover:bg-slate-400 focus:outline-none "
                value="Sending... Please Wait A Sec"
              />
            ) : (
              <input
                type="submit"
                className="focus:shadow-outline h-10 cursor-pointer rounded-sm bg-slate-600  font-bold 
          shadow hover:bg-slate-400 focus:outline-none "
                onClick={func}
                value="Send"
              />
            )}
          </form>
        )}
      </section>
    </>
  );
};

export default Contact;
