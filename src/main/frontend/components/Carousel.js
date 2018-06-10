import React from 'react';

import scss from '../css/Carousel.scss';

function CarouselCard({header, body, footer}) {
  return (
    <div className="card">
      <div className="header">{header}</div>
      <div className="body">{body}</div>
      <div className="footer">{footer}</div>
    </div>
  )
}

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.cardIndex = 0;
    this.transitioning = false;

    this.state = {
      info: 'click it'
    }
  }

  componentDidMount() {
    this.scrollArea = document.getElementById('cards-row');
    this.cards = document.getElementsByClassName('card');
    this.numCards = this.cards ? this.cards.length : 0;
  }

  updateInfo = (target) => {
    const infoButton = document.getElementById('info');
    if (infoButton) {
      infoButton.innerHTML = this.scrollArea.scrollLeft;
    }
    
    const activeCard = this.cards[this.cardIndex];
    const bbLeft = activeCard.offsetLeft;
    console.log('i:', this.cardIndex, bbLeft);
  }

  updateInfoEvent = (e) => {
    //this.updateInfo(e.target);
  }

  doTransition = (index, direction) => {
    const activeCard = this.cards[this.cardIndex];
    if (direction < 0) {
      if (this.scrollArea.scrollLeft > activeCard.offsetLeft) {
        const offset = activeCard.offsetLeft - this.scrollArea.scrollLeft;
        if (offset < -15) {
          this.scrollArea.scrollLeft = this.scrollArea.scrollLeft - 15;
          setTimeout(() => this.doTransition(index, direction), 50);
        } else {
          this.scrollArea.scrollLeft = this.scrollArea.scrollLeft - offset;
          this.endTransition();
        }
      }
    } else {
      if (this.scrollArea.scrollLeft < activeCard.offsetLeft) {
        const offset = activeCard.offsetLeft - this.scrollArea.scrollLeft;
        if (offset > 15) {
          this.scrollArea.scrollLeft = this.scrollArea.scrollLeft + 15;
          setTimeout(() => this.doTransition(index, direction), 50);
        } else {
          this.scrollArea.scrollLeft = this.scrollArea.scrollLeft + offset;
          this.endTransition()
        }
      }
    }
  }
  
  startTransition = (index, direction) => {
    this.transitioning = true;
    this.doTransition(index, direction);
  }
  
  endTransition = () => {
    this.transitioning = false;
  }
  
  doScrollLeft = () => {
    if (this.transitioning) {
      return;
    }
    
    if (this.cardIndex > 0) {
      this.cardIndex--;
    }
    this.startTransition(this.cardIndex, -1);
    this.updateInfo(this.scrollArea)
  }
  
  doScrollRight = () => {
    if (this.transitioning) {
      return;
    }
    
    if (this.cardIndex < this.numCards - 1) {
      this.cardIndex++;
    }
    this.startTransition(this.cardIndex, 1);
    this.updateInfo(this.scrollArea)
  }

  render() {
    const cards = [
      {
        header: 'Awesome card 1',
        body: 'some stuff in the awesome card',
        footer: 'feet go here'
      },
      {
        header: 'Awesome card 2',
        body: 'some stuff in the awesome card.  Let\'s make the body really long',
        footer: 'feet go here 2'
      },
      {
        header: 'Awesome card 3',
        body: 'some stuff in the awesome card',
        footer: 'feet go here 3'
      },
      {
        header: 'Awesome card 4',
        body: 'some stuff in the awesome card',
        footer: 'feet go here 4'
      }
    ];

    return (
      <div>
        <div id="cards-row" className="cards-row" onScroll={this.updateInfoEvent}>
          { cards.map((card, index) =>
            <CarouselCard key={index} header={card.header} body={card.body} footer={card.footer}/>
          )}
        </div>
        <div className="actions">
          <button onClick={this.doScrollLeft}>&lt;</button>
          <button id="info">click it</button>
          <button onClick={this.doScrollRight}>&gt;</button>
        </div>
      </div>
    );
  }
}

export default Carousel