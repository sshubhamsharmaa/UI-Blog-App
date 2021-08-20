import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fuga
        deleniti doloremque ad eum laborum magni cumque soluta sunt amet,
        temporibus repellat dolore, porro ipsa ratione nulla, obcaecati sequi
        recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Numquam fuga deleniti doloremque ad eum laborum magni cumque soluta sunt
        amet, temporibus repellat dolore, porro ipsa ratione nulla, obcaecati
        sequi recusandae. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Numquam fuga deleniti doloremque ad eum laborum magni cumque
        soluta sunt amet, temporibus repellat dolore, porro ipsa ratione nulla,
        obcaecati sequi recusandae.
      </p>
    </div>
  );
}
