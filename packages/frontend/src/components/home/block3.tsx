import Image from "next/image";

export default function HomeBlock3() {
    return (
        <div className="flex flex-col p-2 md:p-10 justify-center items-center">
            <div className="h-fit border-[3.5px] border-solid border-[#322920] relative w-full max-w-[1485px]">
                <Image src={"/assets/images/home_block_3.png"} alt="top-image" className="h-[188px] object-cover" width={1600} height={188}/>

                <span className="absolute top-20 lg:top-16 left-[50%] text-[#eae2d7] text-[40px] md:text-[56px] text-center" style={{ transform: 'translate(-50%, -50%)' }}>OUR ADVANTAGES</span>
            
                <div className="flex flex-col py-14">
                    <div className="flex flex-row gap-4 items-end px-6 md:px-28 lg:px-64">
                        <span className="text-[52px] md:text-[75px] text-[#322920]">01</span>
                        <span className="text-[20px] md:text-[36px] text-[#322920] pb-2 md:pb-4">using ecological materials</span>
                    </div>

                    <div className="flex flex-row-reverse text-end gap-4 items-end px-6 md:px-28 lg:px-64">
                        <span className="text-[52px] md:text-[75px] text-[#322920]">02</span>
                        <span className="text-[20px] md:text-[36px] text-[#322920] pb-2 md:pb-4">using ecological materials</span>
                    </div>

                    <div className="flex flex-row gap-4 items-end px-6 md:px-28 lg:px-64">
                        <span className="text-[52px] md:text-[75px] text-[#322920]">03</span>
                        <span className="text-[20px] md:text-[36px] text-[#322920] pb-2 md:pb-4">using ecological materials</span>
                    </div>

                    <div className="flex flex-row-reverse text-end gap-4 items-end px-6 md:px-28 lg:px-64">
                        <span className="text-[52px] md:text-[75px] text-[#322920]">04</span>
                        <span className="text-[20px] md:text-[36px] text-[#322920] pb-2 md:pb-4">using ecological materials</span>
                    </div>

                    <div className="flex flex-row gap-4 items-end px-6 md:px-28 lg:px-64">
                        <span className="text-[52px] md:text-[75px] text-[#322920]">05</span>
                        <span className="text-[20px] md:text-[36px] text-[#322920] pb-2 md:pb-4">using ecological materials</span>
                    </div>
                </div>
            </div>
        </div>
    );
}