import { getAllPostIds } from "../../lib/posts";

const Post = (params) => {};

const getStaticPaths = async () => {
    const paths = getAllPostIds();

    return { paths, fallback: false };
};

const getStaticProps = async () => {};

export default Post;
export { getStaticPaths, getStaticProps };
