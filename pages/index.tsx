import React from "react";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Grid from "../components/grid";

const Index: React.FC<{ allPosts: any }> = ({ allPosts }) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Morgenmiddag</title>
        </Head>
        <Intro />
        <Grid items={allPosts} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}

export default Index;
