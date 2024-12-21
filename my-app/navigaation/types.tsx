// navigation/types.ts
export type RootStackParamList = {    
    Login: undefined;  // LoginScreen은 매개변수가 없으므로 undefined
    Name: undefined; // NameScreen은 매개변수가 없으므로 undefined
    Main: { nickname: string }; // MainScreen은 nickname을 매개변수로 받음
  };
