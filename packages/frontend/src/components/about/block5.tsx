import ShiftedTextHeader from "../shifted-text-header";
import Image from "next/image";

export default function AboutBlock5() {
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <video className="h-1300 w-720 rounded-lg" controls>
                <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4"/>
                </video>
                </div>


            <div className="flex justify-center p-6">
              <button
                type="submit"
                className="p-3 border border-[#322920] text-[#322920] text-[18px] uppercase rounded-md hover:bg-[#322920] hover:text-[#f5f0e1] transition-all duration-300">
                APPLY FOR A CONSULTATION NOW
                </button>
            </div>
        </div>
    );
}
