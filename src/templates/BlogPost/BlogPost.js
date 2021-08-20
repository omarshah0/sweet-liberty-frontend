import React from "react"
import { graphql } from "gatsby"

import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import {
  Main,
  Container,
  AuthorBox,
  PreviousArticleBox,
  BackToBlog,
} from "../../components/UI"
import ShareArticle from "../../components/ShareArticle"

const BlogPost = ({ data }) => {
  console.log("Data is ", data)
  const { title, slug, body, category, createdAt, author } = data.contentfulBlog

  const options = {
    renderText: text => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    },
    renderMark: {
      [MARKS.BOLD]: text => <p className="font-bold">{text}</p>,
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
          className="rounded-xl overflow-hidden my-5"
        />
      ),
    },
  }

  return (
    <Main>
      <Container>
        <div className="md:px-12 lg:px-16 pb-24 md:pb-36 lg:pb-48">
          <div className="lg:flex justify-between items-center mb-5 md:mb-9">
            <div>
              <h1 className="font-bebas text-5xl md:text-6xl text-center lg:text-left lg:text-8xl text-brandDark mb-2 lg:mb-0 lg:max-w-xl">
                {title}
              </h1>
              <h2 className="text-brandRed font-bebas text-center lg:text-left text-3xl md:text-5xl mb-3 lg:mb-0">
                {React.Children.toArray(
                  category.map(category => (
                    <span className="mr-3">{category.title}</span>
                  ))
                )}
              </h2>
            </div>
            <div className="rounded-xl overflow-hidden">
              <StaticImage
                src="../../assets/hero.png"
                alt="Blog Dummy"
                className="w-full"
              />
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-4">
            <aside className="lg:mr-9">
              <AuthorBox
                name={author.name}
                slug={author.slug}
                createdAt={createdAt}
                className="mb-1"
              />
              <PreviousArticleBox
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                slug={slug}
                className="mb-1"
              />
              <BackToBlog />
            </aside>
            <div className="body col-span-3">
              <ShareArticle className="mb-9" />
              <div>{renderRichText(body, options)}</div>
            </div>
          </div>
        </div>
      </Container>
    </Main>
  )
}

export default BlogPost

export const query = graphql`
  query ($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      contentful_id
      title
      slug
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
      createdAt(formatString: "MMMM DD, YYYY")
    }
  }
`
