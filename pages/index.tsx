import React from "react";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Grid from "../components/grid";
import Intro from "../components/constructs/intro/intro";

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
    "coverImage",
    "excerpt",
    "tags",
  ]);

  return {
    props: { allPosts },
  };
}

export default Index;
