import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";

const Post = ({ data }) => {
    return (
        <Layout>
            <div>{data.title}</div>
            <div>{data.id}</div>
            <div>{data.date}</div>
        </Layout>
    );
};

const getStaticPaths = async () => {
    const paths = getAllPostIds();
    return { paths, fallback: false };
};

const getStaticProps = async ({ params }) => {
    const data = getPostData(params.id);

    return { props: { data } };
};

export default Post;
export { getStaticPaths, getStaticProps };
