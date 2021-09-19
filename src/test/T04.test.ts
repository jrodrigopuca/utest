import {getMockReq, getMockRes} from '@jest-mock/express';
import {getPost} from '../controllers/postsController';

describe("Test con controller", ()=>{

    test("GET posts/id - Req mockeado Res real", async()=>{
        const req = getMockReq({params:{id:1}})
        let {res, next} = getMockRes();

        await getPost(req,res, next);

        const expected = {
            "result": {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
        }

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(expected);
    })

    test("GET posts/id - parametro requerido", async()=>{
        const req = getMockReq()
        let {res, next} = getMockRes();

        await getPost(req,res, next);
        expect(res.status).toHaveBeenCalledWith(400);
    })
})
