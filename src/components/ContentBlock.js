import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify, Link, safePrefix} from '../utils';

export default class ContentBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class="block text-block outer">
              <div class="inner">
                <div class="block-inside">
                  <div class="block-header">
                    <h2 class="block-title">{_.get(this.props, 'section.title')}</h2>
                    {_.get(this.props, 'section.subtitle') && 
                    <p class="block-subtitle">
                      {htmlToReact(_.get(this.props, 'section.subtitle'))}
                    </p>
                    }
                  </div>
                  <div class="block-content">
                    <div class="block-copy">
                      {markdownify(_.get(this.props, 'section.content'))}
                      {_.get(this.props, 'section.actions') && 
                      <p class="block-cta">
                        {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                        <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} class="button">{_.get(action, 'label')}</Link>
                        ))}
                      </p>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
