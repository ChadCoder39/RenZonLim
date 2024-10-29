import Image from "next/image";
import ShiftedTextHeader from "../shifted-text-header";

export default function ProjectBlock1() {
    return (
        <div className="flex flex-col p-10 justify-center items-center bg-[#F5EDE3]">
            <ShiftedTextHeader leftText="ABOUT" rightText="PROJECT" />

            <div className="flex flex-col lg:flex-row items-center gap-20 max-w-[1485px] mt-36 lg:mt-24">
                <Image
                    src="/assets/images/proj1.0.png"
                    width={640}
                    height={400}
                    className="md:w-[473px] md:h-[542px] lg:w-[640px] lg:h-[400px]"
                    alt="Project Image"
                />

                <div className="flex flex-col gap-6 mt-0 lg:mt-16">
                    <span className="text-[18px] lg:text-[24px] text-center lg:text-start">
                        Project description: What was "before," which problems the client had?
                    </span>
                    <span className="text-[18px] lg:text-[24px] text-center lg:text-start">
                        Everyone has the right to freedom of thought, conscience, and religion; this right includes freedom to change their religion or belief, and freedom, either alone or in community with others and in public or private.
                    </span>
                    <span className="text-[18px] lg:text-[24px] text-center lg:text-start">
                        Everyone has the right to freedom of thought, conscience, and religion; this right includes freedom to change their religion or belief, and freedom.
                    </span>

                    <button className="self-center lg:self-start bg-transparent border-[1.4px] border-solid border-[#322920] w-[200px] lg:w-[260px] p-2 text-[20px] lg:text-[28px] hover:bg-[#322920] hover:text-[#ece3ca] transition-all ease-in-out">
                        LEARN MORE
                    </button>
                </div>
            </div>
        </div>
    );
}
