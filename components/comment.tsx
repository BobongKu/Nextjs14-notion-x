'use client';
 
import Giscus from '@giscus/react';
 
const Comments = ({ repo, repoId, category, categoryId }: any) => (
    <Giscus
        repo={repo}
        repoId={repoId}
        category={category}
        categoryId={categoryId}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark_dimmed"
        lang="en"
        loading="lazy" />
);
 
export default Comments;