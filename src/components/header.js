import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import Logo from '../images/bwe-logo.png'
import { RiMenu2Line, RiTruckLine } from 'react-icons/ri';
import Headroom from 'react-headroom'



class Header extends React.Component {

  state = {
    isExpanded: false,

  }

  handleToggle() {
    this.setState({
      isExpanded: !this.state.isExpanded

    })
  }


  render() {

    /* const activeLink = window.location.pathname; //show pathname of page */

    /* console.log(this.state); */
    const { isExpanded } = this.state;


    return (
      <Container>
        <Headroom
          pinStart={0}
          disableInlineStyles={true}>

          <StyledHeader>
            <div className="test">
              <Link to="/"><img id="logo" alt="Brand Wine Estates Logo" src={Logo} /></Link>
              <ul className="horizontal-menu">
                <li>
                  <Link to="/" activeClassName="active">sortiment</Link>
                </li>
                {/*  <li>
                <Link to="/producent" activeClassName="active">producenter</Link>
              </li> */}
                <li>
                  <Link to="/restaurang" activeClassName="active">Restaurang</Link>
                </li>
                {/*  <li>
                <Link to="/recensioner" activeClassName="active">Recensioner</Link>
              </li> */}
                <li>
                  <Link to="/contact" activeClassName="active">Kontakt</Link>
                </li>
              </ul>
            </div>
            {/*  <div
            className={isExpanded ? 'hidden-menu' : 'active-page'}>

            {activeLink === "/" ? <Link to="/" activeClassName="active">sortiment</Link> : null}
            {activeLink === "/producent" ? <Link to="/producent" activeClassName="active">producent</Link> : null}
            {activeLink === "/restaurang" ? <Link to="/restaurang" activeClassName="active">restaurang</Link> : null}
            {activeLink === "/recensioner" ? <Link to="/recensioner" activeClassName="active">recensioner</Link> : null}
            {activeLink === "/kontakt" ? <Link to="/kontakt" activeClassName="active">kontakt</Link> : null}
          </div> */}
            {/* <h5>SE/NO</h5> */}
            <RiMenu2Line
              className="hamburger-menu"
              size="30"
              onClick={() => this.handleToggle()} />
          </StyledHeader>

          <DropDownMenu className={isExpanded ? '' : 'hidden'}>
            <div>
              <li>
                <Link to="/" activeClassName="active">sortiment</Link>
              </li>
              {/* <li>
              <Link to="/producent" activeClassName="active">producent</Link>
            </li> */}
              <li>
                <Link to="/restaurang" activeClassName="active">Restaurang</Link>
              </li>
              <li>
                <Link to="/contact" activeClassName="active"> Om oss / kontakt</Link>
              </li>
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
  ${tw`  text-secondary flex justify-between items-center h-24 uppercase `}
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
 
  .active{
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
${tw`uppercase flex flex-col justify-center items-center m-0 `}
list-style: none;
font-family: Assistant;
text-align: start;
background: linear-gradient(#fffafa 85%, #FAF8F8);
max-height: 300px;
overflow: hidden;
transition: ease-in-out 0.5s;
transition: max-height 0.5s cubic-bezier(.73,.42,.99,1); 




&.hidden{
    max-height: 0px;
    overflow: hidden;
  }


li {
  ${tw`mt-5`}
  color: #2c2c2c;
}

.active{
    border-bottom: 1px solid #cecece; 
    
  }

 

`




