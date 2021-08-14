import op from './T02Aux';

describe("Testing de Operaciones", ()=>{
    test("suma de 2 elementos", ()=>{
        const valor:number = op.suma(4,9);
        expect(valor).toBe(13);
    });

    test("mult de 2 elementos", ()=>{
        const valor:number = op.multiplicar(4,9);
        expect(valor).toBe(36);
    });

})