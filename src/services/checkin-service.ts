import { db } from '@/lib/db'

export class CheckinService {
  static async createCheckin(data: { name: string; lpUrl?: string; comment?: string }) {
    return db.campCheckin.create({
      data: {
        name: data.name,
        lpUrl: data.lpUrl || null,
        comment: data.comment || null,
      },
    })
  }

  static async getAllCheckins() {
    return db.campCheckin.findMany({
      orderBy: { createdAt: 'desc' },
    })
  }

  static async getCheckinCount() {
    return db.campCheckin.count()
  }
}
