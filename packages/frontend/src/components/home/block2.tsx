import Image from "next/image";
import ShiftedTextHeader from "../shifted-text-header";

export default function HomeBlock2() {
    return (
        <div className="flex flex-col p-10 justify-center items-center">
            <ShiftedTextHeader leftText="ABOUT" rightText="COMPANY"/>

            <div className="flex flex-col lg:flex-row items-center gap-20 max-w-[1485px] mt-44 lg:mt-28">
                <Image src={"/assets/images/home_block_2.png"} width={573} height={642} className="md:w-[473px] md:h-[542px] lg:w-[573px] lg:h-[642px]" alt="left-image"/>

                <div className="flex flex-col gap-10 mt-0 lg:mt-24">
                    <span className="text-[20px] lg:text-[28px] text-center lg:text-start">
                        some text about company achievements and history, goals and motivation and so on.
                    </span>
                    <span className="text-[20px] lg:text-[28px] text-center lg:text-start">
                        Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private
                    </span>
                    <span className="text-[20px] lg:text-[28px] text-center lg:text-start">
                        Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek
                    </span>

                    <button className="self-center lg:self-start bg-transparent border-[1.4px] border-solid border-[#322920] w-[240px] lg:w-[307px] p-2 text-[24px] lg:text-[34px] hover:bg-[#322920] hover:text-[#ece3ca] transition-all ease-in-out">LEARN MORE</button>
                </div>
            </div>
        </div>
    );
}