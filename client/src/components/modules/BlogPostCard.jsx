import PropTypes from 'prop-types';
import commentIcon from "/src/assets/chat.png";
import likeIcon from "/src/assets/heart.png";
import shareIcon from "/src/assets/send_2.png";
import saveIcon from "/src/assets/bookmark.png";
import moreIcon from "/src/assets/more.png";

const BlogPostCard = ({ post }) => {
    return (
        <div className="w-1/2 mx-auto mb-3 bg-gray-100 rounded-lg shadow-md">

            <div className="flex justify-between items-center pt-2 pl-4 pr-4">
                <div className="flex items-center text-gray-600 text-sm">
                    <img
                        className="h-12 w-12 rounded-full object-cover border-2"
                        src="https://cdn.alongwalk.info/vn/wp-content/uploads/2022/10/31171151/300-hinh-nen-dien-thoai-cute-ngau-cuc-dep-duoc-tai-nhieu1667185911.jpg"
                        alt=""
                    />
                    <div className="ml-2 items-center">
                        <div className="flex flex-row space-x-2 items-center">
                            <h1 className="text-base font-semibold text-black">sontung.mtp</h1>
                            <h1>1 hour ago</h1>
                        </div>
                        <h1>TP Hồ Chí Minh, Việt Nam</h1>
                    </div>
                </div>

                <div className="ml-auto pr-2">
                    <img
                        className="h-5 w-5"
                        src={moreIcon} alt=""
                    />
                </div>
            </div>

            <div className="mt-2 text-black bg-blue-300 p-4">
                Có ai giống em không, từ ngày dùng cái web này, chồng tối ngày cứ tấm tắc khen cơm mình nấu ngon chứ chẳng bao giờ khen mình ngon bao giờ như ngày xưa nữa không ạ? Dạo này em rầu quá 😢. Phải chăng khi mà tình yêu đã hết, quá khứ tốt đẹp không thể quay trở lại được nữa?
                Có ai có chung cảm giác này với em không ạ? 😢 Em cần một người tâm sự ngay lúc này... 🌹🌹🌹 Chúc cả nhà một ngày an lành ạ 🍀🍀🍀                </div>
            <div className="flex items-center p-2.5 ml-3 mr-3">
                {/* Like Icon */}
                <div className="flex items-center mr-4">
                    <img src={likeIcon} alt="like" className="h-7 w-7" />
                </div>

                {/* Comment Icon */}
                <div className="flex items-center mr-4">
                    <img src={commentIcon} alt="comment" className="h-7 w-7" />
                </div>

                {/* Share Icon */}
                <div className="flex items-center">
                    <img src={shareIcon} alt="share" className="h-7 w-7" />
                </div>

                {/* Save Icon */}
                <div className="ml-auto">
                    <img src={saveIcon} alt="save" className="h-8 w-8" />
                </div>
            </div>


        </div>

        // <div className="mb-6 bg-white rounded-lg overflow-hidden shadow-lg">
        //     <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover" />
        //     <div className="p-6">
        //         <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        //         <p className="text-gray-700 mb-4">{post.excerpt}</p>
        //         <div className="flex items-center justify-between text-gray-600 text-sm">
        //             <span>{post.date}</span>
        //             <span>{`${post.readTime} min read`}</span>
        //         </div>
        //     </div>
        // </div>
    );
};

BlogPostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        readTime: PropTypes.string.isRequired
    }).isRequired
};

export default BlogPostCard;
