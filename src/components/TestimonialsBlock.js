import React from 'react';
import _ from 'lodash';

import {htmlToReact, safePrefix} from '../utils';

export default class TestimonialsBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class="block testimonials-block outer">
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
                  {_.get(this.props, 'section.testimonialslist') && 
                  <div class="block-content">
                    <div class="testimonials-list">
                      {_.map(_.get(this.props, 'section.testimonialslist'), (testimonial, testimonial_idx) => (
                      <blockquote key={testimonial_idx} class="testimonial">
                        <p class="testimonial-text">{htmlToReact(_.get(testimonial, 'content'))}</p>
                        <footer class="testimonial-footer">
                          {_.get(testimonial, 'avatar') && 
                          <img class="testimonial-avatar" src={safePrefix(_.get(testimonial, 'avatar'))} alt="Author avatar"/>
                          }
                          <cite class="testimonial-author">{_.get(testimonial, 'author')}</cite>
                        </footer>
                      </blockquote>
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
