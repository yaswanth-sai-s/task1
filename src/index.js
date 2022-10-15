import React from "react";
import ReactDOM from "react-dom";
import template1 from "./images/spiderman.jpg"
import template2 from "./images/ironman.jpg"
import template3 from "./images/avengers.jpg"
import './index.css'



const Books = [
    {
      id: 1,
      img: template1,
      title: "Spiderman",
      author: "Stanlee",
    },
  
    {
      id: 2,
      img: template2,
      title: "Ironman",
      author: "Stanlee",
    },
  
    {
      id: 3,
      img: template3,
      title: "Avengers",
      author: "Stanlee",
    },
];
  
function Booklist() {
  return (
    <div className="gridcontain">
      {
         Books.map((Book)=> {
          return <BookShelf key={Book.id} {...Book}> </BookShelf>
          })
      }

      </div>
    
  )
}

const BookShelf = (props) => {
  const { img, title, author } = props
  return (
    <>
      <img className="photo" src={img} alt="" />
      <div className="igrid">
        <h4 className="title">{title}</h4>
        <p className="author">{author}</p>
        <hr/>
      </div>
    
    </>
  )
  
}

ReactDOM.createRoot(document.getElementById("root")).render(<Booklist/>)
