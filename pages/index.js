import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getAllPostIds } from "../lib/posts";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

const Home = ({ fileIds }) => {
    console.log("fileIds = ", fileIds);
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Hello, I'm Marc Bakker! I'm a front end developer and Javascript engineer. You can contact me on
                    <a href="www.linkedin.com/in/bakkermarc">LinkedIn</a>
                </p>
                <section className={utilStyles.headingLg}>Blog</section>
                <ul className={utilStyles.list}>
                    {Object.values(fileIds).map(({ params }) => (
                        <li key={params.id} className={utilStyles.listItem}>
                            <Link href={`/posts/${params.id}`}>
                                <a>{params.id}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <p>
                    (This is a sample website - you’ll be building a site like this on{" "}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
        </Layout>
    );
};

const getStaticProps = async () => {
    const fileIds = getAllPostIds();
    return { props: { fileIds } };
};

export default Home;
export { getStaticProps };
