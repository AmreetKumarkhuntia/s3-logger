import { nanoid } from 'nanoid';

export function generateNanoId (length: number = 21): string  {
    return nanoid(length);
  };
  
export function formatJson(data: object) {
  return JSON.stringify(data, null, 2); // `null` for replacer and `2` for spaces in indentation
}