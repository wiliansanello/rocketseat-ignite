import { v4 } from 'uuid'

import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';
import './components/Header.module.css';

import './global.css'; 

const posts = [
  {
    id: v4(),
    author: {
      avatarUrl: "https://github.com/wiliansanello.png",
      name: "Wilian Ansanello",
      role: "Backend Javascript Developer"
    },
    content: [
      {type: "paragraph", content: "E aí galera."},
      {type: "paragraph", content: "Este é meu primeiro projeto da trilha de React no Ignite. Espero que gostem"},
      {type: "link", content: "github.com/wiliansanello/rocketseat-ignite/react/01-fundamentos"}                       
    ],
    publishedAt: new Date('2022-09-24 20:00:00')
  },
  {
    id: v4(),
    author: {
      avatarUrl: "https://github.com/sjrd.png",
      name: "Wolfgang Van Halen",
      role: "UX Designer"
    },
    content: [
      {type: "paragraph", content: "E aí galera."},
      {type: "paragraph", content: "Este é meu primeiro projeto da trilha de React no Ignite. Espero que gostem"},
      {type: "link", content: "github.com/wiliansanello/rocketseat-ignite/react/01-fundamentos"}                       
    ],
    publishedAt: new Date('2022-09-29 15:30:00')
  }
]

export function App() {
  
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post=> {
            return (
              <Post 
                id={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
      
    </div>    
  )
}


