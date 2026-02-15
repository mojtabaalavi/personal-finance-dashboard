import { Request, Response } from 'express';
import { prisma } from '../utils/db';
import { AuthRequest } from '../middleware/authMiddleware';

// List Users (Admin)
export const getUsers = async (req: AuthRequest, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, email: true, role: true, isLocked: true, permissions: true, createdAt: true }
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Toggle Lock
export const toggleLock = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  if (Array.isArray(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    // History
    await prisma.userHistory.create({
      data: {
        userId: user.id,
        email: user.email,
        role: user.role,
        permissions: user.permissions,
        changedBy: req.user?.id || 'SYSTEM'
      }
    });

    const updated = await prisma.user.update({
      where: { id },
      data: { isLocked: !user.isLocked }
    });

    res.json({ message: `User ${updated.isLocked ? 'locked' : 'unlocked'}`, isLocked: updated.isLocked });
  } catch (error) {
    res.status(500).json({ error: 'Update failed' });
  }
};

// Update Permissions
export const updatePermissions = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  if (Array.isArray(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }
  const { permissions, role } = req.body; // Expect array of strings

  try {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    // History
    await prisma.userHistory.create({
      data: {
        userId: user.id,
        email: user.email,
        role: user.role,
        permissions: user.permissions,
        changedBy: req.user?.id || 'SYSTEM'
      }
    });

    const updated = await prisma.user.update({
      where: { id },
      data: { 
        permissions: permissions || user.permissions,
        role: role || user.role
      }
    });

    res.json({ message: 'User updated', user: updated });
  } catch (error) {
    res.status(500).json({ error: 'Update failed' });
  }
};
