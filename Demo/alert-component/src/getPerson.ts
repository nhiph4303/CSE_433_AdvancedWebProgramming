export type Person = {
  id: number;
  name: string;
};

export function getPerson(): Promise<Person> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'John Doe' });
    }, 1000);
  });
}
