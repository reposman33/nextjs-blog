import Head from "next/head";
import Layout from "../../components/layout";
import Link from "next/link";

const firstPost = () => (
    <Layout>
        <Head>
            <title>My First Post</title>
        </Head>
        <div className="container">
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </div>
    </Layout>
);

export default firstPost;
