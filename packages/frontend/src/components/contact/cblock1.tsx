import ShiftedTextHeader from "../shifted-text-header";

export default function ContactBlock1() {
  return (
    <div className="relative flex flex-col lg:flex-row p-10 items-center justify-between text-[#322920] max-w-[1400px] mx-auto">
      {/* Header - CONTACT US */}
      <div className="absolute top-[-50px] lg:top-[-80px] left-0 w-full text-center z-10">
        <ShiftedTextHeader leftText="CONTACT" rightText="US" />
      </div>

      {/* Left Side - Contact Information */}
      <div className="flex flex-col items-start gap-6 max-w-[500px] mt-16 lg:mt-0">
        {/* Contact Info */}
        <div className="text-left mt-[100px]">
          <span className="text-[20px] md:text-[24px] mt-4 block">Some contact information</span>
          <span className="text-[20px] md:text-[24px] block">Location</span>
          <span className="text-[20px] md:text-[24px] block">
            Social Medias, Instagram, WhatsApp, Telegram, and so on
          </span>
        </div>

        {/* Social Media Icons */}
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

        {/* Location and Telephone */}
        <div className="flex flex-col items-start">
          <span className="text-[20px] md:text-[24px]">Location Address</span>
          <span className="text-[20px] md:text-[24px] mt-2">Telephone Number</span>
        </div>
      </div>

      {/* Right Side - Google Map */}
      <div className="mt-10 lg:mt-0 lg:ml-16 w-full lg:w-[600px] flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509431!2d144.95565111531834!3d-37.81732797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577dab99c4d0e89!2sMelbourne%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sau!4v1638172483848!5m2!1sen!2sau"
          width="600"
          height="450"
          style={{ border: 0, width: "100%", height: "450px" }}
          allowFullScreen
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
}
