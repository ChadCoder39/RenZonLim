import Image from "next/image";
import ShiftedTextHeader from "../shifted-text-header";

const ReviewCard = ({
    projectName,
    clientName,
    reviewText,
}: {
    projectName: string;
    clientName: string;
    reviewText: string;
}) => {
    return (
        <div className="flex flex-col shadow-md p-5 border-[1px] border-solid border-[#322920] h-[600px] md:h-[650px] max-w-[400px] justify-between scroll-smooth">
            <span className="text-[36px] text-center">{projectName}</span>
            <span className="text-[36px]">{clientName}</span>
            <span className="text-[28px]">{reviewText}</span>

            <Image src={"/assets/images/home_block_8_card.png"} alt="review-image" width={509} height={285}/>
        </div>
    );
}


export default function HomeBlock8() {
    return (
        <div className="flex flex-col p-5 min-h-[400px] justify-center items-center">
            <ShiftedTextHeader leftText="OUR" rightText="REVIEWS"/>

            <div className="flex flex-row mt-36 mb-24 md:mt-44 justify-center gap-10 max-w-[1400px] flex-wrap">
                <ReviewCard projectName="project name" clientName="Client Name" reviewText="review text, grateful words, result description and so on." />
                <ReviewCard projectName="project name" clientName="Client Name" reviewText="review text, grateful words, result description and so on." />
                <ReviewCard projectName="project name" clientName="Client Name" reviewText="review text, grateful words, result description and so on." />

                <ReviewCard projectName="project name" clientName="Client Name" reviewText="review text, grateful words, result description and so on." />
                <ReviewCard projectName="project name" clientName="Client Name" reviewText="review text, grateful words, result description and so on." />
                <ReviewCard projectName="project name" clientName="Client Name" reviewText="review text, grateful words, result description and so on." />
            </div>

            <Image src={"/assets/images/block_8.png"} alt="bg-img" width={1435} height={650} />
        </div>
    );
}