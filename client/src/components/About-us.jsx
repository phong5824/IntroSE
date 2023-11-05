import NavBar from "./modules/Navbar";
import Namdua from '../assets/5dua.jpg';
import Footer from "./modules/Footer";

const About_us = () => {
    return (
        <div className="home-wrapper h-screen overflow-y-auto">
            <NavBar />
            <div className="text-center italic text-lg mt-8 mx-24 mb-10">
                <p>
                    Chúng mình là nhóm 9. Trang web này được tạo ra mục đích đầu tiên là để hoàn thành bài tập trên trường. Lý do thứ 2 chúng mình lựa chọn tạo nên một trang web chia sẻ công thức nấu ăn vì chúng mình có sở thích nấu ăn và muốn chia sẻ nó đến với nhiều người. Hy vọng mọi người sẽ tìm thấy được công thức nấu ăn yêu thích của bản thân ở trang web này. Cảm ơn mọi người đã ghé thăm.
                </p>
            </div>
            <div
                className="w-full h-50 mx-0 bg-no-repeat bg-center rounded-lg"
                style={{
                    backgroundImage: `url(${Namdua})`,
                }}
            ></div>

            <h1 className="text-center text-2xl font-bold italic text-black mt-4">
                Các thành viên của nhóm
            </h1>


            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col-md-4 font-semibold mb-10">
                        <div className="member-card flex flex-col items-center">
                            <img src={Namdua} alt="Member 1" className="w-100 h-100 rounded-full" />
                            <p className="mt-4">Tô Tấn Hiệp</p>
                        </div>
                    </div>
                    <div className="col-md-4 font-semibold mb-10">
                        <div className="member-card flex flex-col items-center">
                            <img src={Namdua} alt="Member 2" className="w-100 h-100 rounded-full" />
                            <p className="mt-4">Nguyễn Minh Nhật</p>
                        </div>
                    </div>
                    <div className="col-md-4 font-semibold mb-10">
                        <div className="member-card flex flex-col items-center">
                            <img src={Namdua} alt="Member 3" className="w-100 h-100 rounded-full" />
                            <p className="mt-4">Nguyễn Duy Khang</p>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-6">
                        <div className="col-md-4 font-semibold mb-20">
                            <div className="member-card flex flex-col items-center">
                                <img src={Namdua} alt="Member 4" className="w-100 h-100 rounded-full" />
                                <p className="mt-4">Nguyễn Ngọc Thiên Ân</p>
                            </div>
                        </div>
                        <div className="col-md-4 font-semibold mb-20">
                            <div className="member-card flex flex-col items-center">
                                <img src={Namdua} alt="Member 5" className="w-100 h-100 rounded-full" />
                                <p className="mt-4">Nguyễn Tuấn Phong</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About_us;
