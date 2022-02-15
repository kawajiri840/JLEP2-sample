import moment from "moment"

export interface Video {
  id:          string
  title:       string
  publisher:   string
  publishedAt: string
}

export function getReadableDate(date: Date): string {
  const now = moment()
  const createdAt = moment(date)
  const diff = now.diff(createdAt, "days")

  if (diff === 0) return "Today"
  else if (diff === 1) return "昨日"
  else if (diff <= 30) return `${diff} 日前`
  else if (diff >= 30 && diff < 365) return `${Math.floor(diff / 30)} カ月前`
  else return `${Math.floor(diff / 365)} 年${Math.floor(diff / 365) > 1 ? 's': ''} 前`
}

export const videos = {
  JICE: [
    {
      publisher: "JICE",
      id: "kaiwa001",
      title: "Nihongo Kaiwacho/にほんご会話帳",
      publishedAt: "2021-11-28T12:00:00Z"
    },
    {
      publisher: "JICE",
      id: "kaiwa002",
      title: "Nihongo Kaiwacho/にほんご会話帳",
      publishedAt: "2021-07-11T13:00:00Z"
    },
    {
      publisher: "JICE",
      id: "kaiwa003",
      title: "Nihongo Kaiwacho/にほんご会話帳",
      publishedAt: "2021-05-14T12:00:00Z"
    },
    {
      publisher: "JICE",
      id: "kaiwa004",
      title: "Nihongo Kaiwacho/にほんご会話帳",
      publishedAt: "2021-03-04T17:00:00Z"
    },
    {
      publisher: "園田学園女子大学",
      id: "kaiwa005",
      title: "医療オノマトペ",
      publishedAt: "2021-02-19T17:00:00Z"
    }
  ],
  Fireship: [
    {
      publisher: "PRONTEST",
      id: "hatu001",
      title: "にほんご発音学習",
      publishedAt: "2020-04-03T21:00:00Z"
    },
    {
      publisher: "PRONTEST",
      id: "hatu002",
      title: "にほんご発音学習",
      publishedAt: "2021-04-26T21:00:00Z"
    },
    {
      publisher: "PRONTEST",
      id: "hatu003",
      title: "にほんご発音学習",
      publishedAt: "2021-03-23T21:00:00Z"
    }
  ],
  kanji: [
    {
      publisher: "名古屋大学",
      id: "kanji001",
      title: "漢字学習",
      publishedAt: "2020-04-03T21:00:00Z"
    },
    {
      publisher: "名古屋大学",
      id: "kanji002",
      title: "漢字学習",
      publishedAt: "2021-04-26T21:00:00Z"
    },
    {
      publisher: "名古屋大学",
      id: "kanji003",
      title: "漢字学習",
      publishedAt: "2021-03-23T21:00:00Z"
    }
  ]
}