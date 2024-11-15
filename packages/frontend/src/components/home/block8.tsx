import Image from "next/image";
import ShiftedTextHeader from "../shifted-text-header";
import data from "@/app/data.json";
import Link from 'next/link'

const ReviewCard = ({
    projectName,
    clientName,
    reviewText,
}: {
    projectName: string;
    clientName: string;
    reviewText: string;
}) => {
    const content = data.app.block8;
    return (
        <div className="flex flex-col shadow-md p-5 border-[1px] border-solid border-[#322920] h-[600px] md:h-[650px] max-w-[400px] justify-between scroll-smooth">
            <span className="text-[36px] text-center">{projectName}</span>
            <span className="text-[36px]">{clientName}</span>
            <span className="text-[28px]">{reviewText}</span>

            <Image src={content.image_1} alt="review-image" width={509} height={285}/>
        </div>
    );
}


export default function HomeBlock8() {
    const content = data.app.block8;
    return (
        <div className="flex flex-col p-5 min-h-[400px] justify-center items-center">
            <ShiftedTextHeader leftText="OUR" rightText="REVIEWS"/>

            <div className="flex flex-row mt-36 mb-24 md:mt-44 justify-center gap-10 max-w-[1400px] flex-wrap">
                <ReviewCard projectName={content.n_1} clientName={content.n_2} reviewText={content.n_3} />
                <ReviewCard projectName={content.n_1} clientName={content.n_2} reviewText={content.n_3} />
                <ReviewCard projectName={content.n_1} clientName={content.n_2} reviewText={content.n_3} />

                <ReviewCard projectName={content.n_1} clientName={content.n_2} reviewText={content.n_3} />
                <ReviewCard projectName={content.n_1} clientName={content.n_2} reviewText={content.n_3} />
                <ReviewCard projectName={content.n_1} clientName={content.n_2} reviewText={content.n_3}/>
            </div>

            <Image src={content.image_2} alt="bg-img" width={1435} height={650} />
        </div>
    );
}