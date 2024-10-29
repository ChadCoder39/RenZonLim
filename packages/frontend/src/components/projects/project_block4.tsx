"use client"
import ShiftedTextHeader from "../shifted-text-header";
import Image from "next/image";
import {SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
  name: string;
  phone_number: number;
  email: string;
  add_comment: string
};


export default function ProjectBlock4() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async(data) => {
      console.log(data);
    }
        return (
        <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen p-10 px-4 text-[#322920] max-w-[1400px] mx-auto mt-36">
      <div className="absolute top-[-50px] lg:top-[-80px] left-0 w-full text-center z-10">
        <ShiftedTextHeader leftText="APPLY FOR A" rightText="   CONSULTATION NOW" customFontSize={44}/>
      </div>

      <div className="w-full max-w-[500px] bg-[#f5f0e1] p-8 shadow-md rounded-lg mx-auto">
        <form className="flex flex-col gap-8" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label className="text-[16px] tracking-wide mb-2 uppercase text-[#322920]">Your Name</label>
            <input
              {...register("name", { required: true, maxLength: 100 })}
              type="text"
              className="border-b border-[#322920] p-2 bg-transparent focus:outline-none text-[#322920] text-[16px] uppercase"
              placeholder="Your Name"
            />
                          {errors.name && "Your name is required"}
          </div>

          <div className="flex flex-col">
            <label className="text-[16px] tracking-wide mb-2 uppercase text-[#322920]">Phone Number</label>
            <input
              {...register("phone_number", { required: true, pattern: /^(0|[1-9]\d*)(\.\d+)?$/, maxLength: 11 })}
              type="tel"
              className="border-b border-[#322920] p-2 bg-transparent focus:outline-none text-[#322920] text-[16px] uppercase"
              placeholder="Phone Number"
            />
                          {errors.phone_number && "Your phone number is required"}
          </div>

          <div className="flex flex-col">
            <label className="text-[16px] tracking-wide mb-2 uppercase text-[#322920]">E-mail</label>
            <input
              {...register("email", {required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
              type="email"
              className="border-b border-[#322920] p-2 bg-transparent focus:outline-none text-[#322920] text-[16px] uppercase"
              placeholder="E-mail"
            />
                          {errors.email && "Your email is required"}
          </div>

          <div className="flex flex-col">
            <label className="text-[16px] tracking-wide mb-2 uppercase text-[#322920]">Additional Comment</label>
            <textarea
              {...register("add_comment", { required: true, maxLength: 300 })}
              className="border-b border-[#322920] p-2 bg-transparent focus:outline-none text-[#322920] text-[16px] uppercase"
              placeholder="Additional Comment"
              rows={4}
            ></textarea>
                          {errors.add_comment && "Provide us with some information"}
          </div>

          <button
            type="submit"
            className="p-3 border border-[#322920] text-[#322920] text-[18px] uppercase rounded-md hover:bg-[#322920] hover:text-[#f5f0e1] transition-all duration-300"
          >
            Request
          </button>
        </form>
      </div>
    </div>
    );
}
