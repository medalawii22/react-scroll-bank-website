import React from 'react'
import {
    ServicesContainer,
    ServicesCard,
    ServicesH1,ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper
} from './ServicesElements'
import Icon1 from '../../images/A-png-logo.png'


const Services = () => {
  return (
    <>
        <ServicesContainer id="services">
            <ServicesH1>Our services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce Expense</ServicesH2>
                    <ServicesP>We help reduce your fees and Increase your overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Virtual offices</ServicesH2>
                    <ServicesP>You can access our plateform online anywhere in the world</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Crypto Suppoter</ServicesH2>
                    <ServicesP>We accept crypto deposits and exchanges as well as paying with crypto</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    </>
  )
}

export default Services
