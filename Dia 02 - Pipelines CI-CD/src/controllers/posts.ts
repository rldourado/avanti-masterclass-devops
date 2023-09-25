/** source/controllers/posts.ts */
import axios, { type AxiosResponse } from 'axios'
import { type NextFunction, type Request, type Response } from 'express'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  // get some posts
  const result: AxiosResponse = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  )
  const posts: [Post] = result.data
  return res.status(200).json({
    message: posts
  })
}

// getting a single post
const getPost = async (req: Request, res: Response, next: NextFunction) => {
  // get the post id from the req
  const id: string = req.params.id
  // get the post
  const result: AxiosResponse = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )
  const post: Post = result.data
  return res.status(200).json({
    message: post
  })
}

// updating a post
const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  // get the post id from the req.params
  const id: string = req.params.id
  // get the data from req.body
  const title: string = req.body.title ?? null
  const body: string = req.body.body ?? null
  // update the post
  const response: AxiosResponse = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      ...(title && { title }),
      ...(body && { body })
    }
  )
  // return response
  return res.status(200).json({
    message: response.data
  })
}

// deleting a post
const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  // get the post id from req.params
  const id: string = req.params.id
  // delete the post
  const response: AxiosResponse = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )
  // return response
  return res.status(200).json({
    message: 'post deleted successfully'
  })
}

// adding a post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
  // get the data from req.body
  const title: string = req.body.title
  const body: string = req.body.body
  // add the post
  const response: AxiosResponse = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      title,
      body
    }
  )
  // return response
  return res.status(200).json({
    message: response.data
  })
}

export default { getPosts, getPost, updatePost, deletePost, addPost }
