import React, {Component} from 'react';

class Card extends Component {

  state = {
    showCart: false
  }

  displayCart = () => {
    this.setState(prev => ({showCart: !prev.showCart}));
  };

  render() {

    const cardContent = this.props.items.map(item => {
      return (
        <div className="card-content">
          <div>
            Item: {item.name}
            <span className="delete-from-card" onClick={() => this.props.deleteItem(item.id)}><i class="fa fa-trash-alt"></i></span>
          </div>
          <div>Price: {item.price + item.currency}</div>
        </div>
      );
    });

    const card = (
      <div className="card">
        {cardContent}
      </div>
    );

    let cartStyle = "show-hide-card";
    if(!this.state.showCart) cartStyle += " hidden";

    return (
      <div className="main-card-container">
        <div className={cartStyle} onClick={this.displayCart}>Your cart</div>
        {this.state.showCart ? card : null}
      </div>
    );
  }
}

export default Card;
