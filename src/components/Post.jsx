import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post({ author, publishedAt }){
    const publishedDataFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt);

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time 
                    title='11 de maio as 03:13'
                    dateTime='2022-05-11 08:13:00'>Publicado há 1h.
                    {publishedDataFormatted}
                </time>
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