import avatar from "/src/assets/5dua.jpg";
import NavBar from "../modules/Navbar";
import Footer from "../modules/Footer"; // Đảm bảo rằng bạn nhập Footer từ đường dẫn chính xác
import Loading from "../modules/Loading";
import { handleGetUser } from "../../action/accountAction";
import { useEffect, useState } from "react";

import "./Profile.css";

export default function Profile() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const profile = await handleGetUser();
      setUserProfile(profile);
    };

    fetchUserProfile();
  }, []);

  if (!userProfile) {
    return (
      <div className="absolute top-1/2 left-1/2">
        <Loading />;
      </div>
    );
  }



  return (
    <div className="flex flex-col min-h-screen bg-green-100 ">
      <NavBar />
      <div className="flex-grow">
        <div className="flex h-full">
          <div className="w-1/5 bg-green-400 ml-4 mt-2 text-black p-5 rounded-2xl">
            {/* Sidebar header */}
            <div className="flex items-center mb-6">
              <img
                src={avatar}
                alt="Avatar"
                className="rounded-full h-14 w-14 mr-4"
              />
              <h2 className="text-lg font-semibold">{userProfile.name}</h2>
            </div>
            {/* Sidebar navigation items */}
            <nav className="flex flex-col text-center">
              <a
                href="/users/profile"
                className="bg-orange-400 text-black p-2.5 my-2 rounded-full transition duration-300 ease-in-out hover:bg-orange-500"
              >
                Thông tin cá nhân
              </a>
              <a
                href="/recipes"
                className="bg-orange-400 text-black p-2.5 my-2 rounded-full transition duration-300 ease-in-out hover:bg-orange-500"
              >
                Công thức của bạn
              </a>
              <a
                href="/favorites"
                className="bg-orange-400 text-black p-2.5 my-2 rounded-full transition duration-300 ease-in-out hover:bg-orange-500"
              >
                Công thức ưa thích
              </a>
              <a
                href="/blog"
                className="bg-orange-400 text-black p-2.5 my-2 rounded-full transition duration-300 ease-in-out hover:bg-orange-500"
              >
                Blogs
              </a>
              <a
                href="/notifications"
                className="bg-orange-400 text-black p-2.5 my-2 rounded-full transition duration-300 ease-in-out hover:bg-orange-500"
              >
                Thông báo hệ thống
              </a>
            </nav>
          </div>

          <div className="w-4/5 p-3 overflow-auto">
            <button className="mb-3 text-green-600">← Back</button>
            <div className="flex justify-center">
              {/* Profile details here */}
              <div className="w-1/2 bg-green-200 p-5 rounded shadow flex flex-col items-center">
                <div className="w-1/2 bg-white rounded shadow flex flex-col items-center transform transition-transform hover:scale-105">
                  <img
                    className="rounded h-full w-full object-cover"
                    src={avatar}
                    alt="User Avatar"
                  />{" "}
                  {/* Đảm bảo bạn có kích thước cho hình ảnh */}
                </div>
                <button className="mt-5 bg-white text-gray-800 rounded-full hover:font-semibold px-4 py-2 w-full sm:w-auto">
                  {" "}
                  {/* Cho nút mở rộng toàn bộ chiều rộng hoặc chỉ một phần trên màn hình lớn */}
                  Xác nhận danh tính
                </button>

                <div className="mt-5 text-teal-500">
                  {/* User contact details */}
                  <p className="bg-yellow-400 text-black p-2.5 my-2 rounded-full transition duration-300 ease-in-out hover:bg-orange-500">
                    <b>Số điện thoại:</b> {userProfile.phone}
                  </p>
                  <p className="bg-yellow-400 text-black p-2.5 my-2 rounded-full transition duration-300 ease-in-out hover:bg-orange-500">
                    <b>Email:</b> {userProfile.account.email}
                  </p>

                  {/* Đổi mật khẩu */}

                  {/* <button
                    className="bg-yellow-400 text-black p-2.5 my-2 rounded-full transition duration-300 ease-in-out hover:bg-orange-500"
                  >
                    Đổi mật khẩu
                  </button> */}



                </div>
              </div>
              <div className="w-1/2 ml-5">
                {/* Additional details */}
                <dl className="bg-green-200 p-5 rounded shadow space-y-3">
                  <dt className=" bg-orange-300 font-bold text-black">
                    Họ và tên :
                  </dt>
                  <dd>
                    <strong style={{ color: "blue" }}>
                      {userProfile.name}
                    </strong>
                  </dd>
                  <dt className=" bg-orange-300 font-bold">Giới tính: </dt>
                  <dd>
                    <strong style={{ color: "blue" }}>
                      {userProfile.gender === "male" ? "Nam" : "Nữ"}
                    </strong>
                  </dd>
                  <dt className=" bg-orange-300 font-bold">Tuổi: </dt>
                  <dd>
                    <strong style={{ color: "blue" }}>{userProfile.age}</strong>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
