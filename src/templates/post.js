import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {htmlToReact, safePrefix} from '../utils';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <div class="outer">
              <div class="inner">
                <article class="post post-full">
                  <header class="post-header inner-small">
                    <h1 class="post-title line-top">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                    <div class="post-meta">
                      <time class="published"
                        datetime={moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%B %d, %Y')}</time>
                    </div>
                    {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                    <div class="post-subtitle">
                      {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </div>
                    }
                  </header>
                  {_.get(this.props, 'pageContext.frontmatter.content_img_path') && 
                  <div class="post-thumbnail">
                    <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.content_img_path'))} alt={_.get(this.props, 'pageContext.frontmatter.title')} />
                  </div>
                  }
                  <div class="post-content inner-small">
                    {htmlToReact(_.get(this.props, 'pageContext.html'))}
                  </div>
                </article>
              </div>
            </div>
            </Layout>
        );
    }
}
