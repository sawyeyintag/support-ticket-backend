import { Request, Response } from "express";
import * as userModel from "../models/userModels";

// Get all users
export async function getUsers(req: Request, res: Response) {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
}

// Get user by ID
export async function getUser(req: Request, res: Response) {
  try {
    const user = await userModel.getUserById(req.params.id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve user" });
  }
}

// Create a new user
export async function createUser(req: Request, res: Response) {
  try {
    const user = await userModel.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Failed to create user" });
  }
}

// Update a user
export async function updateUser(req: Request, res: Response) {
  try {
    const user = await userModel.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "Failed to update user" });
  }
}

// Delete a user
export async function deleteUser(req: Request, res: Response) {
  try {
    await userModel.deleteUser(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete user" });
  }
}
