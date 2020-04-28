interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function login(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'a35r4a6wg5as312das654gs6dgas3f21a3d2f13as21d',
        user: {
          name: 'Eustácio',
          email: 'eustacio@gmail.com',
        },
      });
    }, 2000);
  });
}
