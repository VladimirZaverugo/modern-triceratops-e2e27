import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionPricing extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className={'block pricing-block bg-' + _.get(section, 'background', null) + ' outer'}>
              <div className="block-header inner-small">
                {_.get(section, 'title', null) && (
                <h2 className="block-title">{_.get(section, 'title', null)}</h2>
                )}
                {_.get(section, 'subtitle', null) && (
                <p className="block-subtitle">
                  {htmlToReact(_.get(section, 'subtitle', null))}
                </p>
                )}
              </div>
              {_.get(section, 'pricing_plans', null) && (
              <div className="inner">
                <div className="grid">
                  {_.map(_.get(section, 'pricing_plans', null), (plan, plan_idx) => (
                  <div key={plan_idx} className={'cell plan' + (_.get(plan, 'highlight', null) ? (' highlight') : '')}>
                    <div className="plan-inside">
                    <h3 className="plan-name">{_.get(plan, 'title', null)}</h3>
                    {_.get(plan, 'price', null) && (
                    <div className="plan-price">{_.get(plan, 'price', null)}</div>
                    )}
                    <div className="plan-details">
                      {markdownify(_.get(plan, 'details', null))}
                    </div>
                    {_.get(plan, 'actions', null) && (
                    <p className="block-buttons">
                      <CtaButtons {...this.props} actions={_.get(plan, 'actions', null)} />
                    </p>
                    )}
                    </div>
                  </div>
                  ))}
                </div>
              </div>
              )}
            </section>
        );
    }
}
