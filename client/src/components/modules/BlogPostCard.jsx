import PropTypes from 'prop-types';

const BlogPostCard = ({ post }) => {
    return (
        <div className="mb-6 bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-gray-600 text-sm">
                    <span>{post.date}</span>
                    <span>{`${post.readTime} min read`}</span>
                </div>
            </div>
        </div>
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
