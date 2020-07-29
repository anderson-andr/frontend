import React from 'react';
import {BrowserRouter,Route,Switch  }  from 'react-router-dom';

import Logon from './pages/Logon';
import Profile from './pages/Profile';
import Veiculos  from './pages/Veiculos';
import Consulta from './pages/Consulta';
import NewIncidents from './pages/NewIncidents';
import Editar from './pages/Editar';

export default function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path = "/" exact component = {Logon}/>
            <Route path= "/profile"  component= {Profile}/>
            <Route path= "/veiculos"  component= {Veiculos}/>
            <Route path= "/Consulta"  component= {Consulta}/>
            <Route path= "/Editar"  component= {Editar}/>
            <Route path= "/incidentes/new"  component= {NewIncidents}/>
        </Switch>
        
        
        </BrowserRouter>

    )


}