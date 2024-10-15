import Image from "next/image";


export default function HomeBlock1() {
    return (
        <div className="p-10 bg-home_block_1 bg-no-repeat bg-cover bg-center h-[823px]">
            <div className="relative flex flex-col h-full items-center justify-center text-[#eae2d7]">
                <span className="flex items-start text-start justify-start text-[44px] md:text-[76px] ml-0 lg:ml-[-425px] ">APARTMENT</span>
                <span className="flex items-end text-end justify-end text-[44px] md:text-[76px] mr-0 lg:mr-[-425px]">RENOVATION</span>

                <span className="absolute top-[200px] md:top-[200px] lg:top-[280px] text-[20px] mr-0 md:mr-[-200px] lg:mr-[-500px] max-w-[400px] text-center md:text-end">best apart/office renovation services in Netherland</span>

                <div className="absolute ml-0 md:ml-[-300px] top-[490px] text-[26px] md:text-[36px] max-w-[350px] text-center flex flex-row">
                    <span>calculate the cost of repairs now</span>
                    <Image src={"/assets/icons/arrrow-right-up.png"} className="w-8 h-8 md:w-10 md:h-10 mt-4" width={500} height={500} alt="arrow"/>
                </div>
            </div>
        </div>
    );
}