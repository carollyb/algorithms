export function tournamentWinner(competitions: string[][], results: number[]) {
  const team1 = competitions[0][0];
  const team2 = competitions[1][0];
  const team3 = competitions[2][0];
  const points: { [key: string]: number } = {
    team1: 0,
    team2: 0,
    team3: 0,
  };

  competitions.map((item, index) => {
    if (results[index] === 0) {
      points[item[1]] = points[item[1]] + 3;
    } else {
      points[item[0]] = points[item[0]] + 3;
    }
  });

  if (points[team1] > points[team2] && points[team1] > points[team3]) {
    return team1;
  } else if (points[team2] > points[team1] && points[team2] > points[team3]) {
    return team2;
  }
  return team3;
}
