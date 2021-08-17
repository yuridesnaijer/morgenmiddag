import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Header from "../../components/header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import React from "react";
import PostHeader from "../../components/post/postHeader";
import DateFormatter from "../../components/date-formatter";
import PostBody from "../../components/post/postBody";
import styled from "styled-components";
import PostTitle from "../../components/post/postTitle";

export default function Post({ post, morePosts }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Header />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <article>
          <Head>
            <title>{post.title} | Morgenmiddag</title>
            <meta property="og:image" content={post.coverImage} />
          </Head>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <StyledTextContainer>
            <DateFormatter dateString={post.date} />
            <PostBody content={post.content} />
          </StyledTextContainer>
        </article>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

const StyledTextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
`;
