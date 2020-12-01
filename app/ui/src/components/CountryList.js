import React from "react"
class CountryList extends React.Component {
    render() {

        return (
            <div>

                {this.props.names.length === 0 ?
                    <div class="card"><p>Please wait while we fetch data.. </p><div class="loader" height={100} > </div></div>
                    :

                    <div class="card">
                        <p>Please click on country name to view more details</p>
                        <div class="block">
                            <ul>{this.props.names}</ul>

                        </div>
                    </div>
                }
            </div>

        )
    }
}
export default CountryList