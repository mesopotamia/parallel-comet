import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact, safePrefix} from '../utils';
import ContactForm from '../components/ContactForm';

export default class Contact extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <div class="outer">
              <div class="inner">
                <article class="post page post-full">
                  <header class="post-header inner-small">
                    <h1 class="post-title line-top">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                    {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                    <div class="post-subtitle">
                      {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </div>
                    }
                  </header>
                  {_.get(this.props, 'pageContext.frontmatter.img_path') && 
                  <div class="post-thumbnail">
                    <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.img_path'))} alt={_.get(this.props, 'pageContext.frontmatter.title')} />
                  </div>
                  }
                  <div class="post-content inner-small">
                    {htmlToReact(_.get(this.props, 'pageContext.html'))}
                    <ContactForm {...this.props} />
                  </div>
                </article>
              </div>
            </div>
            </Layout>
        );
    }
}
