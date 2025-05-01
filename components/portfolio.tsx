import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Portfolio = () => {
    return (
        <div className="p-4 max-w-6xl md:py-24 mx-auto" id="portfolio">
            <Title title="Portfolio" subtitle="Personal Projects 💼" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                {dataPortfolio.map((data) => (
                   <div 
                   key={data.id} 
                   className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-2xl group"
               >
                   <div className="relative overflow-hidden rounded-lg">
                       <Image
                           src={data.image}
                           alt={data.title}
                           width={300} height={200}
                           className="rounded-lg w-full object-cover transition-transform duration-300 group-hover:scale-105"
                       />
                   </div>
               
                   <h3 className="text-xl font-semibold mt-4 dark:text-white">{data.title}</h3>
                   <p className="text-gray-600 dark:text-gray-300 mt-2">{data.description}</p>
               
                   <div className="mt-3">
                       <h4 className="font-medium dark:text-white">Tecnologías utilizadas:</h4>
                       
                       <p className="text-gray-700 dark:text-gray-400">{data.technologies.join(", ")}</p>
                   </div>
               
                   <div className="mt-5 flex gap-5">
                       <Link
                           className={buttonVariants({ variant: "outline" })}
                           href={data.urlGithub}
                           target="_blank"
                       >
                           Github
                       </Link>
               
                       <Link
                           className={buttonVariants()}
                           href={data.urlDemo}
                           target="_blank"
                       >
                           Live demo
                       </Link>
                   </div>
               </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;