import { useState } from 'react'
import styled from 'styled-components'


const Wrapper = styled.section
    `
    flex-grow:1;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:flex-start;
    background:#fff; 
    padding:12px 16px;
    >ol{
        margin:0 -12px;
        >li{
            background:#d9d9d9;
            border-radius:18px;
            display:inline-block;
            padding:3px 16px;
            font-size:14px;
            margin:8px 12px;
            &.selected{
              background:#f60;  
            }
        }
    }
    >button{
        background:none;
        border:none;
        padding:2px 4px;
        border-bottom:1px solid #333;
        color:#666;
        margin-top:8px;
    }
`
type Props={
    value:string[],
    onChange:(selected:string[])=>void
}
const TagSection: React.FC<Props> = (props) => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
    // const [selectedTags, setSelectedTags] = useState<string[]>([])
    const selectedTags=props.value
    const onToggleTag = (tag: string) => {
        const index = selectedTags.indexOf(tag)
        if (index >= 0) {
            props.onChange(
                selectedTags.filter(t =>//复制没有被选中的tag作为新的selectedTags
                    t !== tag
                )
            )
        }else{
            props.onChange([...selectedTags,tag])
        }
    }
    const onAddTag = () => {
        const tagName = window.prompt('新标签的名称为')
        if (tagName !== null) {
            setTags([...tags, tagName])
        }
    }
    const getClass=(tag:string)=>selectedTags.indexOf(tag)>=0?'selected':''
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag} onClick={() => { onToggleTag(tag) }} className={getClass(tag)}>{tag}</li>
                )}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
}

export default TagSection