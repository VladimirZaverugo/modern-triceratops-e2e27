import React from 'react';
import _ from 'lodash';

import {Link, withPrefix} from '../utils';

export default class ActionLink extends React.Component {
    render() {
        let action = _.get(this.props, 'action', null);
        let class_names = _.get(this.props, 'class_names', null);
        return (
            <Link to={withPrefix(_.get(action, 'url', null))}
            	{...(_.get(action, 'new_window', null) ? ({target: '_blank'}) : null)}
            	{...((_.get(action, 'new_window', null) || _.get(action, 'no_follow', null)) ? ({rel: (_.get(action, 'new_window', null) ? ('noopener ') : '') + (_.get(action, 'no_follow', null) ? ('nofollow') : '')}) : null)}
            	className={class_names}>{_.get(action, 'label', null)}</Link>
        );
    }
}
