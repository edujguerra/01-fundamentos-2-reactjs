import styles from './Comment.module.css';
import { ThumbsUp,Trash } from "phosphor-react";
import { Avatar } from './Avatar';

export function Comment( { content, onDeleteComment } ) {
    function handleDeleteComment(){
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                src='https://media-exp1.licdn.com/dms/image/C4E03AQGGZOo3Fg4aDQ/profile-displayphoto-shrink_800_800/0/1516509752581?e=1674691200&v=beta&t=x5kKe86BjnGl2gU4okqJne-kCPxftwwoTlm1ajJj700'
                hasBorder={false}
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Eduardo J. Guerra</strong>
                            <time title='11 de maio as 03:13' dateTime='2022-05-11 08:13:00'>Cerca de 1hr atrás.</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                            
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}