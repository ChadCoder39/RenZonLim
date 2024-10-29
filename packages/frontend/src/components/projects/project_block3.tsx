import Image from "next/image";

export default function ProjectBlock3() {
    return (
        <div className="mb-36 max-w-[1200px] mx-auto">
            
            <div className="flex flex-col lg:flex-row gap-2 mt-20 items-center justify-center p-10">
                <div className="flex flex-col gap-4">
                    <Image src={"/assets/images/serv4.png"} alt="serv5" width={471} height={580}/>
                    <Image src={"/assets/images/serv5.png"} alt="serv4" width={474} height={290}/>
                </div> 

                <div className="flex flex-col gap-2">
                    <Image src={"/assets/images/serv6.png"} alt="serv6" width={474} height={290}/>
                    <Image src={"/assets/images/serv7.png"} alt="serv7" width={471} height={580}/>
                </div>

                <div className="flex flex-col gap-2">
                    <Image src={"/assets/images/serv8.png"} alt="serv8" width={376} height={870}/>
                </div>
            </div>
        </div>
    );
}