export default function () {
  const players = reactive([
    {id: 1, x: 300, y: 300, score: 0},
    // {id: 2, x: 500, y: 300, score: 0},
    // {id: 3, x: 700, y: 300, score: 0},
    // {id: 4, x: 900, y: 300, score: 0},
  ]) 

  return useState<object>('players', () => players)
}