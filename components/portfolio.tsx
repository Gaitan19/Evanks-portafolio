import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
    return (
        <div className="p-4 max-w-6xl md:py-24 mx-auto" id="portfolio">
            <Title title="Portfolio" subtitle="Personal Projects 💼" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {dataPortfolio.map((data) => (
                    <div 
                        key={data.id} 
                        className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden border border-gray-100 dark:border-gray-800"
                    >
                        {/* Image Container with Fixed Aspect Ratio */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image
                                src={data.image}
                                alt={data.title}
                                width={400}
                                height={300}
                                className="object-fill w-full h-full transition-transform duration-300 group-hover:scale-105"
                                quality={100}
                                priority={false}
                            />
                        </div>

                        {/* Content Container */}
                        <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
                            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white truncate">
                                {data.title}
                            </h3>
                            
                            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4 flex-grow">
                                {data.description}
                            </p>

                            <div className="mb-4">
                                <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-400">
                                    Technologies:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {data.technologies.map((tech, index) => (
                                        <span 
                                            key={index}
                                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md text-gray-600 dark:text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Buttons Container */}
                            <div className="flex gap-3 mt-4">
                                <Link
                                    className={buttonVariants({
                                        variant: "outline",
                                        className: "flex-1 flex items-center justify-center gap-2 text-sm"
                                    })}
                                    href={data.urlGithub}
                                    target="_blank"
                                >
                                    <Github className="w-4 h-4" />
                                    <span>Code</span>
                                </Link>
                                <Link
                                    className={buttonVariants({
                                        className: "flex-1 flex items-center justify-center gap-2 text-sm"
                                    })}
                                    href={data.urlDemo}
                                    target="_blank"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>Demo</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;