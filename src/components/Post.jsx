import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src='https://media-exp1.licdn.com/dms/image/C4E03AQGGZOo3Fg4aDQ/profile-displayphoto-shrink_800_800/0/1516509752581?e=1674691200&v=beta&t=x5kKe86BjnGl2gU4okqJne-kCPxftwwoTlm1ajJj700' />
                    <div className={styles.authorInfo}>
                        <strong>Eduardo J. Guerra</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time 
                    title='11 de maio as 03:13'
                    dateTime='2022-05-11 08:13:00'>Publicado há 1h.</time>
            </header>

            <div className={styles.content}>
                <p>🛑 Atenção Desenvolvedor(a) 🛑</p>
                <p>Você é desenvolvedor (a) e quer aprender na prática como desenvolver as principais habilidades exigidas pelas empresas no mercado para que você seja capaz de trabalhar em projetos de grande porte com total confiança e desenvolvendo do jeito certo?</p>
                <p>A imersão Full Cycle 10.0 começa em breve e é um evento 100% online e gratuito focado para quem quer:</p>
                <p>✔️ Se manter atualizado das novas tecnologias;</p>
                <p>✔️ Trabalhar em grandes empresas e projetos;</p>
                <p>✔️ Ser mais valorizado;</p>
                <p>✔️ <a href="">jane.design/doctorcare</a></p>
                <p><a href="">#novoprojeto #react #ignite</a></p>
            </div>


            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>                
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
            </div>
        </article>
    )
}