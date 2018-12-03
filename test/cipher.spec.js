describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "Etuhktmhkbt" para "Laboratoria" con offset 45', () => {
      assert.equal(cipher.encode(45,"Laboratoria"),"Etuhktmhkbt");
    });

    it('debería retornar "Nurg Satju" para "Hola Mundo" con offset -20',() => {
      assert.equal(cipher.encode(-20,"Hola Mundo"),"Nurg Satju");
    })
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33',() => {
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "Laborator ia" para "Etuhktmhk bt" con offset 45', () => {
      assert.equal(cipher.decode(45,"Etuhktmhk bt"),"Laborator ia");
    });

    it('debería retornar "Hola Mundo" para "Nurg Satju" con offset -20',() => {
      assert.equal(cipher.decode(-20,"Nurg Satju"), "Hola Mundo");
    })
  });
});
