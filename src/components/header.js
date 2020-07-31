import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import Logo from '../images/bwe-logo.png'
import { RiMenu2Line, RiTruckLine } from 'react-icons/ri';




class Header extends React.Component {

  state = {
    menuClicked: false,

  }

  dropDownMenuHandler() {
    this.setState({
      menuClicked: !this.state.menuClicked

    })
  }



  render() {

    const activeLink = window.location.pathname; //show pathname of page
    console.log(this.state);
    const { menuClicked } = this.state;


    return (
      <React.Fragment>
        <StyledHeader>
          <div className="test">
            <img id="logo" alt="Brand Wine Estates Logo" src={Logo} />
            <ul className="horizontal-menu">
              <li>
                <Link to="/" activeClassName="active">sortiment</Link>
              </li>
              <li>
                <Link to="/producent" activeClassName="active">producent</Link>
              </li>
              <li>
                <Link to="/restaurang" activeClassName="active">Restaurang</Link>
              </li>
              <li>
                <Link to="/recensioner" activeClassName="active">Recensioner</Link>
              </li>
              <li>
                <Link to="/kontakt" activeClassName="active"> Om oss / kontakt</Link>
              </li>
            </ul>
          </div>
          <div className="active-page">
            {activeLink === "/" ? <Link to="/" activeClassName="active">sortiment</Link> : null}
            {activeLink === "/producent" ? <Link to="/producent" activeClassName="active">producent</Link> : null}
            {activeLink === "/restaurang" ? <Link to="/restaurang" activeClassName="active">restaurang</Link> : null}
            {activeLink === "/recensioner" ? <Link to="/recensioner" activeClassName="active">recensioner</Link> : null}
            {activeLink === "/kontakt" ? <Link to="/kontakt" activeClassName="active">kontakt</Link> : null}
          </div>
          <h5>SE/NO</h5>
          <RiMenu2Line
            className="hamburger-menu"
            size="30"
            onClick={() => this.dropDownMenuHandler()} />
        </StyledHeader>

        <DropDownMenu>
          <div className={menuClicked ? '' : 'hidden'}>
            <li>
              <Link to="/" activeClassName="active">sortiment</Link>
            </li>
            <li>
              <Link to="/producent" activeClassName="active">producent</Link>
            </li>
            <li>
              <Link to="/restaurang" activeClassName="active">Restaurang</Link>
            </li>
            <li>
              <Link to="/recensioner" activeClassName="active">Recensioner</Link>
            </li>
            <li>
              <Link to="/kontakt" activeClassName="active"> Om oss / kontakt</Link>
            </li>


          </div>
        </DropDownMenu>
      </React.Fragment>
    )

  }

}
export default Header;




const StyledHeader = styled.div`
  ${ tw`  text-secondary flex justify-between items-center h-24 uppercase `}
  /* display: grid;
  grid-template-columns: 300px 1fr 100px;*/
  box-shadow: 0 1px 2px #a8a5a3; 
  font-family: Assistant;
 
  
  .test{
    ${ tw`flex justify-center items-center`}
    
  }
/*   .test2{
    
    justify-self: end;

  }
 */
 
  .active{
    border-bottom: 1px solid #b6272957; 
    
  }

  .active-page{
    ${ tw`flex justify-center items-center`}
    @media (min-width: 805px) {
        display: none;
	}  
  }

  .hamburger-menu {
    ${ tw`mr-6 cursor-pointer`}
   
    @media (min-width: 805px) {
        display: none;
        
	}  
	}

  h5{
    
    ${ tw`m-0 font-thin mr-6`}
   
    @media (max-width: 805px) {
        display: none;
	}  
  }
  img{
    ${ tw`w-32 m-0 ml-6`}
    @media (max-width: 910px) {
      ${ tw`w-24`}
	}  
  }

  .horizontal-menu{
    ${ tw`mb-0  text-sm flex`}
    list-style: none;
  
    @media (max-width: 910px) {
      ${ tw`text-xs`}
  }  
  
  @media (max-width: 805px) {
      ${ tw`hidden`}
  }  
  
    li{
      ${ tw`m-0 mt-1 pl-5 hover:text-primary`}
      
    }

  
}
`

const DropDownMenu = styled.ul`
${ tw`uppercase flex flex-col justify-center items-center m-0 `}
list-style: none;
font-family: Assistant;
text-align: start;
background: #ededed;
box-shadow: 0 1px  #a8a5a3;
max-height: 300px;
transition: ease-in-out 5s;

.hidden{
    max-height: 0;
    overflow: hidden;
    transition: ease-in-out 5s;
    display: none;
  }


li {
  ${ tw`mt-5`}
}

.active{
    border-bottom: 1px solid #b6272957; 
    
  }

 

`




