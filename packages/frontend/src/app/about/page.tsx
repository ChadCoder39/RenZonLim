import AboutBlock1 from "@/components/about/block1";
import AboutBlock2 from "@/components/about/block2";
import AboutBlock3 from "@/components/about/block3";
import AboutBlock4 from "@/components/about/block4";
import AboutBlock5 from "@/components/about/block5";

export default function AboutPage() {
    return (
        <div className="mt-32">
            <AboutBlock1/>

            <AboutBlock2/>

            <AboutBlock3/>

            <AboutBlock4/>

            <AboutBlock5/>

            <div className="min-h-44"></div>
        </div>
    );
}