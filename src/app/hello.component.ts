import { Component, Input } from '@angular/core';

@Component({
  selector: 'title',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
name = 'Web';
counter = 0;
onPlus(): void{
  this.counter +=5;
}
onsubtract(): void{
  this.counter -=5;
}
}
