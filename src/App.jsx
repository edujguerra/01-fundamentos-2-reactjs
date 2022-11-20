import { Header } from "./components/Header";
import Post from "./Post"
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          <Post
            author= "Eduardo Guerra"
            content= "Conteudo do texto." />

          <Post 
            author= "Eduardo Jacobsen"
            content= "Novo Conteudo do texto." />
        </main>

      </div>
    </div>
  )
}
export default App
