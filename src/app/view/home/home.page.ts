import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/model/entities/Contato';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public nome! :string;
  public telefone! : number;
  public email! : string;
  public genero!: number;

  public listaDeContatos: Contato[] = [];



constructor(private alertController: AlertController){
  let c1: Contato = new Contato("Cristian Gluchak",10144212927);
  c1.email ="email@mail.com";
  let c2: Contato = new Contato("Jotair", 10144212900);
  let c3: Contato = new Contato("Matheus Souto", 10144212900);
  let c4: Contato = new Contato("Antonio Zampier", 10144212900);
  this.listaDeContatos.push(c1);
  this.listaDeContatos.push(c2);
  this.listaDeContatos.push(c3);
  this.listaDeContatos.push(c4);

}


  cadastrar(){
    let verificaNome: string = " " +this.nome;
    let verificaTelefone: string = " "+this.telefone;
    let verificaEmail : string = " "+this.email;
    
    if ( verificaNome != null && this.telefone!= null){
      if (verificaNome.length > 3 )
          if (verificaTelefone.length > 8){
            let novo : Contato = new Contato(this.nome,this.telefone)
            if(this.email){
              novo.email = this.email;
            }
            novo.genero= this.genero;
            this.listaDeContatos.push(novo)
          }else{
            this.presentAlert("Erros ao cadastrar!","campo nome nao pode conter menos que 8 caracteres")
          }
        else{
          this.presentAlert("Erros ao cadastrar!","campo nome nao pode conter menos que 3 caracteres");
        }
    }else {
      this.presentAlert("Erros ao cadastrar!","todos os campos são obrigatorios!");
    }
  
}
async presentAlert(subHeader: string , message :string ) {
  const alert = await this.alertController.create({
    header: 'Agenda de Contatos',
    subHeader: subHeader,
    message: message,
    buttons: ['OK'],
  });

  await alert.present();
}
}
