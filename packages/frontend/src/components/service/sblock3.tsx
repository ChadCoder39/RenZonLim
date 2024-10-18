import Image from "next/image";

export default function ServiceBlock3() {
    return (
        <div className="mb-36 max-w-[1200px] mx-auto">
            <h2 className="text-4xl font-bold text-[#322920] text-center">Result</h2>
            <div className="grid grid-cols-3 gap-4 mt-10">
                <div className="col-span-1 row-span-2">
                    <Image src={"/assets/images/serv4.png"} className="w-[470px] h-[580px] object-cover" width={470} height={580} alt="result image 1" />
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <Image src={"/assets/images/serv5.png"} className="w-[475px] h-[300px] object-cover" width={460} height={290} alt="result image 2" />
                    </div>
                    <div className="col-span-1">
                        <Image src={"/assets/images/serv6.png"} className="w-[462px] h-[300px] object-cover" width={475} height={290} alt="result image 3" />
                    </div>
                </div>
                <div className="col-span-2 row-span-1">
                    <Image src={"/assets/images/serv7.png"} className="w-[470px] h-[580px] object-cover" width={600} height={300} alt="result image 4" />
                </div>             
            </div>
        </div>
    );
}
