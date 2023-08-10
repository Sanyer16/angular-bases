import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent{
  public name: string = 'ironman';     //Propiedades
  public age: number  = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();    //Geter, es como Metodo, pero luce como propiedad
  }

  getHeroDescription():string{
    return `${this.name } - ${ this.age }`;    //Metodo
  }

  changeHero():void{                       // Metodo para cambiar el nombre
    this.name= 'Spiderman';

  }

  changeAge(){                             // Metodo para cambiar la edad
    this.age= 32;

  }

  resetForm():void {
    this.name = 'ironman';
    this.age  = 45;

  }

}
