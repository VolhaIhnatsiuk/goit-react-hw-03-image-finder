import { ButtonWrapper } from "./Button.styled";

export function Button({ onClick }) {
  return (
    <ButtonWrapper>
      <Button
        type="button"
        name="load"
        onClick={onClick}
      >
        Load more
      </Button>
    </ButtonWrapper>
  );
}