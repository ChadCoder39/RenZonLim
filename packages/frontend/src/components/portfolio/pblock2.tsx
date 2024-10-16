import ShiftedTextHeader from "../shifted-text-header";
import Image from "next/image";

export default function PortfolioBlock2() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 max-w-[1400px] mx-auto">
            {Array.from({ length: 6 }, (_, index) => (
                <div key={index} className="relative group bg-white shadow-lg rounded-lg overflow-hidden">
                    <Image src={`/assets/images/portf${index + 1}.png`} className="w-[570px] h-[360px] object-cover" width={570} height={360} alt={`Project ${index + 1}`}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-center">
                            <h3 className="text-xl font-bold">PROJECT NAME {index + 1}</h3>
                            <a href="#" className="mt-2 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition">
                                LEARN MORE
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}



