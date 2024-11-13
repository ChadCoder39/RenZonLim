import Image from "next/image";
import data from "@/app/blog/article/[id]/data.json";


const splitText = (texts: string[]) => {
    const length = texts.length / 2;
    return [texts.slice(0, length), texts.slice(length + 1)];
}

export default function ArticleBlock({id}: {id: string}) {
    const content = data.articles.find((article) => article.id === id);

    const splitParas = splitText(content?.paras || []);

    return (
        <div className="max-w-[1200px] mx-auto mb-36 mt-36 px-4">
            <div className="flex justify-center mb-10">
                <h1 className="text-4xl font-bold text-[#322920]">{content?.title}</h1>
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-2xl font-bold text-[#322920] mb-4">Subtitle I and Solutions to the Problem</h2>
                    {
                        splitParas[0].length &&
                        splitParas[0].map((paragraph, index) => (
                            <p key={index} className="text-[#352920] mb-4 whitespace-pre-line">
                                {paragraph}
                            </p>
                        ))
                    }
                </div>

                <div className="lg:w-1/2">
                    <Image src={content?.image_1 || ""} alt="article image" width={640} height={500} className="mx-auto rounded-lg" />
                </div>
            </div>

            <div className="mt-20">
                <h3 className="text-xl font-bold text-[#322920] mb-4">Subtitle 2 and Solutions to the Problem</h3>
                {
                    splitParas[1].length &&
                    splitParas[1].map((paragraph, index) => (
                        <p key={index} className="text-[#352920] mb-4 whitespace-pre-line">
                            {paragraph}
                        </p>
                    ))
                }
                <div className="flex flex-col lg:flex-row items-center gap-8 mt-10">
                    <Image src={content?.image_2 || ""} alt="example image 1" width={300} height={300} className="rounded-lg" />
                    <Image src={content?.image_3 || ""} alt="example image 2" width={300} height={300} className="rounded-lg" />
                </div>
            </div>
        </div>
    );
}