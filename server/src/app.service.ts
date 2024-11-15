import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProductsList(): any {
    const filePath = path.resolve(__dirname, '../src/data.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  }
}
