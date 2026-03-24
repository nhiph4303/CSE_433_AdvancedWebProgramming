import { useEffect, useReducer, useMemo, useCallback } from 'react';
import { getPerson } from './getPerson';
import { Reset } from './Reset';
// 1. Hàm tính toán siêu tốn thời gian (Cố tình làm cho web lác)
function sillyExpensiveFunction() {
  console.log('Executing silly function');
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    sum += i;
  }
  return sum;
}

type State = {
  name: string | undefined;
  score: number;
  loading: boolean;
};

type Action =
  | { type: 'initialize'; name: string }
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' };
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'initialize':
      return { name: action.name, score: 0, loading: false };
    case 'increment':
      return { ...state, score: state.score + 1 };
    case 'decrement':
      return { ...state, score: state.score - 1 };
    case 'reset':
      return { ...state, score: 0 };
    default:
      return state;
  }
}

export function PersonScore() {
  const [{ name, score, loading }, dispatch] = useReducer(reducer, {
    name: undefined,
    score: 0,
    loading: true,
  });
  useEffect(() => {
    async function getThePerson() {
      const person = await getPerson();
      dispatch({ type: 'initialize', name: person.name });
    }
    getThePerson();
  }, []);
  // 2. Dùng useMemo bọc nó lại để nó chỉ tính đúng 1 lần (dựa vào dấu [] )
  const expensiveCalculation = useMemo(() => sillyExpensiveFunction(), []);

  // 3. Dùng useCallback để Ghi nhớ hàm này, không cho nó đẻ ra hàm mới mỗi lần gõ phím
  const handleReset = useCallback(() => dispatch({ type: 'reset' }), []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h3>
        {name}, {score}
      </h3>
      {/* 3. Đem kết quả đã lưu trong Két Sắt ra xài */}
      <p>{expensiveCalculation}</p>

      <button onClick={() => dispatch({ type: 'increment' })}>Add</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Subtract</button>

      {/* 4. Truyền hàm đã được ghi nhớ vào Component Con */}
      <Reset onClick={handleReset} />
    </div>
  );
}

// export function PersonScore() {
//   const [name, setName] = useState<string | undefined>();
//   const [score, setScore] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function getThePerson() {
//       const person = await getPerson();
//       setLoading(false);
//       setName(person.name);
//       console.log('State values', loading, name);
//     }
//     getThePerson();
//   }, []);
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h3>
//         {name}, {score}
//       </h3>
//       <button onClick={() => setScore(score + 1)}>Add</button>
//       <button onClick={() => setScore(score - 1)}>Subtract</button>
//       <button onClick={() => setScore(0)}>Reset</button>
//     </div>
//   );
// }
