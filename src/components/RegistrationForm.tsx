import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FormData } from "../types";

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-4">
        <div>
          <label className="block">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="border p-2 w-full"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="border p-2 w-full"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="border p-2 w-full"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Submit
        </button>
      </form>

      <Link to="/" className="text-blue-500 hover:underline">
        Kembali ke Homepage
      </Link>
    </div>
  );
};

export default RegistrationForm;
