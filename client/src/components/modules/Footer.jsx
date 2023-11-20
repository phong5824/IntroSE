import fbIcon from "/src/assets/facebook.png";
import instaIcon from "/src/assets/instagram.png";
import twIcon from "/src/assets/twitter.png";
import logo from "/src/assets/logo-recipe.png"; // Đường dẫn đến logo của bạn

const Footer = () => {
    return (
        <footer className="bg-white p-2 border-t mt-5 text-gray-600">
            <div className="container mt-3">
                <div className="flex justify-center flex-wrap">

                    <div className="w-full sm:w-1/4 mb-4 sm:mb-0 flex flex-col justify-center items-center  sm:items-start">
                        <img src={logo} alt="LookCook Logo" className="h-20 rounded-full mx-auto" />
                        <p className="text-sm text-center sm:text-left mx-auto mt-3">LoveCook là một website chia sẻ các công thức nấu ăn. Cùng nhau nấu những món ăn thật ngon nào!</p>
                    </div>

                    <div className="w-full sm:w-1/6 ml-20 mb-7 sm:mb-0">
                        <h5 className="text-lg font-bold mb-4">Công ty</h5>
                        <ul className="text-sm">
                            <li className="mb-2"><a href="/home">Home</a></li>
                            <li className="mb-2"><a href="/about-us">About us</a></li>
                            <li><a href="/activity">Activity</a></li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/6 mb-7 sm:mb-0">
                        <h5 className="text-lg font-bold mb-4">Nguồn</h5>
                        <ul className="text-sm">
                            <li className="mb-2"><a href="/blog">Blog</a></li>
                            <li className="mb-2"><a href="/use-cases">Use Cases</a></li>
                            <li><a href="/insights">Insights</a></li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/4 flex flex-col items-start">
                        <img src={logo} alt="LookCook Logo" className="h-16 mb-3 rounded-full" />

                        <h5 className="text-md font-semibold mb-3">Hòm thư góp ý</h5>
                        <div className="flex w-full sm:max-w-xs border rounded overflow-hidden">
                            <input type="email" className="p-2 text-sm text-gray-700 flex-grow" placeholder="Góp ý với chúng tôi tại đây nhé" />
                            <button className="bg-green-500 text-white px-4">Gửi</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-3 border-t pt-3">
                    <a href="https://www.facebook.com" className="text-gray-600" target="_blank" rel="noopener noreferrer">
                        <img src={fbIcon} alt="Facebook" className="h-6 w-6" />
                    </a>
                    <a href="https://www.instagram.com" className="text-gray-600 mx-4" target="_blank" rel="noopener noreferrer">
                        <img src={instaIcon} alt="Instagram" className="h-6 w-6" />
                    </a>
                    <a href="https://www.twitter.com" className="text-gray-600" target="_blank" rel="noopener noreferrer">
                        <img src={twIcon} alt="Twitter" className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
