import Layout from '../components/Layout'
import React, { useState } from 'react'
import styled from 'styled-components'
import TagSection from './Money/TagSection'
import NotesSection from './Money/NotesSection'
import NumberPadSection from './Money/NumberPadSection'
import CategorySection from './Money/CategorySection'
import { useRecords } from '../hooks/useRecords'

const MyLayout = styled(Layout)`
    display:flex;
    flex-direction:column;
`
const defaultFormData = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
}
const CategoryWrapper = styled.div`
    background:#c4c4c4;
`;
type Category = '-' | '+'
function Money() {
    const [selected, setSelected] = useState(
        defaultFormData
    )
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({ ...selected, ...obj });
    };
    const { addRecord } = useRecords()
    const submit = () => {
        if (addRecord(selected)) {
            alert('保存成功')
            setSelected(defaultFormData)
        }
    }
    return (
        <MyLayout scrollTop={9999}>
            {selected.note}
            {/* {selected.tags.join(',')}
            {selected.note}
            {selected.category} */}
            {/* <TagSection value={selected.tags} onChange={(tags) => onChange({ tags })} /> */}
            <TagSection value={selected.tagIds}
                onChange={tagIds => onChange({ tagIds })} />
            <NotesSection value={selected.note}
                onChange={(note) => onChange({ note })} />
            <CategoryWrapper>
                <CategorySection value={selected.category}
                    onChange={(category) => onChange({ category })} />

            </CategoryWrapper>

            <NumberPadSection value={selected.amount}
                onChange={(amount) => onChange({ amount })}
                onOk={submit} />

        </MyLayout>
    );
}
export default Money