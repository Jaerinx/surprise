import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import rightArrow from "/assets/right-arrow.png";
export default function Contact() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm({
    mode: "onTouched"
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  // Please update the Access Key in the .env
  const apiKey = "958c857c-db2b-416e-85b3-e47fa786d084";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Personal Portfolio",
      subject: "New submit from contact form :3"
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });

  return (
    <motion.div
      className="w-screen h-screen m-0 mb-[20vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative w-[40vw] text-white m-auto border-2 h-[80vh] border-x-darkpink border-y-katpink rounded-lg mt-[10vh] flex flex-col items-center">
        <motion.img
          src={rightArrow}
          alt=""
          whileHover={{ scale: 0.9 }}
          className="w-[2vw] absolute left-5 top-7 cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        />
        <div className="text-ariel m-0 p-0 text-[3vw] font-extrabold font-stretch-ultra-condensed font-style italic [letter-spacing:-0.4vw] text-katpink ">
          Contact Me
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="my-10 w-3/4">
          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: "none" }}
            {...register("botcheck")}
          ></input>

          <div className="mb-5">
            <input
              type="text"
              placeholder="Full Name"
              autoComplete="false"
              className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                errors.name
                  ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                  : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
              {...register("name", {
                required: "Full name is required",
                maxLength: 80
              })}
            />
            {errors.name && (
              <div className="mt-1 text-red-600">
                <small>{errors.name.message?.toString()}</small>
              </div>
            )}
          </div>

          <div className="mb-5">
            <label htmlFor="email_address" className="sr-only">
              Email Address
            </label>
            <input
              id="email_address"
              type="email"
              placeholder="Email Address"
              autoComplete="false"
              className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                errors.email
                  ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                  : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
              {...register("email", {
                required: "Enter your email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email"
                }
              })}
            />
            {errors.email && (
              <div className="mt-1 text-red-600">
                <small>{errors.email.message?.toString()}</small>
              </div>
            )}
          </div>

          <div className="mb-3">
            <textarea
              placeholder="Your Message"
              className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  ${
                errors.message
                  ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                  : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
              {...register("message", {
                required: "Enter your Message"
              })}
            />
            {errors.message && (
              <div className="mt-1 text-red-600">
                {" "}
                <small>{errors.message.message?.toString()}</small>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
          >
            {isSubmitting ? (
              <svg
                className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Send Message"
            )}
          </button>
          {isSubmitSuccessful && isSuccess && <Navigate to="home"></Navigate>}
          {isSubmitSuccessful && !isSuccess && (
            <div className="mt-3 text-sm text-center text-red-500">
              {message || "Something went wrong. Please try later."}
            </div>
          )}
        </form>
      </div>
    </motion.div>
  );
}
