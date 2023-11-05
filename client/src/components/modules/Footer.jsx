const Footer = () => {
    return (
        <footer className="bg-green-500 p-4 text-white mt-3">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <p>&copy; 2023 Love Cook</p>
                    <div className="flex space-x-4">
                        <a href="/contact">Contact</a>
                        <a href="/privacy-policy">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;