/// <reference types="vite/client" />

interface Post {
  id: string;
  name: string;
  title: string;
  author: string;
  tags: string[];
  createTime: Date;
  lastUpdate: Date;
  content: string;
}
