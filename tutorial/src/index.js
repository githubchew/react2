import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
const firstbook = {
    author:"jordan moore",
    title:'interesting facts tbook title',
    img: './images/book-1.jpg',
}
const secondbook = {
    author:"name 2",
    title:' facts tbook title',
    img: './images/book-1.jpg',
}


const BookList = () =>{
    return <section className='booklist'>
        <Book author={firstbook.author} title={firstbook.title} img={firstbook.img} />

        <Book author={secondbook.author} title={secondbook.title} img={secondbook.img} />
        <Book />
        <Book />
 
    </section> 
}

const Book = (props)=>{
    console.log(props)
    return <article className='book'>
        <img src={props.img} alt='{props.title}' />
        <h2>{props.title}</h2>
        <h4>{props.author}</h4>
    </article>
}

const Image = ()=> <img src='./images/book-1.jpg' alt='img' />
const Title = ()=> <h2>Snadwich :klkkl A Novel</h2>
const Author = ()=> {
    return <h4 style={{color:'#617d98', fontSize: '0.75rem'}}>Autor:   jk rowling</h4>
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)