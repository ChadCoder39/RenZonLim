import ShiftedTextHeader from "../shifted-text-header";
import Image from "next/image";
import data from "@/app/about/data.json";
import Link from 'next/link'

export default function AboutBlock5() {
    const content = data.about.block5;
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <video className="h-1300 w-720 rounded-lg" controls>
                <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4"/>
                </video>
                </div>


            <div className="flex justify-center p-6">
            <Link href="/contact" passHref>
              <button
                type="submit"
                className="p-3 border border-[#322920] text-[#322920] text-[18px] uppercase rounded-md hover:bg-[#322920] hover:text-[#f5f0e1] transition-all duration-300">
                {content.t_1}
                </button>
                </Link>
            </div>
        </div>
    );
}
