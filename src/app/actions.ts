"use server";

import { revalidatePath } from "next/cache";
import { sql } from "@vercel/postgres";
import { z } from "zod";

export async function createUser(prevState: { message: string; }, formData: FormData,) {
  const schema = z.object({
    email: z.string().email(),
    senha: z.string().min(6),
    nome: z.string().min(1)
  });
  const parse = schema.safeParse({
    email: formData.get('email'),
    senha: formData.get('senha'),
    nome: formData.get('nome')
  });

  if (!parse.success) {
    return { message: "Failed to create user" };
  }

  const data = parse.data;

  try {
    await sql`
      INSERT INTO usuarios (email, senha, nome)
      VALUES (${data.email}, ${data.senha}, ${data.nome})
    `;

    alert('Usuario cadastrado.')

    revalidatePath("/");
    return { message: `Added user ${data.nome}` };
  } catch (e) {
    return { message: "Failed to create user" };
  }
}

export async function deleteUser(prevState: { message: string; }, formData: FormData,) {
  const schema = z.object({
    id: z.string().min(1)
  });
  const data = schema.parse({
    id: formData.get("id")
  });

  try {
    await sql`
      DELETE FROM usuarios
      WHERE id = ${data.id};
    `;

    revalidatePath("/");
    return { message: `Deleted user ${data.id}` };
  } catch (e) {
    return { message: "Failed to delete user" };
  }
}