import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStrip = price * 100
    const publishaleKey = 'pk_test_VYf1B2qgO5nURK87UVhOnI3e00lFlMHHps'
    const onToken = token => {
        alert('Payment Successful')
    }
    return(
        <StripeCheckout 
            label = 'Pay Now'
            name = 'Saste Kapde Ltd.'
            billingAddress
            shippingAddress
            image = 'https://sendeyo.com/up/d/f3eb2117da'
            description = {`Your total is ${price}`}
            amount = {priceForStrip}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishaleKey}
            currency = 'INR'
        />
    )
}

export default StripeCheckoutButton
