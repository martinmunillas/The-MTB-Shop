import React from 'react'
import AdminLayout from './AdminLayout'
import { Route } from 'react-router-dom'

const AdminRoute = (props) => {
    return (
        <AdminLayout>
            <Route exact={props.exact} path={props.path} component={props.component} />
        </AdminLayout>
    )
}

export default AdminRoute