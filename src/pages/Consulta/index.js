import React, { useState, useEffect, Component } from 'react';
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
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../../services/NodeService';

export class TreeTableDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            expandedKeys: {}
        };
        this.nodeservice = new NodeService();
        this.toggleApplications = this.toggleApplications.bind(this);
    }

    toggleApplications() {
        let expandedKeys = {...this.state.expandedKeys};
        if (expandedKeys['0'])
            delete expandedKeys['0'];
        else
            expandedKeys['0'] = true;

        this.setState({expandedKeys: expandedKeys});
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        const menuitems = [
            {
                label:'Nova Buscar ',
                icon:'pi pi-fw pi-search',
                command:() => this.props.history.push('/Veiculos')
             },
             {
                label:'Criar Novo ',
                icon:'pi pi-fw pi-user-edit',
                command:() => this.props.history.push('/incidentes/New')
             },
             {
                label:'Editar Veiculo ',
                icon:'pi pi-fw pi-user-edit',
                command:() => this.props.history.push('/Editar')
             },
             
                
                
         ];
        return (
            <div className="resultado">
                <div className="opcoes">
                    <TieredMenu model={menuitems} popup={true} ref={el => this.menu = el} /> 
                    <Button label="Opções" icon="pi pi-bars"  onClick={(event) => this.menu.toggle(event)}/>
                </div>
                <TreeTable value={this.state.nodes}>
                    <Column field="placa" header="placa" expander></Column>
                    <Column field="marca" header="marca"></Column>
                    <Column field="modelo" header="modelo"></Column>
                    <Column field="ano do modelo" header="ano do modelo" expander></Column>
                    <Column field="quilometragem" header="quilometragem"></Column>
                </TreeTable>
               
            </div>
        )
    }
}
                
const rootElement = document.getElementById("root");
ReactDOM.render(< TreeTableDemo />, rootElement);

export default withRouter( TreeTableDemo   );