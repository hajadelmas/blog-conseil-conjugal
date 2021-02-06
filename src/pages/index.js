import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

import Avatar from '../images/avatar-mama.jpeg'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero data={author.node} />
          <div className="wrapper">
            <h2 className="section-headline">Articles récents</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
            <h2 className='section-headline'>A propos de ce blog</h2>
            <div className='about'>
              <img src={Avatar} alt='avatar'/>
              <div className='about_text'>
                <p>Alors l’idée m’est venue de vous proposer ce <strong>blog</strong>, et d’en être la modératrice.
                Ceci est un blog pour réfléchir ensemble et soyons clair, il n’a pas pour but de supplanter les organisations professionnelles. Je dirai qu’il est un <strong>complément</strong> dont je vous détaillerai les pourquoi et comment dans le prochain article.
                    
                </p>
                <p>
                Il s’adresse d’abord aux professionnel.le.s attesté.e.s au <strong>Conseil conjugal</strong> et aux personnes en cours de formation. Par la suite, mon plus grand souhait serait qu’il concerne toute la population francophone. 
                </p>
                <p>
                « Vary iray no nafafy ka vary jato no nojinjaina » (« un grain de riz semé pour cent récoltés », proverbe malgache)
                N’hésitez pas à explorer les différents onglets.
                Merci de me lire et à bientôt pour partager respectueusement ensemble
                </p>
              </div>
              
            </div>
            
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
