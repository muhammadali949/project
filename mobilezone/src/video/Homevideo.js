import React, { useState, useEffect } from "react";
import ResponsiveEmbed from "react-responsive-embed";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { List, Avatar } from "antd";
import "./Homevideo.css";

function Homevideo() {
  const [data, setData] = useState([]);
  const [vide,uid]=useState("")
  const [title,utitle]=useState("")
// https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLN1GLm9f4YMbqIsIePKAp8ZhWmLp5hy8e&key=AIzaSyAbPL2RzXyCXwoSoNkW-WwU1YAviJTG2yw
  useEffect(() => {
    fetch(
      " https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLN1GLm9f4YMbqIsIePKAp8ZhWmLp5hy8e&key=AIzaSyAyG69mluoY9Labsz2sUAJt8NnXI3PRXvg"
    )
      .then((res) => res.json())
      .then((data) => {
         console.log(data)
        const result = data.items.map((item) => {
          return {
            title: item.snippet.title,
            vid: item.contentDetails.videoId,
          };
        });
        setData(result);
        uid(result[0].vid)
        utitle(result[0].title)
      });
  }, []);
 
  return (
    <div className="videoo">
      <div className='video__container'>
        <ResponsiveEmbed
          src={"https://www.youtube.com/embed/"+vide }
          allowfullscreen
        />
        <h1 style={{color:'#000'}}>{title}</h1>
      </div>
      <div className='list'>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src='https://www.pngkey.com/png/detail/10-102323_boost-mobile-png-logo-cell-phone-icon-circle.png' />
                }
                title={<a href="#" onClick={()=>{
                    uid(item.vid)
                    utitle(item.title)
                    
                }}>{item.title}</a>}
              
              />
            </List.Item>
          )}
        />
        
      </div>
    </div>
  );
}

export default Homevideo;
