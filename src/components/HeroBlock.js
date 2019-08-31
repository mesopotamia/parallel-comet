import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class HeroBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class="block hero-block outer">
              <div class="inner-small">
                <div class="block-header">
                  <h2 class="block-title">{_.get(this.props, 'section.title')}</h2>
                </div>
                <div class="block-content">
                  <div class="block-copy">
                    {markdownify(_.get(this.props, 'section.content'))}
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
