import Image from 'next/image';
import Link from 'next/link';

export default function AppFooter() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-[70px] w-full text-[#322920] bg-[#ddd3c6]">
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <Image src="/assets/icons/instagram.png" alt="Instagram" width={30} height={30} />
          <Link href="https://instagram.com">
            <span className="text-[16px] font-medium cursor-pointer">Instagram</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/assets/icons/whatsapp.png" alt="WhatsApp" width={30} height={30} />
          <Link href="https://wa.me/your-number">
            <span className="text-[16px] font-medium cursor-pointer">WhatsApp</span>
          </Link>
        </div>
      </div>

      <div className="text-right">
        <p className="text-[16px] font-medium">+31678542975</p>
        <p className="text-[16px] font-medium">LOCATION ADDRESS</p>
      </div>
    </div>
  );
}
