import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Layout from "../../components/layout";

const Post = ({ data }) => {
    return (
        <Layout>
            <Head>
                <title>{data.title}</title>
            </Head>
            <div>{data.title}</div>
            <div>{data.id}</div>
            <div>{data.date}</div>
            <div dangerouslySetInnerHTML={{ __html: data.contentHTML }}></div>
        </Layout>
    );
};

const getStaticPaths = async () => {
    const paths = getAllPostIds();
    return { paths, fallback: false };
};

const getStaticProps = async ({ params }) => {
    const data = await getPostData(params.id);

    return { props: { data } };
};

export default Post;
export { getStaticPaths, getStaticProps };
