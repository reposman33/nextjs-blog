import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

const Home = ({ allPosts }) => {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Hello, I'm Marc Baker! I'm a front end developer and Javascript engineer. You can contact me on
                    <a href="www.linkedin.com/in/bakkermarc">LinkedIn</a>
                </p>
                <section className={utilStyles.headingLg} Blog></section>
                <ul className={utilStyles.list}>
                    {allPosts.map(({ id, date, title }) => (
                        <li key={id} className={utilStyles.listItem}>
                            {date} {title}
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

/**
 * this is a function decorated with the async keyword but await is nowhere used. And getSortedPostsData is synchronous is this an error?
 *  */
const getStaticProps = async () => {
    const allPosts = getSortedPostsData();
    return { props: { allPosts } };
};

export default Home;
export { getStaticProps };
