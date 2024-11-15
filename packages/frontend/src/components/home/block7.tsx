import data from "@/app/data.json";
import Link from 'next/link'

export default function HomeBlock7() {
    const content = data.app.block7;
    return (
        <div className="flex flex-col p-10 md:p-10 bg-[#1a1611] min-h-96 justify-center items-center">
            <span className="max-w-[700px] text-[#ece3ca] text-[54px] text-center mt-24">{content.n_1}</span>
            <span className="max-w-[830px] text-[#ece3ca] text-[28px] text-center mt-10">{content.n_2}</span>
            
            <div className="join join-vertical w-full text-[#ece3ca] mt-20 max-w-[1400px]">
                <div className="collapse collapse-plus join-item border-base-300 border-t-[1px] border-b-[1px]">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title  font-medium text-[32px] px-10 py-7">{content.n_3}</div>
                    <div className="collapse-content text-[24px] max-w-[790px] text-center">
                        <p>{content.n_4}</p>
                    </div>
                </div>

                <div className="collapse collapse-plus join-item border-base-300 border-t-[1px] border-b-[1px]">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title  font-medium text-[32px] px-10 py-7">{content.n_5}</div>
                    <div className="collapse-content text-[24px] max-w-[790px] text-center">
                        <p>{content.n_6}</p>
                    </div>
                </div>

                <div className="collapse collapse-plus join-item border-base-300 border-t-[1px] border-b-[1px]">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title  font-medium text-[32px] px-10 py-7">{content.n_7}</div>
                    <div className="collapse-content text-[24px] max-w-[790px] text-center">
                        <p>{content.n_8}</p>
                    </div>
                </div>

                <div className="collapse collapse-plus join-item border-base-300 border-t-[1px] border-b-[1px]">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title  font-medium text-[32px] px-10 py-7">{content.n_9}</div>
                    <div className="collapse-content text-[24px] max-w-[790px]">
                        <p>{content.n_10}</p>
                    </div>
                </div>

                <div className="collapse collapse-plus join-item border-base-300 border-t-[1px] border-b-[1px]">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title  font-medium text-[32px] px-10 py-7">{content.n_11}</div>
                    <div className="collapse-content text-[24px] max-w-[790px] text-center">
                        <p>{content.n_12}</p>
                    </div>
                </div>

                <div className="collapse collapse-plus join-item border-base-300 border-t-[1px] border-b-[1px]">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title  font-medium text-[32px] px-10 py-7">{content.n_13}</div>
                    <div className="collapse-content text-[24px] max-w-[790px] text-center">
                        <p>{content.n_14}</p>
                    </div>
                </div>
                
            </div>

            <Link href="/contact" passHref>
            <button className="transition-all ease-in-out text-[24px] md:text-[34px] text-[#ece3ca] bg-[#1a1611] hover:bg-[#ece3ca] hover:text-[#1a1611] p-2 self-center my-20 border-solid border-[1.5px] border-[#ece3ca] px-10">APPLY FOR A CONSULTATION NOW</button>
            </Link>

        </div>
    );
}