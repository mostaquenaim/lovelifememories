import { 
    FaLinkedin, 
    FaTiktok, 
} from "react-icons/fa6";

const SocialLinks2 = () => {
    const LinkedInLink = 'https://www.linkedin.com/company/lovelife-memories-ltd/'
    const TikTokLink = 'https://www.tiktok.com/@lovelifememories_bd'
    return (
        <>
            <a href={TikTokLink} target="_blank" rel="noreferrer" className=" text-secondary hover:text-black">
                <FaTiktok />
            </a>

            <a href={LinkedInLink} target="_blank" rel="noreferrer" className=" text-secondary hover:text-[#0a66c2]">
                <FaLinkedin />
            </a>
        </>
    );
};

export default SocialLinks2;