import styled from 'styled-components'
import { Link } from 'react-router-dom'
import React from 'react'
import Icon from './Icon'


const NavWrapper = styled.nav`
/* border:1px solid blue;
 */
 box-shadow:0 0 3px rgba(0,0,0,0.25);
line-height:24px;
>ul{
  display:flex;
  >li{
    width:33.3333%;
    text-align:center;
    padding:4px 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    .icon{
        width:24px;
        height:24px;
    }
  }
}
`
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Icon name="tags" />
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <Icon name="rmb" />

                    <Link to="/money">记账页</Link>
                </li>
                <li>
                    <Icon name="statistics" />

                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav