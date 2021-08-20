import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit
          <div className="singlePostEdit">
            <i className=" singlePostIcon far fa-edit"></i>
            <i className="far fa-trash-alt singlePostIcon "></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Shubham</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          similique aliquam repellendus iste qui, vitae deleniti expedita in
          omnis esse tempore libero minima enim quis at voluptates officiis sit
          magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          similique aliquam repellendus iste qui, vitae deleniti expedita in
          omnis esse tempore libero minima enim quis at voluptates officiis sit
          magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          similique aliquam repellendus iste qui, vitae deleniti expedita in
          omnis esse tempore libero minima enim quis at voluptates officiis sit
          magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          similique aliquam repellendus iste qui, vitae deleniti expedita in
          omnis esse tempore libero minima enim quis at voluptates officiis sit
          magnam.
        </p>
      </div>
    </div>
  );
}
