describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",33), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "Nurg Satju" para "Hola Mundo" con offset -20',() => {
      assert.equal(cipher.encode("Hola Mundo",-20),"Nurg Satju");
    })
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33',() => {
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "Laborator ia" para "Etuhktmhk bt" con offset 45', () => {
      assert.equal(cipher.decode("Etuhktmhk bt",45),"Laborator ia");
    });

    it('debería retornar "Hola Mundo" para "Nurg Satju" con offset -20',() => {
      assert.equal(cipher.decode("Nurg Satju",-20), "Hola Mundo");
    })
  });
});
