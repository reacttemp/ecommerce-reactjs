import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import ContactInfo from './ContactInfo'
import LoginForm from './LoginForm'
import MapAddress from './MapAddress'

const Contact = () => {
    return (
        <>
            <Breadcrumb page={"Contact"} />
            <ContactInfo />
            <LoginForm />
            <MapAddress />
        </>
    )
}

export default Contact
