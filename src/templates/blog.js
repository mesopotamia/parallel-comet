import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {getPages, Link, safePrefix, htmlToReact} from '../utils';

export default class Blog extends React.Component {
    render() {
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
            <div class="outer">
              <div class="inner">
                <div class="post-feed">
                  {_.map(display_posts, (post, post_idx) => (
                  <article key={post_idx} class="post">
                    <header class="post-header inner-small">
                      <h2 class="post-title line-top"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h2>
                      <div class="post-meta">
                        <time class="published"
                          datetime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</time>
                      </div>
                      {_.get(post, 'frontmatter.subtitle') && 
                      <div class="post-subtitle">
                        {htmlToReact(_.get(post, 'frontmatter.subtitle'))}
                      </div>
                      }
                    </header>
                    {_.get(post, 'frontmatter.thumb_img_path') && 
                    <Link class="post-thumbnail" to={safePrefix(_.get(post, 'url'))}>
                      <img class="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
                    </Link>
                    }
                    {_.get(post, 'frontmatter.excerpt') && 
                    <div class="post-excerpt inner-small">
                      <p>{_.get(post, 'frontmatter.excerpt')}</p>
                    </div>
                    }
                  </article>
                  ))}
                </div>
              </div>
            </div>
            </Layout>
        );
    }
}
