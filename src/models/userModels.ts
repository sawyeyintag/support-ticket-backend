import prisma from "../config/prismaClient";

export async function getAllUsers() {
  return await prisma.user.findMany();
}

export async function getUserById(id: string) {
  return await prisma.user.findUnique({ where: { id } });
}

export async function createUser(data: { name: string }) {
  return await prisma.user.create({ data });
}

export async function updateUser(id: string, data: { name?: string }) {
  return await prisma.user.update({ where: { id }, data });
}

export async function deleteUser(id: string) {
  return await prisma.user.delete({ where: { id } });
}
