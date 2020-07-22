import React from 'react'

import Header from '../components/Header'
import SaleAd from '../components/SaleAd'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            saleItems: ["Shirt", "Helmet", "Gloves"]
        }
    }

    render() {
        return (
            <>
                <Header />
                <SaleAd saleItems={this.state.saleItems} />
            </>
        )
    }
}

export default Home