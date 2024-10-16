import ShiftedTextHeader from "../shifted-text-header";

export default function ContactBlock2() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen p-10 px-4 text-[#322920] max-w-[1400px] mx-auto mt-36">
      <div className="absolute top-[-50px] lg:top-[-80px] left-0 w-full text-center z-10">
        <ShiftedTextHeader leftText="APPLY FOR A" rightText="   CONSULTATION NOW" customFontSize={44}/>
      </div>

      <div className="w-full max-w-[500px] bg-[#f5f0e1] p-8 shadow-md rounded-lg mx-auto">
        <form className="flex flex-col gap-8">
          <div className="flex flex-col">
            <label className="text-[16px] tracking-wide mb-2 uppercase text-[#322920]">Your Name</label>
            <input
              type="text"
              className="border-b border-[#322920] p-2 bg-transparent focus:outline-none text-[#322920] text-[16px] uppercase"
              placeholder="Your Name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[16px] tracking-wide mb-2 uppercase text-[#322920]">Phone Number</label>
            <input
              type="tel"
              className="border-b border-[#322920] p-2 bg-transparent focus:outline-none text-[#322920] text-[16px] uppercase"
              placeholder="Phone Number"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[16px] tracking-wide mb-2 uppercase text-[#322920]">E-mail</label>
            <input
              type="email"
              className="border-b border-[#322920] p-2 bg-transparent focus:outline-none text-[#322920] text-[16px] uppercase"
              placeholder="E-mail"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[16px] tracking-wide mb-2 uppercase text-[#322920]">Additional Comment</label>
            <textarea
              className="border-b border-[#322920] p-2 bg-transparent focus:outline-none text-[#322920] text-[16px] uppercase"
              placeholder="Additional Comment"
              rows={4}
            ></textarea>
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
