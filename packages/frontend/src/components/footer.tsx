import Link from "next/link";

export default function AppFooter() {
    return (
        <div className="flex flex-col md:flex-row gap-12 flex-wrap justify-center items-center p-[70px] w-full text-[#322920] bg-[#ddd3c6]">
            <Link href={"/"}>HOME</Link>
            <Link href={"/about"}>ABOUT US</Link>
            <Link href={"/services"}>SERVICES</Link>
            <Link href={"/portfolio"}>PORTFOLIO</Link>
            <Link href={"/blog"}>BLOG</Link>
            <Link href={"/contact"}>CONTACT</Link>
        </div>
    );
}