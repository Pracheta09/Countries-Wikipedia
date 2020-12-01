import React from 'react';
import { Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import CountryList from './CountryList';
import CountryDetails from "./CountryDetails"
import axios from "axios";
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            all_data: [],
            loading: true
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        axios.get(process.env.REACT_APP_ROUTER_WEB_SERVICE)

            .then(response => {
                console.log("Received>>", response.data)
                this.setState({ all_data: response.data, loading: false })
            })
            .catch(err => {
                console.log("Error in loading ", err);
            });
    }


    /*Alternatively, we can fetch using async - 
    async componentDidMount() {
      this.setState({ loading: true })
      try {
        const response = await fetch(process.env.REACT_APP_ROUTER_WEB_SERVICE)
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const json = await response.json();
        console.log("Received>>",json)
        this.setState({all_data: json,loading:false})
      } catch (error) {
        console.log("Error",error);
      }
     } */

    render() {

        var names = []
        var routes = []
        this.state.all_data.map((value) => {
            var url = "/Info/" + value["name"]
            names.push(<li><Link class="text-link" to={url}>{value["name"]}</Link></li>)
            routes.push(<Route exact path={url} render={(props) => <CountryDetails {...props} all_data={value} />} ></Route>)

        })
        return (
            <BrowserRouter >
                <div class="header">
                    <h1>
                        Countries Wikipedia
                    <br />
                    </h1>
                </div>
                <Route exact path="/" render={(props) => <CountryList {...props} names={names} />} ></Route>
                {this.state.loading === true ? 
                <Route path="/Info" render={(props) => <CountryDetails {...props} all_data={{}} />} ></Route> : 
                routes}

            </BrowserRouter>

        )
    }
}
export default Header

