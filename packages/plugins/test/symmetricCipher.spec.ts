import { SymmetricCipher } from '../src/symmetricCipher';

describe('AsymmetricCipher', function () {
  it('Should encrypt - decrypt from static methods', () => {
    const obj = { hello: 'world' };
    const secret = SymmetricCipher.createSecret() as Uint8Array;
    const encrypted = SymmetricCipher.encrypt(obj, secret);
    const decrypted = SymmetricCipher.decrypt(encrypted, secret);
    expect(decrypted).toEqual(obj);
  });

  it('Should encrypt - decrypt from prototype methods', async () => {
    const obj = { hello: 'world' };
    const secret = SymmetricCipher.createSecret();
    const symmetricCipher = new SymmetricCipher(secret);
    const encrypted = await symmetricCipher.encrypt(obj);
    const decrypted = await symmetricCipher.decrypt(encrypted);
    expect(decrypted).toEqual(obj);
  });
});
