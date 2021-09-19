import {getPost} from '../controllers/postsController';
import {getMockReq, getMockRes} from '@jest-mock/express';
import axios from 'axios';

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("Mockear salida", ()=>{

    test("GET posts/id - Req mockeado Res mockeado", async()=>{
        const expected:any = {
                userId: 1,
                id: 1,
                title: "Sol",
                body: "Luna"
        };

        mockedAxios.get.mockRejectedValue("rechazado");
        mockedAxios.get.mockResolvedValueOnce({data:{...expected}});

        const req = getMockReq({params:{id:1}})
        let {res, next} = getMockRes();

        await getPost(req,res, next);
        expect(res.json).toHaveBeenCalledWith({result:{...expected}});
    })


})