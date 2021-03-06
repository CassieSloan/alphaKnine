import React from 'react';
import { navigate } from 'gatsby';
import { Page } from '../templates/page';

const UnpublishedPage = props => {
  const IS_BROWSER = typeof window !== 'undefined';
  if (!IS_BROWSER) return null;
  const previewData = window.__PRISMIC_PREVIEW_DATA__;
  if (!previewData) {
    navigate('/404');
    return null;
  }
  // => Perform any logic from previewData to determine the correct page or template component to use.

  // Example of other post type previews
  // ----------------------------------------------
  // if (previewData.prismicBlogPost) return <BlogPost {...props} data={{ blogPost: { ...previewData.prismicBlogPost } }} />;
  return <Page {...props} data={{ page: { ...previewData.prismicPage } }} />;
};

export default UnpublishedPage;
