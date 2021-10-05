import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FacebookShareButton,
  LinkedinShareButton,
  InstapaperShareButton,
  TwitterShareButton,
} from "react-share"

const ShareArticle = ({ className, slug }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )

  const siteName = site.siteMetadata.siteUrl

  return (
    <div className={`flex justify-between items-center ${className}`}>
      <p className="font-frankRuhlLibre text-sm text-brandDark font-bold">
        Share article link
      </p>
      <div className="flex">
        <FacebookShareButton url={`${siteName}/blog/${slug}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3"
          >
            <path
              d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.2391 16.703 19.7081 12.5333 19.9825V13.6H14.6667V12.5333H12.5333V10.9333C12.5333 10.0497 13.2497 9.33333 14.1333 9.33333H14.6667V8.26667H14.1333C12.6606 8.26667 11.4667 9.46057 11.4667 10.9333V12.5333H9.33333V13.6H11.4667V19.9825C7.29705 19.7081 4 16.2391 4 12Z"
              fill="#257972"
            />
          </svg>
        </FacebookShareButton>
        <InstapaperShareButton url={`${siteName}/blog/${slug}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3"
          >
            <path
              d="M12 9.33333C10.5272 9.33333 9.33333 10.5272 9.33333 12C9.33333 13.4728 10.5272 14.6667 12 14.6667C13.4728 14.6667 14.6667 13.4728 14.6667 12C14.6667 10.5272 13.4728 9.33333 12 9.33333Z"
              fill="#257972"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.8 4C6.14903 4 4 6.14903 4 8.8V15.2C4 17.851 6.14903 20 8.8 20H15.2C17.851 20 20 17.851 20 15.2V8.8C20 6.14903 17.851 4 15.2 4H8.8ZM8.26667 12C8.26667 9.93814 9.93814 8.26667 12 8.26667C14.0619 8.26667 15.7333 9.93814 15.7333 12C15.7333 14.0619 14.0619 15.7333 12 15.7333C9.93814 15.7333 8.26667 14.0619 8.26667 12ZM15.7333 8.26667H16.8V7.2H15.7333V8.26667Z"
              fill="#257972"
            />
          </svg>
        </InstapaperShareButton>
        <TwitterShareButton url={`${siteName}/blog/${slug}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3"
          >
            <path
              d="M19.9758 5.56448C19.9616 5.35054 19.8207 5.16589 19.6181 5.09576C19.4155 5.02563 19.1906 5.08366 19.0472 5.24306C18.6785 5.65283 18.2126 5.9305 17.7397 6.0571C17.0821 5.4431 16.1984 5.06643 15.2273 5.06643C13.1433 5.06643 11.4552 6.7583 11.4552 8.8436V9.31273C8.26452 9.06615 6.55827 6.64239 6.09787 5.41275C6.02345 5.21399 5.83826 5.07827 5.62632 5.06716C5.41438 5.05605 5.21602 5.17166 5.12122 5.36154C4.00471 7.59801 3.83269 9.76717 4.64416 11.6143C5.35501 13.2323 6.78459 14.5212 8.81076 15.3752C7.88991 16.0277 6.34004 16.7998 4.53337 16.7998C4.29842 16.7998 4.09115 16.9535 4.02298 17.1784C3.95482 17.4032 4.04182 17.6462 4.23722 17.7766C5.9696 18.9333 7.78522 18.9332 9.47396 18.9331L9.52565 18.9331C14.7103 18.9331 18.912 14.7238 18.912 9.53309V9.02291C19.2996 8.62891 19.6014 8.22558 19.7864 7.70417C19.9928 7.12236 20.0344 6.44774 19.9758 5.56448Z"
              fill="#257972"
            />
          </svg>
        </TwitterShareButton>
        <LinkedinShareButton url={`${siteName}/blog/${slug}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5.6C4 4.71635 4.71634 4 5.6 4H18.4C19.2837 4 20 4.71634 20 5.6V18.4C20 19.2837 19.2837 20 18.4 20H5.6C4.71634 20 4 19.2837 4 18.4V5.6ZM9.33333 9.33333H8.26667V8.26667H9.33333V9.33333ZM8.26667 15.7333V10.4H9.33333V15.7333H8.26667ZM13.0667 11.4667C12.183 11.4667 11.4667 12.183 11.4667 13.0667V15.7333H10.4V10.4H11.4667V10.9331C11.9124 10.5984 12.4663 10.4 13.0667 10.4C14.5394 10.4 15.7333 11.5939 15.7333 13.0667V15.7333H14.6667V13.0667C14.6667 12.183 13.9503 11.4667 13.0667 11.4667Z"
              fill="#257972"
            />
          </svg>
        </LinkedinShareButton>
      </div>
    </div>
  )
}

export default ShareArticle
