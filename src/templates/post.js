import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

import {Layout} from '../components/index';
import {withPrefix, htmlToReact} from '../utils';
import BlogPostFooter from '../components/BlogPostFooter';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <div className="outer">
              <div className="inner-medium">
                <article className="post post-full">
                  <header className="post-header">
                    <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                  </header>
                  {_.get(this.props, 'pageContext.frontmatter.image', null) && (
                  <div className="post-thumbnail">
                    <img src={withPrefix(_.get(this.props, 'pageContext.frontmatter.image', null))} alt={_.get(this.props, 'pageContext.frontmatter.image_alt', null)} />
                  </div>
                  )}
                  {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (
                  <div className="post-subtitle">
                    {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle', null))}
                  </div>
                  )}
                  <div className="post-content">
                    {htmlToReact(_.get(this.props, 'pageContext.html', null))}
                  </div>
                  <BlogPostFooter {...this.props} page={this.props.pageContext} date_type={'long'} />
                </article>
              </div>
            </div>
            </Layout>
        );
    }
}
