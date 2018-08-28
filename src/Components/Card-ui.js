import React, {Component} from 'react';

class Card extends Component {

  state = {
    showCart: false
  }

  displayCart = () => {
    this.setState(prev => ({showCart: !prev.showCart}));
  };

  render() {

    if(this.props.items.length < 1) {
      var cardContent = <div className="card-content center">Cart is empty!</div>
    } else {
      cardContent = this.props.items.map(item => {
        return (
          <div className="card-content">
            <div>
              Item: {item.name}
              <span className="delete-from-card" onClick={() => this.props.deleteItem(item)}>
                <i className="fa fa-trash-alt"></i>
              </span>
            </div>
            <div>Price: {item.price + item.currency}</div>
            <div className="quantity-container">
              Quantity: <span onClick={() => this.props.decreaseQ(item)}>-</span>
                {item.quantity}
              <span onClick={() => this.props.increaseQ(item)}>+</span>
            </div>
          </div>
        );
      });
    }

    var card = (
      <div className="card">
        {cardContent}
      </div>
    );

    var cartStyle = "show-hide-card";
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
