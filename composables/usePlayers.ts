export default function () {
  const players = reactive([
    // {playerID: 1, socketID: , x: 300, y: 300, score: 0},
    // {id: 2, x: 500, y: 300, score: 0},
    // {id: 3, x: 700, y: 300, score: 0},
    // {id: 4, x: 900, y: 300, score: 0},
  ])

  return useState<object>('players', () => players)
}