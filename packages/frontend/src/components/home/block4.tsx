import Image from "next/image";
import ShiftedTextHeader from "../shifted-text-header";
import Link from "next/link";
import data from "@/app/data.json";

const DetailsCard = (props: {
    title: string;
    description: string;
}) => {
    const content = data.app.block4;
    return (
        <div className="max-w-[400px] flex flex-col gap-2 relative mt-10 md:mt-0">
            <span className="text-[28px]">{props.title}</span>
            <span className="text-[22px]">{props.description}</span>

            <Link href="/portfolio" passHref> 
            <Image src={content.image_1} className="w-48 absolute -bottom-14 -left-14" width={400} height={450} alt="details"/>
            </Link>
        </div>
    );
}

export default function HomeBlock4() {
    const content = data.app.block4;
    return (
        <div className="flex flex-col p-10 md:p-10 justify-center items-center">
            <ShiftedTextHeader leftText="WHAT" rightText="WE DO"/>

            <div className="flex flex-row gap-12 flex-wrap mt-32 md:mt-52 justify-center">
                <div className="flex flex-col gap-20">
                    <DetailsCard title={content.n_1} description={content.n_2}/>
                    <DetailsCard title={content.n_3} description={content.n_4}/>
                </div>

                <div className="flex flex-col gap-20">
                    <DetailsCard title={content.n_1} description={content.n_2}/>
                    <DetailsCard title={content.n_3} description={content.n_4}/>
                </div>

                <Image src={content.image_2} alt="left-img" width={469} height={504} className="mt-20 lg:mt-0" />
            </div>

            <Image src={content.image_3} alt="bottom-img" width={1300} height={610} className="mt-10 lg:mt-20"/>
        </div>
    );
}
