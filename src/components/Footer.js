import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, htmlToReact} from '../utils';
import ActionLink from './ActionLink';
import SubscribeForm from './SubscribeForm';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="colophon" className="site-footer">
              <div className="footer-top outer">
                <div className="inner">
                  <div className="footer-widgets">
                    <div className="widget footer-branding">
                      {_.get(this.props, 'pageContext.site.siteMetadata.footer.logo_img', null) ? (
                      <p className="site-logo">
                        <Link to={withPrefix('/')}><img src={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.footer.logo_img', null))} alt="Logo" /></Link>
                      </p>
                      ) : 
                      <p className="site-title">
                        <Link to={withPrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.title', null)}</Link>
                      </p>
                      }
                      {_.get(this.props, 'pageContext.site.siteMetadata.footer.tagline', null) && (
                      <p className="site-description">
                        {_.get(this.props, 'pageContext.site.siteMetadata.footer.tagline', null)}
                      </p>
                      )}
                    </div>
                    {((_.get(this.props, 'pageContext.site.siteMetadata.footer.has_nav', null) && _.get(this.props, 'pageContext.site.siteMetadata.footer.nav_links', null)) || (_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social', null) && _.get(this.props, 'pageContext.site.siteMetadata.footer.social_links', null))) && (
                    <nav className="widget footer-navigation">
                      <div className="footer-nav-inside">
                        {(_.get(this.props, 'pageContext.site.siteMetadata.footer.nav_links', null) && _.get(this.props, 'pageContext.site.siteMetadata.footer.has_nav', null)) && (
                        <div className="secondary-nav">
                          <h2 className="widget-title">{_.get(this.props, 'pageContext.site.siteMetadata.footer.nav_title', null)}</h2>
                          <ul className="secondary-menu">
                            {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.nav_links', null), (action, action_idx) => (
                            <li key={action_idx}>
                              <ActionLink {...this.props} action={action} />
                            </li>
                            ))}
                          </ul>
                        </div>
                        )}
                        {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social', null) && (
                        <div className="social-nav">
                          <h2 className="widget-title">{_.get(this.props, 'pageContext.site.siteMetadata.footer.social_title', null)}</h2>
                          <ul className="social-links">
                            {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.social_links', null), (action, action_idx) => (
                            <li key={action_idx}>
                              <ActionLink {...this.props} action={action} />
                            </li>
                            ))}
                          </ul>
                        </div>
                        )}
                      </div>
                    </nav>
                    )}
                    {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_subscribe', null) && (
                    <div className="widget footer-subscribe">
                      <h2 className="widget-title">{_.get(this.props, 'pageContext.site.siteMetadata.footer.subscribe_title', null)}</h2>
                      {_.get(this.props, 'pageContext.site.siteMetadata.footer.subscribe_content', null) && (
                      <p>{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.subscribe_content', null))}</p>
                      )}
                      <SubscribeForm {...this.props} />
                    </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="site-info outer">
                <div className="inner">
                  {htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null))}
                  &nbsp;
                  {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links', null), (action, action_idx) => (
                    <ActionLink key={action_idx} {...this.props} action={action} />
                  ))}
                </div>
              </div>
            </footer>
        );
    }
}
