import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import { FilterInput, FilterWrapper, Btn } from './Filter.styled';

export const Filter = ({ onChange, value, onClick }) => {
  return (
    <>
      <FilterWrapper>
        <label htmlFor="filter">
          <FilterInput
            type="text"
            id="filter"
            name="filter"
            value={value}
            onChange={onChange}
          />
        </label>
        <Btn type="button" aria-label="Clear filter" onClick={onClick}>
          <AiFillDelete size="1.8em" />
        </Btn>
      </FilterWrapper>
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
};
