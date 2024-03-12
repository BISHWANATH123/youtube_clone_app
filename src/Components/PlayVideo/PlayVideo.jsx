import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import Video1 from '../../assets/video.mp4'
 import like from '../../assets/like.png' 
 import dislike from '../../assets/dislike.png'
 import share from '../../assets/share.png'
 import save from '../../assets/save.png'
 import jack from '../../assets/jack.png'
 import user_profile from '../../assets/user_profile.png'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'
 


const PlayVideo = ({videoId}) => {

const [apiData,setApiData] = useState(null);
const fetchVideoData = async () =>{

  // const videoDetails_url = ` https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=programming`;
  // fetching video data
  const videoDetails_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
  await fetch(videoDetails_url).then(res=>res.json()).then(data =>setApiData(data.items[0]));
  

}

useEffect(()=>{
  fetchVideoData();

},[])



  return (
    <div className='play-video'>
      {/* <video src={Video1} controls autoPlay muted></video> */}
      {/* <iframe  src={`https://www.youtube.com/embed/} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}


      <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


       





      <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>                     
      <div className="play-video-info">
        <p>{apiData?value_converter( apiData.statistics.viewCount) :"16k"} &bull;{apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
        <div>
          <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):155}</span>
          <span><img src={dislike} alt="" /></span>
          <span><img src={save} alt="" />save</span>
          <span><img src={share} alt="" />share</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Greatstack</p>
          <span>1M Subscriber</span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="video-des">
       <p>{apiData?apiData.snippet.description.slice(0,250):"description here"}</p>
        <hr />
        <h4>130 comments</h4>
        <div className="comment">
          <img src={user_profile}alt="" />
        
        <div>

        
        <h3>jack nicolsn <span>1 day ago</span></h3> 
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae enim officia vero? Provident rem quae fuga, eius consectetur nam ullam eligendi, qui, impedit ex veniam reiciendis distinctio laudantium facere ad.</p>
        <div className="comment-action">
          <img src={like} alt="" />
          <span>244</span>
          <img src={dislike} alt="" />
        </div>
</div>
</div>


<div className="comment">
          <img src={user_profile}alt="" />
        
        <div>

        
        <h3>jack nicolsn <span>1 day ago</span></h3> 
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae enim officia vero? Provident rem quae fuga, eius consectetur nam ullam eligendi, qui, impedit ex veniam reiciendis distinctio laudantium facere ad.</p>
        <div className="comment-action">
          <img src={like} alt="" />
          <span>244</span>
          <img src={dislike} alt="" />
        </div>
</div>
</div>

<div className="comment">
          <img src={user_profile}alt="" />
        
        <div>

        
        <h3>jack nicolsn <span>1 day ago</span></h3> 
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae enim officia vero? Provident rem quae fuga, eius consectetur nam ullam eligendi, qui, impedit ex veniam reiciendis distinctio laudantium facere ad.</p>
        <div className="comment-action">
          <img src={like} alt="" />
          <span>244</span>
          <img src={dislike} alt="" />
        </div>
</div>
</div>


<div className="comment">
          <img src={user_profile}alt="" />
        
        <div>

        
        <h3>jack nicolsn <span>1 day ago</span></h3> 
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae enim officia vero? Provident rem quae fuga, eius consectetur nam ullam eligendi, qui, impedit ex veniam reiciendis distinctio laudantium facere ad.</p>
        <div className="comment-action">
          <img src={like} alt="" />
          <span>244</span>
          <img src={dislike} alt="" />
        </div>
</div>
</div>


<div className="comment">
          <img src={user_profile}alt="" />
        
        <div>

        
        <h3>jack nicolsn <span>1 day ago</span></h3> 
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae enim officia vero? Provident rem quae fuga, eius consectetur nam ullam eligendi, qui, impedit ex veniam reiciendis distinctio laudantium facere ad.</p>
        <div className="comment-action">
          <img src={like} alt="" />
          <span>244</span>
          <img src={dislike} alt="" />
        </div>
</div>
</div>
      </div>
    </div>
  )
}

export default PlayVideo;
