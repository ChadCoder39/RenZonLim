import ShiftedTextHeader from "../shifted-text-header";

export default function ContactBlock1() {
  return (
    <div className="relative flex flex-col lg:flex-row p-10 items-center justify-between text-[#322920] max-w-[1400px] mx-auto mt-36">

        <div className="absolute top-0 left-0 w-full text-center z-10">
          <ShiftedTextHeader leftText="CONTACT" rightText="US" />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 w-full mt-28">

          <div className="flex flex-col items-start gap-6 flex-shrink w-full">
            <div className="text-left">
              <span className="text-[20px] md:text-[24px] mt-4 block">contact information</span>
              <span className="text-[20px] md:text-[24px] block">location: Kwakelsepad 91. 1424 BX De Kwakel</span>
              <span className="text-[28px] text-center md:text-start block">email: ukr.holland@gmail.com</span>
              <span className="text-[28px] text-center md:text-start">whatsapp +31(63)8236862</span>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <img src="/assets/icons/instagram.png" alt="Instagram" width={40} height={40} />
                <span className="text-[20px]">Instagram</span>
              </div>
              <div className="flex items-center gap-4">
                <img src="/assets/icons/whatsapp.png" alt="WhatsApp" width={40} height={40} />
                <span className="text-[20px]">WhatsApp</span>
              </div>
              <div className="flex items-center gap-4">
                <img src="/assets/icons/facebook.png" alt="Facebook" width={40} height={40} />
                <span className="text-[20px]">Facebook</span>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <span className="text-[26px] w-full md:w-[390px] text-center">Kwakelsepad 91. 1424 BX De Kwakel</span>
              <span className="text-[26px] w-full md:w-[390px] text-center">+31(63)8236862</span>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="max-w-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509431!2d144.95565111531834!3d-37.81732797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577dab99c4d0e89!2sMelbourne%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sau!4v1638172483848!5m2!1sen!2sau"
                className="h-[450px] w-[320px] md:w-[600px]"
                allowFullScreen
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
        </div>
      </div>
    </div>
  );
}
