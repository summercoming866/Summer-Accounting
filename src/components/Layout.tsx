import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Nav from './Nav'


const Wrapper = styled.div`
/* border:1px solid red; */
min-height:100vh;
display:flex;
flex-direction:column;
`
const Main = styled.div`
/* border:1px solid green;  */
flex-grow:1;
overflow:auto;
`
type Props = {
    className?: string;
    scrollTop?: number;
}
// const Layout = (props:any) => {
const Layout: React.FC<Props> = (props) => {
    const mainRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setTimeout(() => {
            if (!mainRef.current) { return; }
            console.log(props.scrollTop);
            mainRef.current.scrollTop = props.scrollTop!;
            console.log(mainRef.current.scrollTop);
        }, 0);
    }, [props.scrollTop]);
    return (
        <Wrapper>
            <Main ref={mainRef} className={props.className} data-x={'frank'}>
                {props.children}
            </Main>
            <Nav />
        </Wrapper>
    )
}
Layout.defaultProps = {
    scrollTop: 0
};
export default Layout