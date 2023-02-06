export const API_URL = {
  BaseUrl: "https://pre-onboarding-selection-task.shop",
  SignupUrl: "/auth/signup",
  SigninUrl: "/auth/signin",
  CreateTodoUrl: "/todos",
  GetTodosUrl: "/todos",
  UpdateTodoUrl: (id: string) => `/todos/${id}`,
  DeleteTodoUrl: (id: string) => `/todos/${id}`,
};
