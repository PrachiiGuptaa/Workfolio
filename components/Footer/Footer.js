import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {

    const goToWhatsapp = () => {
        const contactNumber = "9170133568";
        const whatsAppText = "Hello!";
        const encodedText = encodeURIComponent(whatsAppText);
        const link = `https://wa.me/${contactNumber}?text=${encodedText}`;
    
        window.open(link, "_blank");
    };

    return (
        <footer className="bg-gray-800 text-white py-4 text-center">
            <div className="flex flex-col md:flex-row md:gap-8 gap-3 justify-center mb-4">
                <Link href="tel:+919170133568" target="_blank" rel="noreferrer">
                    <div className="flex gap-2 items-center justify-center text-sm md:text-base">
                        <FaPhoneAlt className="text-lg" />
                        <span>Mobile</span>
                    </div>
                </Link>
                <div
                    onClick={goToWhatsapp}
                    className="cursor-pointer flex gap-2 items-center justify-center text-sm md:text-base"
                >
                    <IoLogoWhatsapp className="text-2xl" />
                    <span>WhatsApp</span>
                </div>
                <Link href="mailto:guptaprachi2098@gmail.com" target="_blank" rel="noreferrer">
                    <div className="flex gap-2 items-center justify-center text-sm md:text-base">
                        <MdEmail className="text-2xl" />
                        <span>E-Mail</span>
                    </div>
                </Link>
                <Link href="https://www.linkedin.com/in/prachi-gupta-9a218226a" target="_blank" rel="noopener noreferrer">
                    <div className="flex gap-2 items-center justify-center text-sm md:text-base">
                        <BiLogoLinkedinSquare className="text-2xl" />
                        <span>LinkedIn</span>
                    </div>
                </Link>
            </div>
            <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Prachi Gupta. All rights reserved.</p>
        </footer>
    );
}
