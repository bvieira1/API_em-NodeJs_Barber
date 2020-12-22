import IHashProvider from '../models/IHashProvider';

class FakeHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return payload;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }
}

export default FakeHashProvider;
// import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';

// export default class FakeHashProvider implements IHashProvider {
//   public async generateHash(payload: string): Promise<string> {
//     return payload;
//   }

//   public async comapreHash(payload: string, hashed: string): Promise<boolean> {
//     return payload === hashed;
//   }
// }
