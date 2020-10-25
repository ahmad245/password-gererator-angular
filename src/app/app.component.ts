import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  password: string = '';
  length: number = 0;
  changeUpLetter:boolean = false;
  changeLoLetter:boolean = false;
  changeNumber:boolean = false;
  changeSymbol:boolean = false;
  isEntered:boolean=false;
  onClick() {
    var uppercaseLetters = "QWERTZUIOPASDFGHJKLYXCVBNM";
    var lowercaseLetters = "qwertzuiopasdfghjklyxcvbnm";
    var numberChars = "0123456789";
    var extraChars = "<>\,.;:-_+*%&/()=?!{}[]";
    let validChars = '';

    let i = 0;
    while (i < this.length) {
      if (this.changeUpLetter) {
        validChars += this.getRandomChar(uppercaseLetters);
        i++;
      }
      if (this.changeLoLetter && i < this.length) {
        validChars += this.getRandomChar(lowercaseLetters);
        i++;
      }
      if (this.changeNumber && i < this.length) {
        validChars += this.getRandomChar(numberChars);
        i++;
      }
      if (this.changeSymbol && i < this.length) {
        validChars += this.getRandomChar(extraChars);
        i++;
      }

    }
    this.password =this.shuffle(validChars);

  }
  getRandom(i) {
    return Math.floor(Math.random() * i);
  }
  getRandomChar(chars) {
    return chars[this.getRandom(chars.length)]
  }
  shuffle(s: string) {
    let arr = s.split('');
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      let randomIndex = this.getRandom(n);
      let temp = arr[randomIndex];
      arr[randomIndex] = arr[i];
      arr[i] = temp;
    }
    return arr.join('');
  }

  onChangeUpLetters() {
    this.changeUpLetter = !this.changeUpLetter;
  }
  onChangeLoLetters() {
    this.changeLoLetter = !this.changeLoLetter;
  }
  onChangeNumber() {
    this.changeNumber = !this.changeNumber;
  }
  onChangeSymbol() {
    this.changeSymbol = !this.changeSymbol;
  }
  onInput(event) {
    this.length = + event;
    


  }
}
