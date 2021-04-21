import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Layout from "../../components/layout";

const Post = ({ data }) => {
    return (
        <Layout>
            <Head>
                <title>{data.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{data.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={data.date}></Date>
                </div>
                <div dangerouslySetInnerHTML={{ __html: data.contentHTML }} />
            </article>
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
