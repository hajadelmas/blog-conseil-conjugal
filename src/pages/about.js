import React from 'react'
import Layout from '../components/layout'
import Avatar from '../images/avatar-mama.jpeg'
import styles from './about.module.css'


export default function about() {
    return (
        <>
            <Layout>
                <div className={styles.container}>
                    <img src={Avatar} alt='avatar' className={styles.avatar}/>
                    <div className={styles.text}>
                        <p>
                            Bonjour…un mot si simple qu’on attend et réclame souvent quand les gens le boudent, l’ignorent pour un tas de raisons. Une des raisons est que les personnes ne peuvent prononcer ce mot car ils l’ont si peu entendu à leur encontre lorsqu’ils entraient dans une pièce. D’autres parlent de la politesse que doit celui qui arrive, quand certains ne veulent pas « se taper l’affiche », etc.
                        </p>

                        <p>
                            Comprendre les raisons et avoir le souci de bien accueillir, voilà ce qui me caractérisent. La formation de conseillère conjugale et familiale a « professionnalisé » ce trait de caractère, tant il est vrai que tout commence, dans ce métier, par l’accueil et l’empathie. Cette formation, je l’ai achevée en 2017 après avoir été Infirmière de service de Protection Maternelle et Infantile et de Centre de Planification durant une dizaine d’année. Depuis, je suis restée informée sur le métier, ne l’exerçant pas sereinement.
                            C’est là où le bât blesse… J’ai investi beaucoup de ma personne, j’étais comme en lutte, tracassée à faire comprendre à mon entourage (de proches et professionnel) l’importance de ce métier. Pour finalement constater qu’il risquait de disparaître. 
                        </p>
                        
                        <p>
                            Alors, de moi, j’aimerai vous dire que je crois en ce métier et à ses vertus humaines. Je voudrai le défendre, à ma façon et avec votre aide. 
                            Respectueusement,
                            
                        </p>

                        <p>
                            Claudia H. D. P.
                        </p>
                    </div>
                </div>

                <h2 className='section-headline'>Bibliographie</h2>
            </Layout>
        </>
    )
}
