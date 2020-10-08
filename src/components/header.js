import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import Logo from '../images/bwe-logo.png'
import { RiMenu2Line, RiTruckLine } from 'react-icons/ri';
import Headroom from 'react-headroom'



class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isExpanded: false,
      unPinExpanded: true,

    }
  }

  handleToggle() {
    this.setState({
      isExpanded: !this.state.isExpanded

    })
  }

  UnpinToggle() {
    this.setState({
      unPinExpanded: this.state.isExpanded === false
    })
  }


  render() {

    /* const activeLink = window.location.pathname; //show pathname of page */

    const { isExpanded } = this.state;
    const { unPinExpanded } = this.state;


    console.log(this.state);



    return (
      <Container>
        <Headroom
          pinStart={0}
          disableInlineStyles={true}
          onUnpin={() => {
            this.UnpinToggle()
          }}
        >


          <StyledHeader>
            <div className="test">
              <Link to="/"><img id="logo" alt="Brand Wine Estates Logo" src={Logo} /></Link>
              <ul className="horizontal-menu">
                <li>
                  <Link to="/" activeClassName="active-link{">{this.props.sortiment}</Link>
                </li>
                <li>
                  <Link to="/restaurang" activeClassName="active-link{">{this.props.productlist}</Link>
                </li>
                <li>
                  <Link to="/contact" activeClassName="active-link{">{this.props.contact}</Link>
                </li>
              </ul>
            </div>


            <RiMenu2Line
              className="hamburger-menu"
              size="30"
              onClick={() => this.handleToggle()} />
          </StyledHeader>

          <DropDownMenu className={isExpanded ? '' : 'hidden'}>
            <div className="flex-container">
              <div>
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
background: #f9f9f9;
max-height: 300px;
overflow: hidden;
transition: ease-in-out 0.8s;
transition: max-height 0.5s cubic-bezier(.73,.42,.99,1); 
border-bottom-style: solid;
border-bottom-width: 1px;
border-bottom-color: #efefef; 
${tw`shadow`}


.flex-container{
  ${tw` flex flex-col justify-center items-center m-0 `}
}






&.hidden{
    max-height: 0px;
    overflow: hidden;
    border-bottom-width: 0px;
    
   
  }


li {
  ${tw`mt-5`}
  color: #2c2c2c;
}

.active{
    border-bottom: 1px solid #cecece; 
   
    
    
  }

  .active-link{

 
    
    
  }


 

`




