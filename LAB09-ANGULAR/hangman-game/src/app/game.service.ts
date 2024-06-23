// src/app/game.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  words: string[] = ['angular', 'typescript', 'javascript', 'hangman'];
  chosenWord: string = '';
  displayWord: string[] = [];
  incorrectGuesses: string[] = [];
  maxAttempts: number = 6;

  constructor() {
    this.startNewGame();
  }

  startNewGame() {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    this.chosenWord = this.words[randomIndex];
    this.displayWord = Array(this.chosenWord.length).fill('_');
    this.incorrectGuesses = [];
  }

  guessLetter(letter: string): boolean {
    if (this.chosenWord.includes(letter)) {
      for (let i = 0; i < this.chosenWord.length; i++) {
        if (this.chosenWord[i] === letter) {
          this.displayWord[i] = letter;
        }
      }
      return true;
    } else {
      this.incorrectGuesses.push(letter);
      return false;
    }
  }

  isGameWon(): boolean {
    return this.displayWord.join('') === this.chosenWord;
  }

  isGameLost(): boolean {
    return this.incorrectGuesses.length >= this.maxAttempts;
  }

  getDisplayWord(): string {
    return this.displayWord.join(' ');
  }

  getIncorrectGuesses(): string[] {
    return this.incorrectGuesses;
  }

  getMaxAttempts(): number {
    return this.maxAttempts;
  }
}
