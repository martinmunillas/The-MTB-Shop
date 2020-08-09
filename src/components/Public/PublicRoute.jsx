import React from 'react'
import Layout from './Layout'
import { Route } from 'react-router-dom'

const PublicRoute = (props) => {
    return (
        <Layout>
            <Route exact={props.exact} path={props.path} component={props.component} />
        </Layout>
    )
}

export default PublicRoute