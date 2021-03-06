import { useUpdate } from 'hooks/useUpdate';
import { useEffect, useState } from 'react';
import createId from '../lib/createId'
// const defaultTags = [
//     { id: createId(), name: '衣' },
//     { id: createId(), name: '食' },
//     { id: createId(), name: '住' },
//     { id: createId(), name: '行' },
// ];
const useTags = () => {
    //   const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
    // const [tags, setTags] = useState<{ id: number; name: string }[]>([
    const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
        if (localTags.length === 0) {
            localTags = [
                { id: createId(), name: '衣' },
                { id: createId(), name: '食' },
                { id: createId(), name: '住' },
                { id: createId(), name: '行' },
            ]
        }
        setTags(localTags)

    }, [])//相当于afteramount，组件挂载执行
    useUpdate(() => {
        window.localStorage.setItem('tags', JSON.stringify(tags))
    }, tags)
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
    const findTagIndex = (id: number) => {
        let result = -1;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i;
                break;
            }
        }
        return result;
    };
    //   const updateTag = (id: number, obj: { name: string }) => {
    //     // 获取你要改的 tag 的下标
    //     const index = findTagIndex(id);
    //     // 深拷贝 tags 得到 tagsClone
    //     const tagsClone = JSON.parse(JSON.stringify(tags));
    //     // 把 tagsClone 的第 index 删掉，换成 {id:id, name: obj.name}
    //     tagsClone.splice(index, 1, {id: id, name: obj.name});
    //     setTags(tagsClone);
    //   };
    const updateTag = (id: number, { name }: { name: string }) => {
        setTags(tags.map(tag => tag.id === id ? { id, name } : tag))
    }
    //   const deleteTag = (id: number) => {
    //     // 获取你要删的 tag 的下标
    //     const index = findTagIndex(id);
    //     // 深拷贝 tags 得到 tagsClone
    //     const tagsClone = JSON.parse(JSON.stringify(tags));
    //     // 把 tagsClone 的第 index 删掉
    //     tagsClone.splice(index, 1);
    //     setTags(tagsClone);
    //   };
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id))
    }
    const addTag = () => {
        const tagName = window.prompt('新标签的名称为')
        if (tagName !== null && tagName !== '') {
            setTags([...tags, { id: createId(), name: tagName }]);
        }
    }
    const getName = (id: number) => {
        const tag = tags.filter(t => t.id === id)[0];
        return tag ? tag.name : '';
    };
    return { tags, getName, addTag, setTags, findTag, updateTag, findTagIndex, deleteTag };
};

export default useTags