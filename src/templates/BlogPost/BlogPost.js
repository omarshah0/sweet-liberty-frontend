import React from "react"
import { graphql } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import Seo from "../../components/SEO"
import Layout from "../../components/Layout"
import {
  Main,
  Container,
  AuthorBox,
  PreviousArticleBox,
  NextArticleBox,
  BackToBlog,
} from "../../components/UI"
import ShareArticle from "../../components/ShareArticle"

const BlogPost = ({ data, pageContext }) => {
  const { nextPost, prevPost } = pageContext
  const { title, body, category, createdAt, author, heroImage, seo } =
    data.contentfulBlog

  const options = {
    renderText: text => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="font-cantataOne text-lg text-brandDark max-w-3xl">
          {children}
        </p>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <GatsbyImage
          image={node.data.target.gatsbyImageData}
          alt="Yet to Set"
          className="rounded-xl overflow-hidden my-5"
        />
      ),
    },
  }

  return (
    <Layout>
      <Seo
        title={seo?.title}
        description={seo?.description}
        twitterCard={seo?.twitterCardType}
        imageUrl={heroImage?.file.url}
      />
      <Main className="bg-brandLight">
        <Container>
          <div className="md:px-12 lg:px-16 pb-24 md:pb-36 lg:pb-48">
            <div className="lg:flex justify-between items-center mb-5 md:mb-9">
              <div>
                <h1 className="font-bebas text-5xl md:text-6xl text-center lg:text-left lg:text-8xl text-brandDark mb-2 lg:mb-0 lg:max-w-xl">
                  {title}
                </h1>
                <h2 className="text-brandRed font-bebas text-center lg:text-left text-3xl md:text-5xl mb-3 lg:mb-0">
                  {category ? (
                    React.Children.toArray(
                      category.map(category => (
                        <span className="mr-3">{category.title}</span>
                      ))
                    )
                  ) : (
                    <span className="mr-3">Uncategorized</span>
                  )}
                </h2>
              </div>
              {heroImage?.gatsbyImageData && (
                <div className="rounded-xl w-full h-[184px] lg:w-[578px] md:h-[360px] overflow-hidden">
                  <GatsbyImage
                    image={heroImage.gatsbyImageData}
                    alt={heroImage.title}
                    className="w-full h-full"
                  />
                </div>
              )}
            </div>
            <div className="lg:grid lg:grid-cols-4">
              <aside className="mb-4 md:mb-0 lg:mr-9">
                <AuthorBox
                  name={author?.name}
                  slug={author?.slug}
                  createdAt={createdAt}
                  className="mb-1"
                />
                {nextPost && (
                  <NextArticleBox
                    title={nextPost.title}
                    slug={nextPost.slug}
                    className="mb-1"
                  />
                )}
                {prevPost && (
                  <PreviousArticleBox
                    title={prevPost.title}
                    slug={prevPost.slug}
                    className="mb-1"
                  />
                )}
                <BackToBlog />
              </aside>
              <div className="body col-span-3">
                <ShareArticle className="mb-9" slug={pageContext.slug} />
                {body && <div>{renderRichText(body, options)}</div>}
              </div>
            </div>
          </div>
        </Container>
      </Main>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query ($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      contentful_id
      title
      slug
      heroImage {
        title
        gatsbyImageData
        file {
          url
        }
      }
      category {
        title
        slug
      }
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData
          }
        }
      }
      author {
        name
        slug
      }
      seo {
        title
        description
        twitterCardType
      }
      createdAt(formatString: "MMMM DD, YYYY")
    }
  }
`
