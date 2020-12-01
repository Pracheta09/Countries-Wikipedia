import React from "react"
class CountryDetails extends React.Component {

    render() {

        var languages = []
        var currencies = []
        if (Object.keys(this.props.all_data).length !== 0) {
            this.props.all_data.languages.map((value) => {

                languages.push(value["name"] + "  ")

            })
            this.props.all_data.currencies.map((value) => {

                currencies.push(value["name"] + "(" + value["symbol"] + ")  ")

            })
        }


        return (
            <div>
                {Object.keys(this.props.all_data).length === 0 ?
                    <div class="card"><p>Please wait while we fetch data.. </p><div class="loader" height={100} > </div></div>
                    :
                    <div class="row">


                        <div class="leftcolumn">
                            <div class="card">
                                <h2>{this.props.all_data["name"]}</h2>
                                Capital : {this.props.all_data["capital"]}
                                <br />
                                <br />
                                Region : {this.props.all_data["region"]}
                                <br />
                                <br />
                                Population : {this.props.all_data["population"]}
                                <br />
                                <br />
                                Languages : {languages}
                                <br />
                                <br />
                                Currency : {currencies}
                            </div>
                        </div>
                        <div class="rightcolumn">
                            <div class="card">

                                <img class="countryimg" src={this.props.all_data["flag"]} />
                            </div>
                        </div>

                    </div>}

            </div>
        )
    }
}
export default CountryDetails