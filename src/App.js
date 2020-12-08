import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import World from './pages/World'
import Indo from './pages/Indo'
import Prov from './pages/Prov'


const App = () =>{
    return (
        <center>
        <Router>
            
            <div>
              <marquee><h1> <font color='red'>COVID-19</font> TRACKER </h1></marquee>
                <nav>
                    <tr>
                            <Link to="/World">
                                World
                            </Link>
                        </tr>
                    <tr>
                            <Link to="/Indo">
                                Indonesia
                            </Link>
                        </tr>
                        <tr>
                            <Link to="/Prov">
                                Province of Indonesia
                            </Link>
                        </tr>
                </nav>
            </div>
            <Switch>
                <Route path="/World">
                    <World />
                </Route>
                <Route path="/Indo">
                    <Indo />
                </Route>
                <Route path="/Prov">
                    <Prov />
                </Route>
            </Switch>
        </Router>
        </center>
    )
  
}

export default App;
