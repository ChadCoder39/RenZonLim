import Image from "next/image";
import data from "@/app/blog/data.json";
import Link from 'next/link'

export default function BlogBlock2() {
    const content = data.blog.block2;
    return (
        <div className=" p-10 min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 gap-10 w-full max-w-4xl">
                <div className="flex space-x-6 justify-center">
                <Image src={content.image_1} className="w-[570px] h-[360px]" width={500} height={500} alt="arrow"/>
                    <div>
                        <h2 className="text-2xl font-semibold text-[#352920]">{content.n_1}</h2>
                        <p className="mt-4 text-[#352920]">
                            {content.n_2}
                        </p>
                        <Link href="/blog/article/renovation-in-scandinavian-style" passHref>
                        <button className="mt-4 bg-[#352920] text-white py-2 px-6 rounded">LEARN MORE</button>
                        </Link>
                    </div>
                </div>

                <div className="flex space-x-6 justify-center">
                    <Image src={content.image_2} className="w-[570px] h-[360px]" width={500} height={500} alt="arrow"/>
                    <div>
                        <h2 className="text-2xl font-semibold text-[#352920]">{content.n_3}</h2>
                        <p className="mt-4 text-[#352920]">
                            {content.n_4}
                        </p>
                        <Link href="/blog/article/renovation-in-scandinavian-style" passHref>
                        <button className="mt-4 bg-[#352920] text-white py-2 px-6 rounded">LEARN MORE</button>
                        </Link>
                    </div>
                </div>

                <div className="flex space-x-6 justify-center">
                <Image src={content.image_3} className="w-[570px] h-[360px]" width={500} height={500} alt="arrow"/>
                    <div>
                        <h2 className="text-2xl font-semibold text-[#352920]">{content.n_5}</h2>
                        <p className="mt-4 text-[#352920]">
                            {content.n_6}
                        </p>
                        <Link href="/blog/article/renovation-in-scandinavian-style" passHref>
                        <button className="mt-4 bg-[#352920] text-white py-2 px-6 rounded">LEARN MORE</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
