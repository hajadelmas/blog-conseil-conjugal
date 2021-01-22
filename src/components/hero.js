import React from 'react'
import Img from 'gatsby-image'
import ImgCouple from '../images/img_couple.svg'

import {Row, Container, Col} from 'react-bootstrap'

import styles from './hero.module.css'

export default ({ data }) => (

  <Container className={styles.hero}>

    <Row>

      <Col sm={12} md={6}>
       <img src={ImgCouple} style={{ width: "100%", backgroundColor: "white" }} data-sal="slide-right" data-sal-delay="400" data-sal-easing="ease-out-sine"/>       
      </Col>

      <Col sm={12} md={6}>
        <div className={styles.heroDetails} data-sal="slide-left" data-sal-delay="400" data-sal-easing="ease-out-sine">
          {/* <h3 className={styles.heroHeadline}>Carpe Consilium</h3> */}
          <p className={styles.heroTitle}>Ou comment mettre à profit le Conseil Conjugal et Familial.</p>
          <p>Imaginons le potentiel des bienfaits du Conseil Conjugal et Familial si on en comprenait davantage son utilité et son sens, s’il était encore plus valorisé. Si on profitait de son « tenir conseil »…</p>
        </div>
      </Col>
      

      
    </Row>
    
      
      

      

      

  </Container>
  
)
