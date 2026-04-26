import bcrypt from 'bcrypt';

export class HashService {
    private static readonly SALT_ROUNDS = process.env.SALT_ROUNDS || 10;

    static async hash(password: string): Promise<string> {
        return await bcrypt.hash(password, this.SALT_ROUNDS);
    }

    static async compare(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }
}