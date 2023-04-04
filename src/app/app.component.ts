import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Luis';
  age = 30;
  image = 'https://i.blogs.es/944446/naruto-el-anime-original-regresa-con-cuatro-nuevos-episodios-por-el-20-aniversario-de-la-serie11/1024_2000.jpeg';
  btnDisabled = true;
  person = {
    name: 'Luis Eduardo Silva',
    age: 30,
    image: 'https://i.blogs.es/944446/naruto-el-anime-original-regresa-con-cuatro-nuevos-episodios-por-el-20-aniversario-de-la-serie11/1024_2000.jpeg'
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }
}
