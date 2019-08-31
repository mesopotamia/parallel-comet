import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {htmlToReact, getPages, Link, safePrefix} from '../utils';

export default class PostsBlock extends React.Component {
    render() {
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
        let recent_posts = display_posts.slice(0, _.get(this.props, 'section.num_posts_displayed'));
        return (
            <section id={_.get(this.props, 'section.section_id')} class="posts-block block outer">
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
                    <div class="post-feed">
                      {_.map(recent_posts, (post, post_idx) => (
                      <article key={post_idx} class="post">
                        {_.get(post, 'frontmatter.thumb_img_path') && 
                        <Link class="post-thumbnail" to={safePrefix(_.get(post, 'url'))}><img class="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} /></Link>
                        }
                        <header class="post-header">
                          <h3 class="post-title"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h3>
                          <div class="post-meta">
                            <time class="published" datetime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</time>
                          </div>
                        </header>
                        {_.get(post, 'frontmatter.excerpt') && 
                        <div class="post-excerpt">
                          <p>{_.get(post, 'frontmatter.excerpt')}</p>
                        </div>
                        }
                      </article>
                      ))}
                    </div>
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
            </section>
        );
    }
}
