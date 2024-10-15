import Link from "next/link";

export default function AppHeader() {
    return (
        <div className="flex flex-row gap-5 md:gap-10 w-full justify-center items-center py-12 absolute top-0 text-[#eae2d7] flex-wrap z-50">
            <Link href={"/"}>HOME</Link>
            <Link href={"/about"}>ABOUT US</Link>
            <Link href={"/services"}>SERVICES</Link>
            <Link href={"/portfolio"}>PORTFOLIO</Link>
            <Link href={"/blog"}>BLOG</Link>
            <Link href={"/contact"}>CONTACT</Link>
        </div>
    );
}