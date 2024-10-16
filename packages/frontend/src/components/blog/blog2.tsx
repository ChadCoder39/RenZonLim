import Image from "next/image";

export default function BlogBlock2() {
    return (
        <div className=" p-10 min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 gap-10 w-full max-w-4xl">
                <div className="flex space-x-6 justify-center">
                <Image src={"/assets/images/blog2.png"} className="w-[570px] h-[360px]" width={500} height={500} alt="arrow"/>
                    <div>
                        <h2 className="text-2xl font-semibold text-[#352920]">ARTICLE NAME</h2>
                        <p className="mt-4 text-[#352920]">
                            Description of the article, explaining the topic and addressing common questions or problems.
                        </p>
                        <button className="mt-4 bg-[#352920] text-white py-2 px-6 rounded">LEARN MORE</button>
                    </div>
                </div>

                <div className="flex space-x-6 justify-center">
                    <Image src={"/assets/images/blog3.png"} className="w-[570px] h-[360px]" width={500} height={500} alt="arrow"/>
                    <div>
                        <h2 className="text-2xl font-semibold text-[#352920]">ARTICLE NAME</h2>
                        <p className="mt-4 text-[#352920]">
                            Description of the article, explaining the topic and addressing common questions or problems.
                        </p>
                        <button className="mt-4 bg-[#352920] text-white py-2 px-6 rounded">LEARN MORE</button>
                    </div>
                </div>

                <div className="flex space-x-6 justify-center">
                <Image src={"/assets/images/blog4.png"} className="w-[570px] h-[360px]" width={500} height={500} alt="arrow"/>
                    <div>
                        <h2 className="text-2xl font-semibold text-[#352920]">ARTICLE NAME</h2>
                        <p className="mt-4 text-[#352920]">
                            Description of the article, explaining the topic and addressing common questions or problems.
                        </p>
                        <button className="mt-4 bg-[#352920] text-white py-2 px-6 rounded">LEARN MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
