import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail,FaHiking,FaBeer,FaShuttleVan} from "react-icons/fa";
export default class Services extends Component {
    state={
        services :[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:' Indulge in the ultimate luxury at our hotel, where you can enjoy the added perk of complimentary cocktails, crafted by our talented mixologists.!'

            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:' Nestled amidst breathtaking natural beauty, our hotel offers a gateway to endless hiking adventures, where you can explore scenic trails and immerse yourself in the serenity of nature to your hearts content.!'

            },
            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle",
                info:' Experience the convenience and ease of exploring the city with our hotels complimentary shuttle service, ensuring you have seamless transportation at your fingertips throughout your stay.!'

            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:' Unwind and savor the robust flavors of our hotels selection of strong beers, carefully curated to cater to beer enthusiasts seeking a bold and memorable drinking experience.!'
            }

        ]
    }
  render() {
    return (
      <section className="services">
      <Title title="services"/>
      <div className='services-center'>
        {this.state.services.map((item,index)=>{
          return<article key={index} className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>  
        })}
      </div>
      

      </section>
     
    );
  }
}
