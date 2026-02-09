// Google Sheets CSV取得用ユーティリティ

export interface ParticipantData {
  nickname: string
  lpUrl: string
}

const SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1R_w_zMKr9yhBHkvT419kd1CZuO8WOi31z4p5TmwLuDA/export?format=csv'

// ニックネーム列のヘッダー名
const NICKNAME_HEADER = 'あなたの呼ばれたいニックネーム'
// LP URL列のヘッダー名
const LP_URL_HEADER = '事前宿題のURL'

export async function fetchParticipants(): Promise<ParticipantData[]> {
  try {
    const response = await fetch(SPREADSHEET_URL, {
      next: { revalidate: 3600 } // 1時間ごとに再検証 (ISR)
    })

    if (!response.ok) {
      console.error('Failed to fetch spreadsheet:', response.status)
      return []
    }

    const csvText = await response.text()
    return parseCSV(csvText)
  } catch (error) {
    console.error('Error fetching participants:', error)
    return []
  }
}

function parseCSV(csvText: string): ParticipantData[] {
  const lines = csvText.split('\n').map(line => parseCSVLine(line))

  if (lines.length < 2) {
    return []
  }

  // ヘッダー行からカラムインデックスを特定
  const headers = lines[0]
  const nicknameIndex = headers.findIndex(h => h.includes(NICKNAME_HEADER))
  const lpUrlIndex = headers.findIndex(h => h.includes(LP_URL_HEADER))

  if (nicknameIndex === -1 || lpUrlIndex === -1) {
    console.error('Required columns not found in spreadsheet')
    return []
  }

  // データ行をパース
  const participants: ParticipantData[] = []

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i]
    const nickname = row[nicknameIndex]?.trim() || ''
    const lpUrl = row[lpUrlIndex]?.trim() || ''

    // ニックネームがあるエントリのみ追加
    if (nickname) {
      participants.push({ nickname, lpUrl })
    }
  }

  return participants
}

// CSV行をパース（クォート内のカンマを考慮）
function parseCSVLine(line: string): string[] {
  const result: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        // エスケープされたクォート
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current)
      current = ''
    } else {
      current += char
    }
  }

  result.push(current)
  return result
}
