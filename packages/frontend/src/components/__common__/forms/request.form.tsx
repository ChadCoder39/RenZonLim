import {SubmitHandler, useForm} from "react-hook-form";
import { httpCreateRequest } from "@/utils/http-requests/potentialCustomers";

type Inputs = {
    name: string;
    phone_number: number;
    email: string;
    add_comment: string
};

export default function RequestForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async(data) => {
      httpCreateRequest({
        name: data.name,
        email: data.email,
        number: data.phone_number.toString(),
        message: data.add_comment,
      }).then(_ => {
        alert('Request was sucessfully sent!');
      }).catch(_ => {
        alert('Sth went wrong, pls try again later');
      });
    }


    return (
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
                {...register("phone_number", { required: true, pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, maxLength: 11 })}
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
    );
}