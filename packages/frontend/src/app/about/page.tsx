import AboutBlock1 from "@/components/about/block1";
import AboutBlock2 from "@/components/about/block2";
import AboutBlock3 from "@/components/about/block3";

export default function AboutPage() {
    return (
        <div className="mt-32">
            <AboutBlock1/>

            <AboutBlock2/>

            <AboutBlock3/>

            <div className="min-h-44"></div>
        </div>
    );
}