import React,{ useState } from 'react'
import useTags from '../../hooks/useTags'
import styled from 'styled-components'
import createId from 'lib/createId'


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
    value: number[];
    onChange: (selected: number[]) => void;
}
const TagSection: React.FC<Props> = (props) => {
    // const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
    const {tags,setTags,addTag}=useTags()
    // const [selectedTags, setSelectedTags] = useState<string[]>([])
    const selectedTagIds=props.value
    const onToggleTag = (tagId: number) => {
        // const index = selectedTags.indexOf(tag)
        const index = selectedTagIds.indexOf(tagId);
        if (index >= 0) {
            props.onChange(
                selectedTagIds.filter(t =>//复制没有被选中的tag作为新的selectedTags
                    t !== tagId
                )
            )
        }else{
            props.onChange([...selectedTagIds, tagId])
        }
    }
    
    const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag.id} onClick={
                        () => {onToggleTag(tag.id);}
                      } className={getClass(tag.id)}
                      >{tag.name}</li>
                )}
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )
}

export default TagSection