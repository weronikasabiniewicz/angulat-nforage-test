import { Component, Input } from '@angular/core';
import {NgForage} from 'ngforage'

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

  constructor(private readonly ngf: NgForage)
  {

  }

  ngOnInit(){
this.ngf.storeName = 'MyStorage';
this.ngf.setItem('key','value');

}
}
