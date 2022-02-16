// import type { Node as ReactNode } from 'react';

export type PageContext = {
  tag: string,
  category: string,
  currentPage: number,
  prevPagePath: string,
  nextPagePath: string,
  hasPrevPage: boolean,
  hasNextPage: boolean,
};

export type Node = {
  fields: {
    slug: string,
    categorySlug?: string,
    tagSlugs?: string[]
  },
  frontmatter: {
    date: string,
    description?: string,
    category?: string,
    tags?: string[],
    title: string,
    socialImage?: object
  },
  body: string,
  id: string
};

export type Edge = {
  node: Node
};

export type Edges = Array<Edge>;

export type AllMdx = {
  allMdx: {
    edges: Edges
  }
  group: {
    fieldValue: string,
    totalCount: number
  }[]
};