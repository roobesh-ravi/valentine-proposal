import { Component } from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-valentine',
  imports: [],
  templateUrl: './valentine.html',
  styleUrl: './valentine.css',
})
export class Valentine {

  hoverCount = 0;
  sadEmojis = [
    "Chlooo 😭",
    "Venam di 😢",
    "Sonna kelu di 😫",
    "Azhududuven 😭",
    "Click yes 🫶",
    "Thangam la 🥹",
    "ilaya? 🥺",
    "Kalnenjakari 🥲",
  ];
  sadGifs = [
    'assets/gifs/please.gif',
    'assets/gifs/sad.gif',
    'assets/gifs/sad1.gif',
    'assets/gifs/sad2.gif'
  ];
  happyGif = 'assets/gifs/happy.gif';
  currentGif = this.sadGifs[0];

  ngAfterViewInit() {

    const yesBtn = document.querySelector('.yes-btn') as HTMLElement;
    const noBtn = document.querySelector('.no-btn') as HTMLElement;
    const parent = document.querySelector('.btn-group') as HTMLElement;

    const yesRect = yesBtn.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    const offsetX = yesRect.right - parentRect.left + 60;

    const offsetY =
      yesRect.top -
      parentRect.top +
      (yesRect.height / 2) -
      (noBtn.offsetHeight / 2);

    noBtn.style.left = `${offsetX}px`;
    noBtn.style.top = `${offsetY}px`;

  }

  moveNoButton(event: MouseEvent) {

    this.hoverCount++;
    const buffer = 10;

    const button = document.querySelector('.no-btn') as HTMLElement;
    const parent = document.querySelector('.btn-group') as HTMLElement;

    const parentRect = parent.getBoundingClientRect();
    const btnRect = button.getBoundingClientRect();

    const maxX = parentRect.width - btnRect.width;
    const maxY = parentRect.height - btnRect.height;

    const mouseX = event.clientX - parentRect.left;
    const mouseY = event.clientY - parentRect.top;

    const minDistance = 140; // how far button must escape

    let randomX, randomY, distance;

    do {
      randomX = buffer + Math.random() * (maxX - buffer);
      randomY = buffer + Math.random() * (maxY - buffer);

      const dx = randomX - mouseX;
      const dy = randomY - mouseY;

      distance = Math.sqrt(dx * dx + dy * dy);

    } while (distance < minDistance);

    const emojiIndex = this.hoverCount % this.sadEmojis.length;
    button.innerText = this.sadEmojis[emojiIndex];

    const gifIndex = this.hoverCount % this.sadGifs.length;
    this.currentGif = this.sadGifs[gifIndex];

    const speed = Math.max(0.15, 0.35 - this.hoverCount * 0.04);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    button.style.transition = `left ${speed}s cubic-bezier(.4, 0, .2, 1), top ${speed}s cubic-bezier(.4, 0, .2, 1)`;

  }

  celebrate() {

    const button = document.querySelector('.no-btn') as HTMLElement;

    button.innerText = 'Heehee 😁';
    this.currentGif = this.happyGif;

    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ['#ff4b5c', '#ff9aa2', '#fff', '#ffd700'];

    (function frame() {

      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors
      });

      confetti({
        particleCount: 5,
        angle: 130,
        spread: 75,
        origin: { x: 1 },
        colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }

    })();

  }

}
