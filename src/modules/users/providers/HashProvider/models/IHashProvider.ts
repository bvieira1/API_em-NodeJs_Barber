export default interface IHashProvider {
  generateHash(payload: string): Promise<string>;
  compareHash(payload: string, hashd: string): Promise<boolean>;
}

// export default interface IHashProvider {
//   generateHash(payload: string): Promise<string>;
//   comapreHash(payload: string, hashed: string): Promise<boolean>;
// }
