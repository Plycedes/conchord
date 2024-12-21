"use-client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

function HeroSection() {
    return (
        <div
            className="h-screen md:h-[40 rem] w-full rounded-md flex 
            flex-col items-center justify-center relative overflow-hidden 
        mx-auto py-10 md:py-0"
        >
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="pink" />
            <div className="p-4 relative z-10 w-full text-center">
                <h1
                    className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text
                text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >
                    Explore the World of Music
                </h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                    Embark on a musical journey with Conchord. Discover your passion for music
                    through engaging courses, expert guidance, and a supportive community.
                </p>
                <div className="mt-5">
                    <Link href={"/courses"}>
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                        >
                            <span>Aceternity UI</span>
                        </HoverBorderGradient>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
