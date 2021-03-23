import Input from 'components/Input'
import React, { ChangeEventHandler, useRef } from 'react';
import styled from 'styled-components'

const Wrapper = styled.section
    `
    background:#f5f5f5;
    padding:14px 16px;
    font-size:14px;

`
type Props = {
    value: string,
    onChange: (value: string) => void
}
const NotesSection: React.FC<Props> = (props) => {
    // const [note,setNote]=useState('')
    const note = props.value;
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange(e.target.value);
    }
    return (
        <Wrapper>
            <Input label="备注" type="text" value={note} onChange={onChange} placeholder="在这里添加备注" />
            {/* <label>
                <span>备注</span>
                <input type="text" placeholder="在这里添加备注" ref={refInput} defaultValue={note} onBlur={onBlur} />
            </label> */}
        </Wrapper>
    )
}
export default NotesSection