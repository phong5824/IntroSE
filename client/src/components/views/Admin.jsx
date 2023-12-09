import { useState, useEffect } from "react";
import NavBar from "../modules/Navbar.jsx";
import Footer from "../modules/Footer";
import { handleGetAllUsers } from "../../action/userAction";
import axios from 'axios';

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [newPassword, setNewPassword] = useState("");
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await handleGetAllUsers();
                console.log(response);
                if (response.success) {
                    setUsers(response.users);
                } else {
                    const errorMessage = response && response.data ? response.data.message : "Response is undefined";
                    console.error("Error fetching users:", errorMessage);
                }
            } catch (error) {
                console.error("Error fetching users:", error.message);
            }
        };

        fetchUsers();
    }, []);

    const handleShowChangePassword = (userId) => {
        setShowChangePassword(true);
        setSelectedUserId(userId);
    };

    const handleChangePasswordClick = async () => {
        try {
            // Get the authentication token from localStorage or wherever you store it
            const token = localStorage.getItem('accessToken');

            // Gửi yêu cầu đổi mật khẩu trực tiếp
            const response = await axios.post(
                'http://127.0.0.1:8000/users/admin/changepassword',
                {
                    userId: selectedUserId,
                    newPassword: newPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // Kiểm tra phản hồi từ server và xử lý nếu cần
            if (response.data.success) {
                console.log('Password changed successfully!');

                const updatedUsers = users.map((user) =>
                    user.user_id === selectedUserId ? { ...user, account: { ...user.account, password: newPassword } } : user
                );

                // Cập nhật state
                setUsers(updatedUsers);
                // Đặt lại trạng thái để ẩn input và reset dữ liệu
                setShowChangePassword(false);
                setSelectedUserId(null);
                setNewPassword('');
            } else {
                console.error('Error changing password:', response.data.message);
            }
        } catch (error) {
            console.error('Error changing password:', error.message);
        }
    };

    return (
        <div>
            <NavBar />
            <h1 className="text-4xl font-bold text-center mt-4">User Management</h1>
            {users && users.length > 0 ? (
                <div className="w-full overflow-x-auto p-5">
                    <table className="w-full text-center table-auto">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">ID</th>
                                <th className="border px-4 py-2">Email</th>
                                <th className="border px-4 py-2">Full name</th>
                                <th className="border px-4 py-2">Role</th>
                                <th className="border px-4 py-2">Password</th>
                                <th className="border px-4 py-2">Change password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.user_id}>
                                    <td className="border px-4 py-2">{user.user_id}</td>
                                    <td className="border px-4 py-2">{user.account.email}</td>
                                    <td className="border px-4 py-2">{user.name}</td>
                                    <td className="border px-4 py-2">{user.is_admin ? 'ADMIN' : 'USER'}</td>
                                    <td className="border px-4 py-2">{user.account.password}</td>
                                    <td className="border px-4 py-2">
                                        {showChangePassword && selectedUserId === user.user_id ? (
                                            <div className="flex items-center">
                                                <input
                                                    type="password"
                                                    value={newPassword}
                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                    className="border p-1 mr-2"
                                                    placeholder="New password"
                                                />
                                                <button
                                                    onClick={() => handleChangePasswordClick(user.user_id)}
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => handleShowChangePassword(user.user_id)}
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Change password
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No users found.</p>
            )}
            <Footer />
        </div>
    );
};

export default Admin;
