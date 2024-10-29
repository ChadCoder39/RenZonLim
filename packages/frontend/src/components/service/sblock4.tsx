"use client"
import RequestForm from "../__common__/forms/request.form";
import ShiftedTextHeader from "../shifted-text-header";


export default function ServiceBlock4() {
    
    return (
      <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen p-10 px-4 text-[#322920] max-w-[1400px] mx-auto mt-36">
        <div className="absolute top-[-50px] lg:top-[-80px] left-0 w-full text-center z-10">
          <ShiftedTextHeader leftText="APPLY FOR A" rightText="   CONSULTATION NOW" customFontSize={44}/>
        </div>

        <div className="w-full max-w-[500px] bg-[#f5f0e1] p-8 shadow-md rounded-lg mx-auto">
          <RequestForm/>
        </div>
      </div>
    );
}
