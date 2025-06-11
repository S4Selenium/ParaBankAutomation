// Utils/BankDetails.ts
import * as fs from 'fs';
import * as path from 'path';

const usernameFilePath = path.join(__dirname, 'username-data.json');
const accountNumberFilePath = path.join(__dirname, 'account-data.json');
const passwordFilePath = path.join(__dirname, 'password-data.json');

export function saveRegisteredUsername(username: string): void {
  fs.writeFileSync(usernameFilePath, JSON.stringify({ username }));
}

export function getRegisteredUsername(): string | undefined {
  if (!fs.existsSync(usernameFilePath)) return undefined;
  const data = fs.readFileSync(usernameFilePath, 'utf-8');
  return JSON.parse(data).username;
}

export function setNewAccountNumber(accountNumber: string): void {
  fs.writeFileSync(accountNumberFilePath, JSON.stringify({ accountNumber }));
}

export function getNewAccountNumber(): string | undefined {
  if (!fs.existsSync(accountNumberFilePath)) return undefined;
  const data = fs.readFileSync(accountNumberFilePath, 'utf-8');
  return JSON.parse(data).accountNumber;
}

export function savePassword(password: string): void {
  fs.writeFileSync(passwordFilePath, JSON.stringify({ password }));
}

export function getPassword(): string | undefined {
  if (!fs.existsSync(passwordFilePath)) return undefined;
  const data = fs.readFileSync(passwordFilePath, 'utf-8');
  return JSON.parse(data).password;
}
