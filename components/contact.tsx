import { dataContact } from "@/data";
import Title from "./shared/title";
import Link from "next/link";
import ContactForm from "./contact-form";

const Contact = () => {
    return (
        <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto" id="contact">
            <Title title="Contact me" subtitle="Get in touch with me 👋" />

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
                <div>
                    {dataContact.map((data) => (
                       <div key={data.id}
                       className="flex flex-col items-center bg-gray-100 dark:bg-slate-800 rounded-lg mb-5 p-4"
                   >
                            {data.icon}
                            <p>{data.title}</p>
                            <p>{data.subtitle}</p>
                            <Link href={data.link} target="_blank">
                                Send message
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="col-span-2">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;