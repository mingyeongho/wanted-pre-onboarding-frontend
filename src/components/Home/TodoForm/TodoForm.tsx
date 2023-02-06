import { TodoFormProps } from "../../../utils/interface";
import useTodoForm from "./hooks/useTodoForm";
import * as S from "./TodoForm.style";

const TodoForm = ({ setRefresh }: TodoFormProps) => {
  const { todoLabelProps, todoInputProps, onSave } = useTodoForm(setRefresh);

  return (
    <S.TodoForm onSubmit={onSave}>
      <S.InputContainer>
        <S.Label {...todoLabelProps} />
        <S.Input data-testid="modify-button" {...todoInputProps} />
      </S.InputContainer>
      <S.Button type="submit" data-testid="delete-button" children="추가" />
    </S.TodoForm>
  );
};

export default TodoForm;
