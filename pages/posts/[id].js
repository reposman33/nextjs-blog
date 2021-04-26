import { getAllPostIds, getPostData, _getAllPostIds } from "../../lib/posts";
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

    // Implementation of Catch-all Routes (https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details)
    // To retrieve not only the files in the post directory but also the files of it's subdirectories call
    // _getAllPostIds. This function returns the full path of each file in and below /posts.
    // We have to process the strings here. Doing so in /lib/posts results in error messages
    // since some paths are []...
    const ids = _getAllPostIds().map((path) => {
        // convrt the fullPath string to an array
        const pathArray = path.split("\\");
        // only keep the entries after the 'posts' directory
        return pathArray.slice(pathArray.findIndex((p) => p === "posts") + 1);
    });
    console.log("ids = ", ids);

    return { paths, fallback: false };
};

const getStaticProps = async ({ params }) => {
    const data = await getPostData(params.id);

    return { props: { data } };
};

export default Post;
export { getStaticPaths, getStaticProps };
