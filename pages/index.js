import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";

const Home = ({ sortedPostData }) => {
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
                    {sortedPostData.map(({ id, title, date }) => (
                        <li key={id} className={utilStyles.listItem}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <div>
                                <span className={utilStyles.lightText}>
                                    <Date dateString={date} />
                                </span>
                            </div>
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
    const sortedPostData = getSortedPostsData();
    return { props: { sortedPostData } };
};

export default Home;
export { getStaticProps };
