import Layout from '../components/Layout'
import React, { useState } from 'react'
import styled from 'styled-components'
import TagSection from './Money/TagSection'
import NotesSection from './Money/NotesSection'
import NumberPadSection from './Money/NumberPadSection'
import CategorySection from './Money/CategorySection'

const MyLayout = styled(Layout)`
    display:flex;
    flex-direction:column;
`
type Category = '-' | '+'
function Money() {
    const [selected, setSelected] = useState({
        tags: [] as string[],
        note: '',
        category: '-' as Category,
        amount: 0
    })
    return (
        <MyLayout>
            {selected.tags.join(',')}
            {selected.note}
            {selected.category}
            <TagSection value={selected.tags} onChange={(tags) => {
                setSelected({
                    ...selected,
                    tags: tags
                }
                )
            }} />
            <NotesSection value={selected.note}
            onChange={(note)=>{
                setSelected({
                    ...selected,
                    note:note
                })
            }}/>
            <CategorySection value={selected.category}
            onChange={(category)=>{
                setSelected({
                    ...selected,
                    category:category
                })
            }} />

            <NumberPadSection value={selected.amount}
            onChange={(amount)=>{
                setSelected({
                    ...selected,
                    amount:amount
                })
            }}
            onOk={()=>{}} />

        </MyLayout>
    );
}
export default Money