import { inject, provide, readonly } from "vue";
import { addPost, usePosts } from "./fetch";

const POST_TOKEN = Symbol("POST_TOKEN");

export function providePost() {
  const { posts, refresh } = usePosts();
  const add = async (post: Post) => {
    const res = await addPost(post);
    refresh();
    return res;
  };
  const getByName = (name: string) => posts.value.find(x => x.name === name); 
  provide(POST_TOKEN, {
    get posts() {
        return readonly(posts).value
    },
    refresh,
    add,
    getByName
  });
}

export function injectPost() {
    const manager = inject<{
        posts: Post[],
        add: (post: Post) => Promise<Post>,
        refresh: () => void,
        getByName: (name: string) => Post
    }>(POST_TOKEN);

    if(manager) {
        return manager
    } else {
        throw new Error("Injecton not found")
    }
}