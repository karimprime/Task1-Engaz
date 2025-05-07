import { Component } from '@angular/core';
import { Card } from '../../../core/interface/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // All cards data with type annotation
  allCards: Card[] = [
    {
      category: 'Design',
      title: 'UX Review Presentations',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      avatar: '/images/Avatar.png',
      image: '/images/Image.png',
      author: 'Card Title',
      date: '20 Jan 2024'
    },
    {
      category: 'Development',
      title: 'Angular Best Practices',
      description: 'Learn the most effective patterns for building scalable Angular applications.',
      avatar: '/images/Avatar.png',
      image: '/images/Image1.png',
      author: 'Dev Expert',
      date: '15 Feb 2024'
    },
    {
      category: 'Marketing',
      title: 'SEO Strategies',
      description: 'Discover the latest techniques to improve your website search rankings.',
      avatar: '/images/Avatar2.png',
      image: '/images/Image2.png',
      author: 'Marketing Pro',
      date: '10 Mar 2024'
    },
    {
      category: 'Marketing',
      title: 'SEO Strategies',
      description: 'Discover the latest techniques to improve your website search rankings.',
      avatar: '/images/Avatar3.png',
      image: '/images/Image3.png',
      author: 'Marketing Pro',
      date: '10 Mar 2024'
    },
    {
      category: 'Marketing',
      title: 'SEO Strategies',
      description: 'Discover the latest techniques to improve your website search rankings.',
      avatar: '/images/Avatar4.png',
      image: '/images/Image4.png',
      author: 'Marketing Pro',
      date: '10 Mar 2024'
    },
    {
      category: 'Marketing',
      title: 'SEO Strategies',
      description: 'Discover the latest techniques to improve your website search rankings.',
      avatar: '/images/Avatar5.png',
      image: '/images/Image5.png',
      author: 'Marketing Pro',
      date: '10 Mar 2024'
    },
    {
      category: 'Marketing',
      title: 'SEO Strategies',
      description: 'Discover the latest techniques to improve your website search rankings.',
      avatar: '/images/Avatar5.png',
      image: '/images/Image5.png',
      author: 'Marketing Pro',
      date: '10 Mar 2024'
    },
    {
      category: 'Marketing',
      title: 'SEO Strategies',
      description: 'Discover the latest techniques to improve your website search rankings.',
      avatar: '/images/Avatar5.png',
      image: '/images/Image5.png',
      author: 'Marketing Pro',
      date: '10 Mar 2024'
    },
    {
      category: 'Development',
      title: 'Angular Best Practices',
      description: 'Learn the most effective patterns for building scalable Angular applications.',
      avatar: '/images/Avatar.png',
      image: '/images/Image1.png',
      author: 'Dev Expert',
      date: '15 Feb 2024'
    },
    {
      category: 'Development',
      title: 'Angular Best Practices',
      description: 'Learn the most effective patterns for building scalable Angular applications.',
      avatar: '/images/Avatar.png',
      image: '/images/Image1.png',
      author: 'Dev Expert',
      date: '15 Feb 2024'
    },
    {
      category: 'Design',
      title: 'UX Review Presentations',
      description: 'Discover the latest techniques to improve your website search rankings.',
      avatar: '/images/Avatar.png',
      image: '/images/Image.png',
      author: 'Card Title',
      date: '20 Jan 2024'
    },
    {
      category: 'Design',
      title: 'UX Review Presentations',
      description: 'Discover the latest techniques to improve your website search rankings.',
      avatar: '/images/Avatar.png',
      image: '/images/Image.png',
      author: 'Card Title',
      date: '20 Jan 2024'
    },
  ];

  visibleCards = this.allCards.slice(0, 6);  // Initially visible cards (first 6)


  showLoadMore = this.allCards.length > 6;  // Whether to show the "Load More" button

  // Load all cards when button is clicked
  loadAllCards() {
    this.visibleCards = [...this.allCards];
    this.showLoadMore = false;
  }
}
