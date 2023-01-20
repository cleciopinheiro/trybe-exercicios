const createItem = require('./createItem');
describe('a função createItem', () => {
    it('cria um item válido', () => {
        const expectaviva = { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 };
        const atual = createItem('banana', 'kg', 1.99, 20);
        expect(atual).toEqual(expectaviva);
    });

    it('utiliza zero como quantidade padrão', () => {
        const expectaviva = 0;
        const atual = createItem('banana', 'kg', 1.99);
        expect(atual).toHaveProperty('quantity', expectaviva);
    });

    it('Lança um erro quando não recebe parâmetros', () => {
        expect(() => createItem()).toThrow();
      });

    it('Lança um erro se o nome do item não é uma string', () => {
        expect(() => createItem('banana', 'kg', 1.99, 20).toThrow('O nome do item deve ser uma string'))
    });

    it('Lança um erro se o preço é negativo', () => {
        expect(() => createItem('banana', 'kg', -0.01)).toThrow('O preço do item deve ser maior que zero')
    });

    it('Lança um erro se o preço é zero', () => {
        expect(() => createItem('banana', 'kg', 0.00)).toThrow('O preço do item deve ser maior que zero')
    });
});