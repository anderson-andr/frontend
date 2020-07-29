import React, { Component } from 'react';
import api from '../../services/api';
import Capa1 from '../../assets/Capa1.png';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './style.css';
import {TieredMenu} from 'primereact/tieredmenu';
import {withRouter} from 'react-router-dom';
import {Button} from 'primereact/button';

class App extends Component {
    render() {
      const menuitems = [
        {
            label:'Voltar',
            icon:'pi pi-fw pi-arrow-left',
            command:() => this.props.history.push('/')
         },
         {
            label:'Veículos',
            icon:'pi pi-fw pi-search',
            command:() => this.props.history.push('/veiculos')
         },
               
     ];

      return (
        <div className="Menu">
         <TieredMenu model={menuitems} popup={true} ref={el => this.menu = el} />
         <Button label="Opções" icon="pi pi-bars"  onClick={(event) => this.menu.toggle(event)}/>
         <img src={ Capa1 } alt = "Altimus  " />
          <div id="main">
              <main>
                  <div className="content" id="content">
                      {this.props.children}
                  </div>
              </main>
          </div>
        </div>
      );
     
    }
  }
  
  export default withRouter(App);