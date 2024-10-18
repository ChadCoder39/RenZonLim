import Image from "next/image";
import ShiftedTextHeader from "../shifted-text-header";

const DetailsCard = (props: {
    title: string;
    description: string;
}) => {
    return (
        <div className="max-w-[400px] flex flex-col gap-2 relative mt-10 md:mt-0">
            <span className="text-[28px]">{props.title}</span>
            <span className="text-[22px]">{props.description}</span>

            <Image src={"/assets/icons/details.png"} className="w-48 absolute -bottom-14 -left-14" width={400} height={450} alt="details"/>
        </div>
    );
}

export default function HomeBlock4() {
    return (
        <div className="flex flex-col p-10 md:p-10 justify-center items-center">
            <ShiftedTextHeader leftText="WHAT" rightText="WE DO"/>

            <div className="flex flex-row gap-12 flex-wrap mt-32 md:mt-52 justify-center">
                <div className="flex flex-col gap-20">
                    <DetailsCard title="apartment renovation" description="some text about apartment renovation, description of the renovation process and so on"/>
                    <DetailsCard title="apartment renovation" description="some text about apartment renovation, description of the renovation process and so on"/>
                </div>

                <div className="flex flex-col gap-20">
                    <DetailsCard title="apartment renovation" description="some text about apartment renovation, description of the renovation process and so on"/>
                    <DetailsCard title="apartment renovation" description="some text about apartment renovation, description of the renovation process and so on"/>
                </div>

                <Image src={"/assets/images/home_block_4.png"} alt="left-img" width={469} height={504} className="mt-20 lg:mt-0" />
            </div>

            <Image src={"/assets/images/home_block_4_widden.png"} alt="bottom-img" width={1300} height={610} className="mt-10 lg:mt-20"/>
        </div>
    );
}