import React, {Component} from 'react';
import Product from './Content-ui';
import Items from './Card-ui';

class Content extends Component {

  state = {
    content: [
      {
        name: 'Front wing',
        price: 9.99,
        currency: '$',
        img: "https://rimmerbros.com/ItemImages/Large/BNP1357.JPG",
        alt: 'front-wing',
        id: 1,
        clicks: 0
      },
      {
        name: 'Carbon helmet',
        price: 9.99,
        currency: '$',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKDYcV9bUuhKnI9U_dsaKWzAjcyMXWAc9Zk_qCfjvuBnA5b1Z",
        alt: 'carbon-helmet',
        id: 2,
        clicks: 0
      },
      {
        name: 'Steering wheel',
        price: 9.99,
        currency: '$',
        img: "http://www.grandprixracewear.fr/4015-thickbox_default/sparco-p300-steering-wheel.jpg",
        alt: 'steering-wheel',
        id: 3,
        clicks: 0
      },
      {
        name: 'Dashcam',
        price: 9.99,
        currency: '$',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHDpfgiGnANrj30A1TYqcOdn7VjlsRGPJGODeBvihSWhU0qlW",
        alt: 'dashcam',
        id: 4,
        clicks: 0
      },
      {
        name: 'Bluetooth OBD',
        price: 9.99,
        currency: '$',
        img: "https://images-na.ssl-images-amazon.com/images/I/51yJnp7deML.jpg",
        alt: 'bluetooth-obd',
        id: 5,
        clicks: 0
      },
      {
        name: 'GPS',
        price: 9.99,
        currency: '$',
        img: "https://images-na.ssl-images-amazon.com/images/I/61klgUvBOYL._SL1000_.jpg",
        alt: 'gps',
        id: 6,
        clicks: 0
      },
      {
        name: 'Racing gloves',
        price: 9.99,
        currency: '$',
        img: "https://content.speedwaymotors.com/ProductImages/6741301_L_f2982fcb-2127-4567-8bf1-a7fb2e93310a.JPG",
        alt: 'racing-gloves',
        id: 7,
        clicks: 0
      },
      {
        name: 'Racing shoes',
        price: 9.99,
        currency: '$',
        img: "https://content.speedwaymotors.com/ProductImages/6740127_L_3130bfbd-67d3-4bbe-a95c-83f1901e4771.jpg",
        alt: 'racing-shoes',
        id: 8,
        clicks: 0
      },
      {
        name: 'Aluminum pedals',
        price: 9.99,
        currency: '$',
        img: "https://www.topracingshop.pl/por_pl_Nakladki-pedalow-Sparco-PIUMA-czarne-dlugi-pedal-gazu-4564_2.jpg",
        alt: 'aluminum-pedals',
        id: 9,
        clicks: 0
      }
    ],
    shoppingCard: []
  }

  addItem = (item) => {
    let newItem = item;
    let newContent = this.state.content;

    newItem.quantity = 1;
    newItem.total = item.price * item.quantity;

    if(item.clicks < 1) {

      const shoppingCard = [...this.state.shoppingCard, newItem];

      for(let i = 0; i < newContent.length; i++)
        if(newContent[i].id === item.id)
          newContent[i].clicks = 1;

      this.setState({
        content: newContent,
        shoppingCard
      })
    }
  }

  deleteItem = (item) => {

    let newContent = this.state.content;

    for(let i = 0; i < newContent.length; i++)
      if(newContent[i].id === item.id)
        newContent[i].clicks = 0;

    const shoppingCard = this.state.shoppingCard.filter(mapItem => {
      return mapItem.id !== item.id
    });

    this.setState({
      content: newContent,
      shoppingCard
    })
  }

  increaseQ = (item) => {
    const newQuantity = item.quantity + 1;
    let newCard = this.state.shoppingCard;

    for(let i = 0; i < newCard.length; i++)
      if(newCard[i].id === item.id) {
        newCard[i].quantity = newQuantity;
        newCard[i].total = newCard[i].price * newCard[i].quantity;
      }

    this.setState({
      shoppingCard: newCard
    })
  }

  decreaseQ = (item) => {
    if(item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      let newCard = this.state.shoppingCard;

      for(let i = 0; i < newCard.length; i++)
        if(newCard[i].id === item.id) {
          newCard[i].quantity = newQuantity;
          newCard[i].total -= newCard[i].price;
        }

      this.setState({
        shoppingCard: newCard
      })
    }
  }

  render() {
    return (
      <section className="shop-content">
        <Product products={this.state.content} addItem={this.addItem} />
        <Items items={this.state.shoppingCard} deleteItem={this.deleteItem} increaseQ={this.increaseQ} decreaseQ={this.decreaseQ}/>
      </section>
    );
  }
}

export default Content;
