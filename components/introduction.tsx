import Link from "next/link";
import Image from "next/image";
import { Mail, Paperclip } from "lucide-react";

import { buttonVariants } from "./ui/button";

import Container from "./shared/container";

const Introduction = () => {
    return (
        <Container>
            <div className="text-center" id="home">
                <h3 className="text-xl mb-3">Hello I´m</h3>
                <h1 className="text-4xl font-bold mb-3">Kenley 🧑🏽‍💻</h1>
                <h2 className="text-2xl text-gray-400">Frontend And Backend Developer</h2>
                <div className="flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                        <Link className={buttonVariants()} href="mailto:kenleyjos619@gmail.com">
                            <Mail  className="mr-2" /> Contact me
                        </Link>

                        <Link className={buttonVariants({ variant: 'secondary' })}
                            href="/1-cv-evanks-ingles.pdf"
                            target="_blank">
                            <Paperclip className="mr-2" /> Download  CV
                        </Link>
                    </div>
                </div>
                <div className="pt-10 flex justify-center">

                <Image src="/profile1.png" alt="Profile pic" width={300} height={300} />
                </div>
            </div>
        </Container>
    );
}

export default Introduction;
