import fbIcon from "/src/assets/facebook.png";
import instaIcon from "/src/assets/instagram.png";
import twIcon from "/src/assets/twitter.png";

const Footer = () => {
    return (
        <footer className="bg-green-500 p-2.5 text-white mt-3">
            <div className="container mx-auto mb-3">
                <div className="flex justify-between items-center">
                    <p>&copy; 2023 Love Cook</p>
                    <div className="flex space-x-4">
                        <a href="/contact">Contact</a>
                        <a href="/privacy-policy">Privacy Policy</a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
                <a href="https://www.facebook.com" className="text-white" target="_blank" rel="noopener noreferrer">
                    <img src={fbIcon} alt="Facebook" className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com" className="text-white" target="_blank" rel="noopener noreferrer">
                    <img src={instaIcon} alt="Instagram" className="h-6 w-6" />
                </a>
                <a href="https://www.twitter.com" className="text-white" target="_blank" rel="noopener noreferrer">
                    <img src={twIcon} alt="Twitter" className="h-6 w-6" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
