import ShiftedTextHeader from "../shifted-text-header";
import Image from "next/image";

export default function BlogBlock1() {
    return (
        <div className="relative flex flex-col lg:flex-row p-10 items-center justify-between text-[#322920] max-w-[1400px] mx-auto mt-36">
            <div className="absolute top-0 left-0 w-full text-center z-10">
                <ShiftedTextHeader leftText="OUR" rightText="BLOG" />
            </div>
            <div className="text-center mb-25">

                <p className="mt-4 text-lg text-[#352920]">
                    Useful information for our clients, helping them keep their houses perfect, every day.
                </p>
                <p className="mt-2">↓</p>
            </div>

            <div className="flex justify-center">
                <Image src={"/assets/images/blog1.png"} className="w-[640px] h-[215px]" width={640} height={500} alt="arrow"/>
            </div>
        </div>
    );
}

