import React, { useEffect, useState } from "react";
import client from "../../client";
import { Link } from "react-router-dom";
import "./Blog.css";
import BlogImg from "./../../Media/blog.jpg";
import SlugHeader from "../SlugPage/SlugHeader";
export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        _id,
        title,
        slug,
        description,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => {
        console.log("Fetched posts:", data); // 🔍 Add this
        setPosts(data);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="blogMain">
      <SlugHeader img={BlogImg} head="OUR BLOG" />
      <div className="blogMain-wrapper">
        {posts.map((post) => (
          <div className="blogCard" key={post._id}>
            <div className="blogImg">
              {post.mainImage?.asset?.url && (
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  width={550}
                  height={310}
                />
              )}
            </div>
            <h4 className="blogCardH4">{post.title}</h4>
            <p>{post.description}</p>
            <div className="blogBtn">
              <Link to={`/${post.slug.current}`}>
                <button>Read More </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
