import client from './sanity';

export const getPostBySlug = async (slug) => {
  const post = `*[_type == "post" && slug.current == "${slug}"]{
    ...,
    categories[]->{title}
  }`
  return await client.fetch(post)
}

export const getPosts = async () => {
  const posts = '*[_type == "post"]{..., categories[]->{title}}'
  return await client.fetch(posts)
}

export const getCategoryPosts = async (title) => {
  const query = `*[_type == "category" && title == "Politics"]{
    ...,
    "posts": *[_type == "post" && references(^._id)]{
      ...,
      categories[]->{title},
    }
  }`
  const params = { categoryTitle: `"${title}"` }
  return await client.fetch(query, params)
}

export const getCategory = async (title) => {
  const category = `*[_type == "category" && title=="${tile}"]`
  return await client.fetch(category)
}

export const getCategories = async () => {
  const categories = '*[_type == "category"]'
  return await client.fetch(categories)
}

export const getAuthors = async () => {
  const authors = '*[_type == "author"]'
  return await client.fetch(authors)
}

export const getAuthorBio = async () => {
  const authors = '*[_type == "author"]{bio[]{..., "asset":asset->}}'
  return await client.fetch(authors)
}