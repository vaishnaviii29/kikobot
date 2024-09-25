"use client";
import { readexPro } from "@/app/fonts";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  model: string;
  endEffector: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const [selectedModel, setSelectedModel] = useState<string>("");

  const onSubmit = (data: FormData) => {
    
  
  };

  const model = watch("model"); 

  const endEffectorsC1 = ["Effector A1", "Effector A2"];
  const endEffectorsD1 = ["Effector B1", "Effector B2"];

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center md:text-left">
          <h2
            className={`  text-3xl md:text-5xl font-extralight mb-4 ${readexPro.className}`}
          >
            Talk to Us
          </h2>
          <p className={`text-[#212121] mb-6 font-extralight ${readexPro.className}`}>We’d Love to Hear From You.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={`space-y-4 w-full ${readexPro.className} font-normal`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                id="firstName"
                {...register("firstName", {
                  required: "First name is required",
                })}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } rounded-md`}
                placeholder="First name"
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">
                  {errors.firstName.message}
                </span>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                id="lastName"
                {...register("lastName", { required: "Last name is required" })}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } rounded-md`}
                placeholder="Last name"
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              placeholder="you@company.com"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.phoneNumber ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              placeholder="+1 (555) 000-0000"
            />
            {errors.phoneNumber && (
              <span className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </span>
            )}
          </div>

          {/* Select Model */}
          <div>
            <label
              htmlFor="model"
              className="block text-sm font-medium text-gray-700"
            >
              Select Model
            </label>
            <select
              id="model"
              {...register("model", { required: "Model is required" })}
              onChange={(e) => setSelectedModel(e.target.value)}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.model ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            >
              <option value="">Select the kikobot you need</option>
              <option value="c1">C1</option>
              <option value="d1">D1</option>
            </select>
            {errors.model && (
              <span className="text-red-500 text-sm">
                {errors.model.message}
              </span>
            )}
          </div>

          {/* Select End-Effector */}
          {selectedModel && (
            <div>
              <label
                htmlFor="endEffector"
                className="block text-sm font-medium text-gray-700"
              >
                Select End-effector
              </label>
              <select
                id="endEffector"
                {...register("endEffector", {
                  required: "End-effector is required",
                })}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.endEffector ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              >
                <option value="">Select the end-effector</option>
                {(selectedModel === "c1" ? endEffectorsC1 : endEffectorsD1).map(
                  (effector) => (
                    <option key={effector} value={effector}>
                      {effector}
                    </option>
                  )
                )}
              </select>
              {errors.endEffector && (
                <span className="text-red-500 text-sm">
                  {errors.endEffector.message}
                </span>
              )}
            </div>
          )}

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              rows={4}
              placeholder="Your message"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
            >
              Let's Talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
