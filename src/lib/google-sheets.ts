export interface Participant {
  discordId: string
  nickname: string
  walletAddress: string
  homeworkUrl: string
  checkedInAt: string
}

function parseCSV(csv: string): string[][] {
  const rows: string[][] = []
  let current = ''
  let inQuotes = false
  let row: string[] = []

  for (let i = 0; i < csv.length; i++) {
    const ch = csv[i]
    if (inQuotes) {
      if (ch === '"' && csv[i + 1] === '"') {
        current += '"'
        i++
      } else if (ch === '"') {
        inQuotes = false
      } else {
        current += ch
      }
    } else {
      if (ch === '"') {
        inQuotes = true
      } else if (ch === ',') {
        row.push(current.trim())
        current = ''
      } else if (ch === '\n' || (ch === '\r' && csv[i + 1] === '\n')) {
        row.push(current.trim())
        current = ''
        if (row.some(cell => cell !== '')) rows.push(row)
        row = []
        if (ch === '\r') i++
      } else {
        current += ch
      }
    }
  }
  if (current || row.length > 0) {
    row.push(current.trim())
    if (row.some(cell => cell !== '')) rows.push(row)
  }
  return rows
}

const MOCK_PARTICIPANTS: Participant[] = [
  {
    discordId: 'sakana_dev#1234',
    nickname: 'おさかなさん',
    walletAddress: '0x1a2b3c4d5e6f7890abcdef1234567890abcdef12',
    homeworkUrl: 'https://v0.dev/chat/example-1',
    checkedInAt: '2026-02-10T10:00:00',
  },
  {
    discordId: 'vibe_coder#5678',
    nickname: 'バイブマスター',
    walletAddress: '0xabcdef1234567890abcdef1234567890abcdef34',
    homeworkUrl: 'https://v0.dev/chat/example-2',
    checkedInAt: '2026-02-10T11:30:00',
  },
  {
    discordId: 'nagasaki_fan#9012',
    nickname: '長崎っ子',
    walletAddress: '0x567890abcdef1234567890abcdef1234567890ab',
    homeworkUrl: 'https://v0.dev/chat/example-3',
    checkedInAt: '2026-02-11T09:15:00',
  },
  {
    discordId: 'web3_builder#3456',
    nickname: 'ウェブスリー',
    walletAddress: '0xdef1234567890abcdef1234567890abcdef123456',
    homeworkUrl: 'https://v0.dev/chat/example-4',
    checkedInAt: '2026-02-11T14:00:00',
  },
  {
    discordId: 'mogi_fish#7890',
    nickname: '茂木のさかな',
    walletAddress: '0x890abcdef1234567890abcdef1234567890abcdef',
    homeworkUrl: 'https://v0.dev/chat/example-5',
    checkedInAt: '2026-02-12T08:45:00',
  },
]

export async function fetchParticipants(): Promise<Participant[]> {
  const sheetId = process.env.NEXT_PUBLIC_SHEET_ID

  if (!sheetId) {
    console.log('[google-sheets] NEXT_PUBLIC_SHEET_ID not set — using mock data')
    return MOCK_PARTICIPANTS
  }

  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv`

  try {
    const res = await fetch(url, { next: { revalidate: 60 } })
    if (!res.ok) {
      console.error(`[google-sheets] fetch failed: ${res.status}`)
      return []
    }

    const csv = await res.text()
    const rows = parseCSV(csv)

    // Skip header row (row 0)
    // Columns: A=タイムスタンプ B=メールアドレス C=DiscordID D=ニックネーム E=事前宿題URL F=ウォレット
    return rows.slice(1).map(row => ({
      checkedInAt: row[0] ?? '',
      discordId: row[2] ?? '',
      nickname: row[3] ?? '',
      homeworkUrl: row[4] ?? '',
      walletAddress: row[5] ?? '',
    }))
  } catch (err) {
    console.error('[google-sheets] error:', err)
    return []
  }
}
