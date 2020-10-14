import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import Logo from '../images/bwe-logo.png'
import { RiMenu2Line, RiTruckLine } from 'react-icons/ri';
import Headroom from 'react-headroom'
import HamburgerMenu from 'react-hamburger-menu'



class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isExpanded: false,
      open: false,
    }
  }

  handleToggle() {
    this.setState({
      isExpanded: !this.state.isExpanded

    })
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }



  render() {

    /* const activeLink = window.location.pathname; //show pathname of page */

    const { isExpanded } = this.state;
    /*  const { open } = this.state; */



    console.log(this.state);



    return (
      <Container>
        <Headroom
          pinStart={0}
          disableInlineStyles={true}
          onUnpin={() => {
            this.setState({
              isExpanded: this.state.isExpanded = false,
              open: this.state.open = false,
            })
          }}
        >


          <StyledHeader>
            <div className="test">
              <Link to="/"><img id="logo" alt="Brand Wine Estates Logo" src={Logo} alt="brand wine estates logo" /></Link>
              <ul className="horizontal-menu">
                <li>
                  <Link to="/" activeClassName="active-link">{this.props.sortiment}</Link>
                </li>
                <li>
                  <Link to="/restaurang" activeClassName="active-link">{this.props.productlist}</Link>
                </li>
                <li>
                  <Link to="/contact" activeClassName="active-link">{this.props.contact}</Link>
                </li>
              </ul>
            </div>

            <div className="hamburger-menu" onClick={() => this.handleToggle()}>
              <HamburgerMenu
                isOpen={this.state.open}
                menuClicked={this.handleClick.bind(this)}
                width={25}
                height={23}
                strokeWidth={1}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
              />
            </div>

          </StyledHeader>
          <DropDownMenu className={isExpanded ? '' : 'hidden'}>
            <div className="flex-container">
              <div className="content-container">
                <li>
                  <Link to="/" activeClassName="active-link">{this.props.sortiment}</Link>
                </li>
                <li>
                  <Link to="/restaurang" activeClassName="active-link">{this.props.productlist}</Link>
                </li>
                <li>
                  <Link to="/contact" activeClassName="active-link">{this.props.contact}</Link>
                </li>
              </div>
            </div>
          </DropDownMenu>
        </Headroom>
      </Container>
    )

  }

}
export default Header;


const Container = styled.div`
.headroom {
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.headroom--unfixed {
  position: relative;
  transform: translateY(0);
}
.headroom--scrolled {
  transition: transform 600ms ease-in-out;
}
.headroom--unpinned {
  position: fixed;
  transform: translateY(-100%);
}
.headroom--pinned {
  position: fixed;
  transform: translateY(0%);
}

`

const StyledHeader = styled.div`
  ${tw`  text-secondary flex justify-between items-center h-24  `}
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #efefef; 
  background-color: white;

 
 .test{
    ${tw`flex justify-center items-center`}
    
  }

  .hidden-menu{
    display: none;
  }
 
  .active-link{
    border-bottom: 1px solid #cecece; 
  }

  .active-page{
    ${tw`flex justify-center items-center`}
    @media (min-width: 805px) {
        display: none;
	  }  
  }

  .hamburger-menu {
    ${tw`mr-10 cursor-pointer`}
   
    @media (min-width: 805px) {
        display: none;
        
	  }  
	}

  h5{
    
    ${tw`m-0 font-thin mr-10`}
   
    @media (max-width: 805px) {
        display: none;

      }  
  }
  
  img{
    ${tw`w-32 m-0 ml-10`}
    @media (max-width: 910px) {
      ${tw`w-24`}
	  }  
  }

  .horizontal-menu{
    ${tw`mb-0  text-sm flex`}
    list-style: none;
  
    @media (max-width: 910px) {
      ${tw`text-xs`}
  }  
  
  @media (max-width: 805px) {
      ${tw`hidden`}
  }  
  
    li{
      ${tw`m-0 mt-1 pl-5 hover:text-gray-500`}
    }
}
`

const DropDownMenu = styled.div`
position: absolute;
width: 100%;
list-style: none;
font-family: Assistant;
text-align: start;
background: #fff;
max-height: 300px;
overflow: hidden;
/* transition: ease-in-out 3s; */
transition: max-height 800ms cubic-bezier(0.76, 0.25, 0.43, 0.7); 
border: none;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;  
${tw`shadow-lg`}



.flex-container{
  ${tw` flex flex-col justify-center items-center m-0 `}
}


.content-container{
padding: 20px;
}



&.hidden{
    max-height: 0px;
    overflow: hidden;
    border-bottom-width: 0px;
    
   
  }


li {
  ${tw`mt-8`}
  color: #2c2c2c;
}

.active{
    border-bottom: 1px solid #cecece; 
    
   
    
    
  }

  .active-link{
    border-bottom: 1px solid #cecece; 
    
  }

  



 

`




