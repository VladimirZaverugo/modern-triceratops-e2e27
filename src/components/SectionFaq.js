import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify} from '../utils';

export default class SectionFaq extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className={'block faq-block bg-' + _.get(section, 'background', null) + ' outer'}>
              <div className="inner-small">
                <div className="block-header">
                  {_.get(section, 'title', null) && (
                  <h2 className="block-title">{_.get(section, 'title', null)}</h2>
                  )}
                  {_.get(section, 'subtitle', null) && (
                  <p className="block-subtitle">
                    {htmlToReact(_.get(section, 'subtitle', null))}
                  </p>
                  )}
                </div>
                {_.get(section, 'faq_items', null) && (
                <dl className="faq-accordion">
                  {_.map(_.get(section, 'faq_items', null), (faqitem, faqitem_idx) => (<React.Fragment key={faqitem_idx + '.2'}>
                  <dt key={faqitem_idx} className="accordion-header">
                    <button className="accordion-trigger">
                      <div className="accordion-title">{_.get(faqitem, 'question', null)}</div>
                      <div className="accordion-icon icon-plus" />
                    </button>
                  </dt>
                  <dd key={faqitem_idx + '.1'} className="accordion-panel">
                    <div className="accordion-content">
                      {markdownify(_.get(faqitem, 'answer', null))}
                    </div>
                  </dd>
                  </React.Fragment>))}
                </dl>
                )}
              </div>
            </section>
        );
    }
}
