import React, { Component } from 'react';
import api from '../../services/api';
import {Link, useHistory}  from 'react-router-dom';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './style.css';
import {TieredMenu} from 'primereact/tieredmenu';
import {withRouter} from 'react-router-dom';
import {Button} from 'primereact/button';
import ReactDOM from 'react-dom';
import {Dropdown} from 'primereact/dropdown';



  export class DropdownDemo extends Component {

    constructor() {
        super();
        this.state = {
            city: null,
            car: null,
            car2: 'BMW'
        };

        
        this.cars = [
            {label: 'MLX-9183', value: 'MLX-9183'},
            {label: 'HUS-5149', value: 'HUS-5149'},
            {label: 'HPZ-7768', value: 'HPZ-7768'},
            {label: 'JNE-4246', value: 'JNE-4246'},
            {label: 'MOA-4084', value: 'MOA-4084'},
            {label: 'MPW-3874', value: 'MPW-3874'},
            {label: 'HTM-5144', value: 'HTM-5144'},
            {label: 'KCH-2458', value: 'KCH-2458'},
            {label: 'JTQ-2374', value: 'JTQ-2374'}
        ];

        this.onCarChange = this.onCarChange.bind(this);
        this.onCarChange2 = this.onCarChange2.bind(this);
    }


    onCarChange(e) {
        this.setState({car: e.value});
    }

    onCarChange2(e) {
        this.setState({car2: e.value});
    }

    carTemplate(option) {
        if(!option.value) {
            return option.label;
        }
    }

    render() {
        const menuitems = [
            {
                label:'Voltar',
                icon:'pi pi-fw pi-arrow-left',
                command:() => this.props.history.push('/Profile')
             },
                
         ];
        return (
            <div className="veiculos">
            <TieredMenu model={menuitems} popup={true} ref={el => this.menu = el} /> 
            <Button label="Opções" icon="pi pi-bars"  onClick={(event) => this.menu.toggle(event)}/>
            <div className="selecao">
                <Dropdown value={this.state.car} options={this.cars} onChange={this.onCarChange} style={{width: '16em',fontWeight: 'bold'}}
                            editable={true} placeholder="Digite ou selecione a placa" />
                <div  style={{marginTop: '.5em'}}>{this.state.car ? 'Placa selecionada: ' +  this.state.car : 'Nenhuma Placa Selecionada '}
                
                </div>
                </div>  
                <div className="pesquisa">
                    <Button style={{fontSize:'17px',fontWeight: 'bold'}} label="Pesquisa"  onClick={(event) => this.props.history.push('./Consulta')}/>
                </div>
            </div>
            
        );
    }
}
  export default withRouter( DropdownDemo  );
         