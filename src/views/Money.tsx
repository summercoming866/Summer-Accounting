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
        // tags: [] as string[],
        tagIds: [] as number[],
        note: '',
        category: '-' as Category,
        amount: 0
    })
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({ ...selected, ...obj });
    };
    return (
        <MyLayout>
            {selected.note}
            {/* {selected.tags.join(',')}
            {selected.note}
            {selected.category} */}
            {/* <TagSection value={selected.tags} onChange={(tags) => onChange({ tags })} /> */}
            <TagSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds})}/>
            <NotesSection value={selected.note}
                onChange={(note) => onChange({ note })} />
            <CategorySection value={selected.category}
                onChange={(category) => onChange({ category })} />

            <NumberPadSection value={selected.amount}
                onChange={(amount) => onChange({ amount })}
                onOk={() => { }} />

        </MyLayout>
    );
}
export default Money