import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Input } from "../style";
import { Block } from "./style";

function Blogs() {
  const [state, setstate] = useState([]);
  const [blog, setblog] = useState({});

  useEffect(() => {
    axios
      .get("https://mansurfayziev.pythonanywhere.com/?format=json")
      .then((res) => setstate(res.data));
  }, []);

  function submit() {
    if (blog.title || blog.channel) {
      if (blog.channel.substring(0, 17) === "https://youtu.be/") {
        axios
          .post("https://mansurfayziev.pythonanywhere.com/?format=json", {
            title: blog.title,
            channel:
              "https://www.youtube.com/embed/" + blog.channel.substring(17, 29),
          })
          .then(() => {
            setblog({ title: "", channel: "" });
            axios
              .get("https://mansurfayziev.pythonanywhere.com/?format=json")
              .then((res) => setstate(res.data));
          });
      }
    }
  }
  return (
    <Block>
      {state.map((item, index) => (
        <div className="blog" key={index}>
          <iframe src={item.channel} allowfullscreen></iframe>
          <h1>{item.title}</h1>
        </div>
      ))}
      <div className="blog lake">
        <div>
          <Input
            onChange={(e) => setblog((p) => ({ ...p, title: e.target.value }))}
            value={blog.title}
            placeholder="Title"
          />
          <Input
            onChange={(e) =>
              setblog((p) => ({ ...p, channel: e.target.value }))
            }
            value={blog.channel}
            placeholder="Link from Youtube"
          />
        </div>
        <Button onClick={submit}>Create Blog</Button>
      </div>
    </Block>
  );
}

export default Blogs;
