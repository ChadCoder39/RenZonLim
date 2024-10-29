import Image from "next/image";

export default function ProjectBlock2() {
    return (
        <div className="bg-[#F5EDE3] py-16 px-6 lg:px-24">
            <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 mb-10">
                <div className="lg:w-1/2">
                    <Image src="/assets/images/proj1.1.png" className="mx-auto" width={640} height={500} alt="Project Image 1" />
                </div>
                <div className="lg:w-1/2">
                    <Image src="/assets/images/proj1.2.png" className="mx-auto" width={640} height={500} alt="Project Image 2" />
                </div>
            </div>
            
            <div className="text-center lg:text-left mb-10">
                <h2 className="text-2xl font-bold mb-4">Challenges & Solutions:</h2>
                <div className="space-y-6">
                    <p className="text-lg">
                        <strong>Historical Integrity vs. Modern Necessities:</strong> The primary challenge was ensuring the seamless integration of modern amenities while preserving the rich history of the hotel. Our solution was to work closely with historians and design consultants, using materials that complemented the original structure and design.
                    </p>
                    <p className="text-lg">
                        <strong>Space Constraints:</strong> Given the hotel’s central location and historical significance, we had limited space for renovation work. We used innovative space-saving techniques and design solutions to ensure each room felt spacious, functional, and luxurious.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 mb-10">
                <div className="lg:w-1/2">
                    <Image src="/assets/images/proj1.1.png" className="mx-auto" width={640} height={500} alt="Project Image 3" />
                </div>
                <div className="lg:w-1/2">
                    <Image src="/assets/images/proj1.2.png" className="mx-auto" width={640} height={500} alt="Project Image 4" />
                </div>
            </div>

            <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold mb-4">Results</h2>
                <div className="space-y-6">
                    <p className="text-lg">
                        <strong>Revitalized Aesthetic:</strong> The De Ware Jacob Hotel now boasts a refreshed look, embodying the grandeur of its historic past and the allure of modern design.
                    </p>
                    <p className="text-lg">
                        <strong>Enhanced Guest Experience:</strong> Guests now enjoy a harmonious blend of luxury, comfort, and a touch of Amsterdam’s storied past.
                    </p>
                    <p className="text-lg">
                        <strong>Sustainability:</strong> The hotel’s renovation achieved a reduced carbon footprint, affirming the hotel’s commitment to environmental stewardship.
                    </p>
                    <p className="text-lg">
                        <strong>Positive Reviews:</strong> Post-renovation, the hotel has received an uptick in positive guest reviews and has seen a notable increase in bookings.
                    </p>
                </div>
            </div>
        </div>
    );
}
