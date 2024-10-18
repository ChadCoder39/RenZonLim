import ShiftedTextHeader from "../shifted-text-header";
import Image from "next/image";

export default function ServiceBlock1() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-[1200px] mx-auto mb-36 mt-36">
            <div className="lg:w-1/2 text-center lg:text-left lg:mr-20"> 
                <h2 className="text-4xl font-bold text-[#322920]">Service Name</h2>
                <p className="mt-4 text-lg text-[#352920]">
                    Service description, a few words about what problems it solves, and so on.
                </p>
            </div>
            <div className="lg:w-1/2">
                <Image src={"/assets/images/serv1.png"} className="mx-auto" width={640} height={500} alt="service image" />
            </div>
        </div>
    );
}
