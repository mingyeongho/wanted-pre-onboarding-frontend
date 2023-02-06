import { TodoItemProps } from "../../../../utils/interface";
import * as S from "./TodoItem.style";
import useTodoItem from "./hooks/useTodoItem";

const TodoItem = ({ item, setRefresh }: TodoItemProps) => {
  const { isCompleted, todo } = item;
  const {
    isEditMode,
    editInputProps,
    onDelete,
    onEdit,
    onCancel,
    onSave,
    onChangeChecked,
  } = useTodoItem({ item, setRefresh });

  return (
    <S.TodoItemContainer>
      {isEditMode ? (
        <S.EditForm>
          <S.Input data-testid="modify-input" {...editInputProps} />
          <S.Button
            type="submit"
            children="제출"
            data-testid="submit-button"
            onClick={onSave}
          />
          <S.Button
            type="button"
            children="취소"
            data-testid="cancel-button"
            onClick={onCancel}
          />
        </S.EditForm>
      ) : (
        <>
          <S.TodoItem>
            <S.Complete
              type="checkbox"
              checked={isCompleted}
              onChange={onChangeChecked}
            ></S.Complete>
            <S.Content children={todo} />
          </S.TodoItem>
          <S.Button
            children="수정"
            data-testid="modify-button"
            onClick={onEdit}
          />
          <S.Button
            children="삭제"
            data-testid="delete-button"
            onClick={onDelete}
          />
        </>
      )}
    </S.TodoItemContainer>
  );
};

export default TodoItem;
