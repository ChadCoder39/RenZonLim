import Image from "next/image";
import ShiftedTextHeader from "../shifted-text-header";

export default function HomeBlock9() {
    return (
        <div className="flex flex-col min-h-[400px] justify-center items-center p-2 pt-10">
            <ShiftedTextHeader leftText="CONTACT" rightText="US"/>

            <div className="flex flex-row flex-wrap gap-20 lg:gap-40 mt-36 justify-center pt-0 md:pt-12 pb-12">
                <div className="flex flex-col gap-10 justify-between">
                    <div className="flex flex-col gap-2">
                        <span className="text-[28px] text-center md:text-start">contact information</span>
                        <span className="text-[28px] text-center md:text-start">location: Kwakelsepad 91. 1424 BX De Kwakel</span>
                        <span className="text-[28px] text-center md:text-start">whatsapp +31(63)8236862</span>
                        <span className="text-[28px] text-center md:text-start">email:ukr.holland@gmail.com</span>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-5 justify-center md:justify-start">
                            <Image src={"/assets/icons/instagram.png"} alt="logo" width={62} height={62} />
                            <span className="text-[36px] text-center md:text-start">INSTAGRAM</span>
                        </div>

                        <div className="flex flex-row gap-5 justify-center md:justify-start">
                            <Image src={"/assets/icons/whatsapp.png"} alt="logo" width={62} height={62} />
                            <span className="text-[36px] text-center md:text-start">WAHTSAPP</span>
                        </div>

                        <div className="flex flex-row gap-5 justify-center md:justify-start">
                            <Image src={"/assets/icons/facebook.png"} alt="logo" width={62} height={62} />
                            <span className="text-[36px] text-center md:text-start">FACEBOOK</span>
                        </div>
                    </div>

                    <span className="text-[26px] w-full md:w-[390px] text-center">Kwakelsepad 91. 1424 BX De Kwakel</span>
                    <span className="text-[26px] w-full md:w-[390px] text-center">+31(63)8236862</span>
                </div>


                <div className="max-w-[700px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509431!2d144.95565111531834!3d-37.81732797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577dab99c4d0e89!2sMelbourne%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sau!4v1638172483848!5m2!1sen!2sau"
                        className="h-[400px] lg:h-[856px] w-fit lg:w-[700px] md:w-[600px]"
                        allowFullScreen
                        loading="lazy"
                        title="Google Map"
                    ></iframe>
                </div>
                
            </div>
        </div>
    );
}