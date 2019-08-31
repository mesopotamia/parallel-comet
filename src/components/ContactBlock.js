import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';
import ContactForm from './ContactForm';

export default class ContactBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class="block contact-block outer">
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
                  <div class="block-content">
                    <ContactForm {...this.props} />
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
