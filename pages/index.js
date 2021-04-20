import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getAllPostIds } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

const Home = (postIds) => {
    console.log("postIds = ", postIds);
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
                    {postIds.map(({ id }) => (
                        <li key={id} className={utilStyles.listItem}>
                            {id}
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

const geStaticProps = async () => {
    const postIds = getAllPostIds();

    return { props: postIds };
};

export default Home;
export { geStaticProps };
