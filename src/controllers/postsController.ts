import {Request, Response, NextFunction} from 'express';
import axios, {AxiosResponse} from 'axios';

interface Post{
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

// traer todos los posts
const getPosts = async (req: Request, res: Response, nxt:NextFunction)=>{
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    let myPosts: [Post] = result.data;
    return res.status(200).json({result: myPosts})
}

// traer una único post
const getPost = async ( req: Request, res: Response, nxt: NextFunction)=>{
    if (!req.params.id) return res.status(400).json({message:'Id is required'})
    let id:string = req.params.id;

    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let myPost: Post = result.data;

    res.status(200).json({result: myPost});
}

// actualizar
const updatePost = async (req: Request, res: Response, nxt: NextFunction)=>{
    let id:string = req.params.id;
    let title:string = req.body.title ?? null;
    let body:string = req.body.body ?? null;
    
    let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        ...(title && {title}),
        ...(body && {body})
    })
    return res.status(200).json({result:response.data})
}

// agregar
const addPost = async (req: Request, res: Response, nxt: NextFunction)=>{
    let title: string = req.body.title;
    let body: string = req.body.body;

    let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
        title,
        body
    });
    return res.status(200).json({result: response.data})
}

export {
    getPost,
    getPosts,
    updatePost,
    addPost
}