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
import {MultiSelect} from 'primereact/multiselect';
export class MultiSelectDemo extends Component {

  constructor() {
      super();
      this.state = {
          cars1: [],
          cars2: []
      };
      this.carTemplate = this.carTemplate.bind(this);
      this.selectedCarTemplate = this.selectedCarTemplate.bind(this);
  }

  carTemplate(option) {
      const logoPath = 'showcase/demo/images/car/' + option.label + '.png';

      return (
          <div className="p-clearfix">
              <img alt={option.label} src={logoPath} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style={{width:'24px', verticalAlign:'middle'}} />
              <span style={{fontSize:'1em',float:'right',marginTop:'4px'}}>{option.label}</span>
          </div>
      );
  }

  selectedCarTemplate(value) {
      if (value) {
          const logoPath = 'showcase/demo/images/car/' + value + '.png';

          return (
              <div className="my-multiselected-item-token">
                  <img alt={value} src={logoPath} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style={{width:'20px', verticalAlign:'middle', marginRight:'.5em'}} />
                  <span>{value}</span>
              </div>
          );
      }
      else {
          return <span className="my-multiselected-empty-token">Choose</span>
      }
  }

  render() {
    const menuitems = [
      {
          label:'Voltar',
          icon:'pi pi-fw pi-arrow-left',
          command:() => this.props.history.push('/Consulta')
       },
       {
          label:'Veículos',
          icon:'pi pi-fw pi-search',
          command:() => this.props.history.push('/veiculos')
       },
             
   ];
   const cars = [
    {label: 'ar condicionado', value: 'ar condicionado'},
    {label: '4x4', value: '4x4'},
    {label: 'airbag', value: 'airbag'},
    {label: 'direção elétrica', value: 'direção elétrica'},
    {label: 'freio ABS)', value: 'freio ABS)'},

];


    return (
      <div className="Menu">
       <TieredMenu model={menuitems} popup={true} ref={el => this.menu = el} />
       <Button label="Opções" icon="pi pi-bars"  onClick={(event) => this.menu.toggle(event)}/>
       
       <div className="content">
        <div className="novo"><h1> Editar Veículos</h1></div>
        <form   className ="dados">
            <input   
              placeholder ="placa"
             />
            <input
               placeholder ="marca "
            />
             <input
               placeholder ="modelo "
            />
             <input
               
               placeholder ="ano modelo"
            />
                  
            <input
               
               placeholder ="quilometragem"
            />
            <div className="multiselect-demo">
                <h3>Opcionais </h3>
                <MultiSelect value={this.state.cars1} options={cars} onChange={(e) => this.setState({cars1: e.value})}
                        style={{minWidth:'25em'}} filter={true} filterPlaceholder="Buscar" placeholder="Selecione Opcional " />
        </div>
            <button className="Salvar"  type ="submit">Salvar </button>
            <button className="excluir "  type ="submit">Excluir </button>
        </form>
            </div>
            
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


export default withRouter(MultiSelectDemo);
    
  