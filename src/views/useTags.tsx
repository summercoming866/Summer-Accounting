import {useState} from 'react';
import createId from '../lib/createId'
const useTags = () => {
//   const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
const [tags, setTags] = useState<{ id: number; name: string }[]>([
    // {id: 1, name: '衣'},
    // {id: 2, name: '食'},
    // {id: 3, name: '住'},
    // {id: 4, name: '行'},
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'},
  ]);
  return {tags, setTags};
};

export default useTags