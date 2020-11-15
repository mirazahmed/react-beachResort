import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaCoffee } from "react-icons/fa";
import Title from './Title'

export default class Services extends Component {

    state={
     services: [
         {
            icon: <FaCocktail/>,
            title: "free cocktails",
            info: 
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
         },
         {
            icon: <FaHiking/>,
            title:"Endless Hiking",
            info: 
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
         },
         {
            icon: <FaShuttleVan/>,
            title:"free shuttle",
            info: 
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
         },
         {
            icon:<FaCoffee/>,
            title:"Expresso",
            info: 
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
         }
     ] 
    }
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                 {this.state.services.map((item,index) => {
                    return (
                    <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                    )
                 })}   
                </div>
            </section>                                
            
        );
    }
}
