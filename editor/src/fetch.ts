import { ref } from "vue";

const url = "http://localhost:8060/api/post";

async function getPosts() {
  const res = await fetch(url);
  const data = (await res.json()) as Post[];
  return data;
}

export function usePosts() {
  const posts = ref<Post[]>([]);

  const refresh = () => {
    getPosts().then((data) => (posts.value = data));
  };

  return {
    posts,
    refresh,
  };
}
