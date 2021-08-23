import {getMockReq, getMockRes} from '@jest-mock/express';
import controller from '../controllers/postsController';

describe("Test con controller", ()=>{
    test("GET posts/:ids", async()=>{
        const req = getMockReq({params:{id:1}})
        const {res} = getMockRes();
        const next = jest.fn();

        await controller.getPosts(req,res, next);
        expect(res.json).toBeDefined()
    })
})
