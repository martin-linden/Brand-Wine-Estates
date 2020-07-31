import React, { Component } from 'react'
import { HamburgerSliderReverse } from 'react-animated-burgers';
import tw from 'twin.macro'
import styled from "styled-components"

class HamburgerMenu extends Component {
    state = {
        isActive: false
    }

    toggleButton = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render() {
        return (
            <HamStyle>
                <HamburgerSliderReverse
                    className="my-styles"
                    isActive={this.state.isActive}
                    toggleButton={this.toggleButton}
                    barColor="black"
                    ButtonWidth={30}
                    buttonStyle={{ backgroundColor: "inherit", outline: "none" }}
                />
            </HamStyle>
        )
    }

}

const HamStyle = styled.div`
border: none;
`;

export default HamburgerMenu