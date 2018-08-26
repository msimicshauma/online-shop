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
        id: 1
      },
      {
        name: 'Carbon helmet',
        price: 9.99,
        currency: '$',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKDYcV9bUuhKnI9U_dsaKWzAjcyMXWAc9Zk_qCfjvuBnA5b1Z",
        alt: 'carbon-helmet',
        id: 2
      },
      {
        name: 'Steering wheel',
        price: 9.99,
        currency: '$',
        img: "http://www.grandprixracewear.fr/4015-thickbox_default/sparco-p300-steering-wheel.jpg",
        alt: 'steering-wheel',
        id: 3
      },
      {
        name: 'Dashcam',
        price: 9.99,
        currency: '$',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHDpfgiGnANrj30A1TYqcOdn7VjlsRGPJGODeBvihSWhU0qlW",
        alt: 'dashcam',
        id: 4
      },
      {
        name: 'Bluetooth OBD',
        price: 9.99,
        currency: '$',
        img: "https://images-na.ssl-images-amazon.com/images/I/51yJnp7deML.jpg",
        alt: 'bluetooth-obd',
        id: 5
      },
      {
        name: 'GPS',
        price: 9.99,
        currency: '$',
        img: "https://images-na.ssl-images-amazon.com/images/I/61klgUvBOYL._SL1000_.jpg",
        alt: 'gps',
        id: 6
      },
      {
        name: 'Racing gloves',
        price: 9.99,
        currency: '$',
        img: "https://content.speedwaymotors.com/ProductImages/6741301_L_f2982fcb-2127-4567-8bf1-a7fb2e93310a.JPG",
        alt: 'racing-gloves',
        id: 7
      },
      {
        name: 'Racing shoes',
        price: 9.99,
        currency: '$',
        img: "https://content.speedwaymotors.com/ProductImages/6740127_L_3130bfbd-67d3-4bbe-a95c-83f1901e4771.jpg",
        alt: 'racing-shoes',
        id: 8
      },
      {
        name: 'Aluminum pedals',
        price: 9.99,
        currency: '$',
        img: "https://www.topracingshop.pl/por_pl_Nakladki-pedalow-Sparco-PIUMA-czarne-dlugi-pedal-gazu-4564_2.jpg",
        alt: 'aluminum-pedals',
        id: 9
      }
    ],
    shoppingCard: []
  }

  addItem = (item) => {
    const shoppingCard = [...this.state.shoppingCard, item];

    this.setState({
      shoppingCard
    })
  }

  deleteItem = (id) => {
    const shoppingCard = this.state.shoppingCard.filter(item => {
      return item.id !== id
    });

    this.setState({
      shoppingCard
    })
  }

  render() {
    return (
      <section className="shop-content">
        <Product products={this.state.content} addItem={this.addItem} />
        <Items items={this.state.shoppingCard} deleteItem={this.deleteItem} />
      </section>
    );
  }
}

export default Content;