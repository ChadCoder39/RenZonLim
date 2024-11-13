import Image from "next/image";

export default function ArticleBlock() {
    return (
        <div className="max-w-[1200px] mx-auto mb-36 mt-36 px-4">
            <div className="flex justify-center mb-10">
                <h1 className="text-4xl font-bold text-[#322920]">Article Name</h1>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-2xl font-bold text-[#322920] mb-4">Subtitle I and Solutions to the Problem</h2>
                    <p className="text-[#352920] whitespace-pre-line mb-4">
                        Short article description. What topic is discussed, what questions and problems it solves. Emphasis on the right to freedom of thought, conscience and religion. This right includes freedom to change its religion or belief, and freedom.
                    </p>
                </div>

                <div className="lg:w-1/2">
                    <Image src="*" alt="article image" width={640} height={500} className="mx-auto rounded-lg" />
                </div>
            </div>

            <div className="mt-20">
                <h3 className="text-xl font-bold text-[#322920] mb-4">Subtitle 2 and Solutions to the Problem</h3>
                <p className="text-[#352920] mb-4 whitespace-pre-line">
                    Historical Integrity vs. Modern Innovation: The primary challenge was ensuring the seamless integration of modern amenities while preserving the rich history of the hotel. Our solution was to work closely with historians and design consultants, using materials that complemented the original structures and design.
                </p>
                <p className="text-[#352920] mb-4 whitespace-pre-line">
                    Space Constraints: Given the hotel's central location and historical significance, we had limited space for renovation work. We used innovative space-saving techniques and design solutions to ensure each room felt spacious, functional, and luxurious.
                </p>

                <div className="flex flex-col lg:flex-row items-center gap-8 mt-10">
                    <Image src="*" alt="example image 1" width={300} height={300} className="rounded-lg" />
                    <Image src="*" alt="example image 2" width={300} height={300} className="rounded-lg" />
                </div>
            </div>
        </div>
    );
}
