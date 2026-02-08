'use server'

import { CheckinService } from '@/services/checkin-service'
import { revalidatePath } from 'next/cache'

export async function submitCheckin(formData: { name: string; lpUrl?: string; comment?: string }) {
  try {
    if (!formData.name || formData.name.trim().length === 0) {
      return { success: false, error: 'お名前を入力してください' }
    }

    const checkin = await CheckinService.createCheckin({
      name: formData.name.trim(),
      lpUrl: formData.lpUrl?.trim() || undefined,
      comment: formData.comment?.trim() || undefined,
    })

    revalidatePath('/')
    return { success: true, checkin }
  } catch (error) {
    console.error('Check-in failed:', error)
    return { success: false, error: 'チェックインに失敗しました' }
  }
}

export async function getCheckins() {
  try {
    const checkins = await CheckinService.getAllCheckins()
    return { success: true, checkins }
  } catch (error) {
    console.error('Failed to fetch checkins:', error)
    return { success: false, error: 'データの取得に失敗しました' }
  }
}
