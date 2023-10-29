import { AiOutlineSearch } from 'react-icons/ai';
import { Component } from 'react';
import { Formik } from 'formik';
import css from './SearchBar.module.css';
import { SearchBarStyled, Button, ButtonLabel, StyledForm, StyledField, Label } from './SearchBar.styled';

const initialValue = { keyword: '' };
export class SearchBar extends Component {
  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values.keyword.trim());
    resetForm();
  };
  render() {
      return (
      <SearchBarStyled>
        <Formik initialValues={initialValue} onSubmit={this.handleSubmit}>
          <StyledForm autoComplete="off">
            <Button type="submit">
              <AiOutlineSearch className={css.svg} size={25} />
              <ButtonLabel>Search</ButtonLabel>
            </Button>
            <Label htmlFor="keyword">
              <StyledField
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name="keyword"
              />
            </Label>
          </StyledForm>
        </Formik>
      </SearchBarStyled>
    );
  }
}