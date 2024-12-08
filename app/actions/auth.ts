'use server'

import { z } from 'zod'

const userSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8),
})

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export async function registerUser(formData: FormData) {
  const validatedFields = userSchema.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return { error: 'Invalid fields. Please check your input.' }
  }

  // Here you would typically save the user to your database
  // For this example, we'll just return a success message
  return { success: 'User registered successfully!' }
}

export async function loginUser(formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return { error: 'Invalid email or password.' }
  }

  // Here you would typically check the user credentials against your database
  // For this example, we'll just return a success message
  return { success: 'Login successful!' }
}

