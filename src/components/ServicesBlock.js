import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify} from '../utils';

export default class ServicesBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class="block services-block outer">
              <div class="inner">
                <div class="block-inside">
                  <div class="block-header">
                    <h2 class="block-title line-top">{_.get(this.props, 'section.title')}</h2>
                    {_.get(this.props, 'section.subtitle') && 
                    <p class="block-subtitle">
                      {htmlToReact(_.get(this.props, 'section.subtitle'))}
                    </p>
                    }
                  </div>
                  {_.get(this.props, 'section.serviceslist') && 
                  <div class="block-content">
                    <div class="services-list">
                      {_.map(_.get(this.props, 'section.serviceslist'), (service, service_idx) => (
                      <div key={service_idx} class="service">
                        <span class="service-counter" aria-hidden="true">{service_idx + 1}.</span>
                        <h3 class="service-title">{_.get(service, 'title')}</h3>
                        <div class="service-text">
                          {markdownify(_.get(service, 'content'))}
                        </div>
                      </div>
                      ))}
                    </div>
                  </div>
                  }
                </div>
              </div>
            </section>
        );
    }
}
