import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Box, OutlinedInput, InputAdornment } from '@mui/material';
import { Icon } from '@iconify/react';
import searchFill from '@iconify/icons-eva/search-fill';

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 210,
  marginLeft: 15,
  marginTop: 15,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&.Mui-focused': { width: 280, boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`
  }
}));

SearchComponent.propTypes = {
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
  title: PropTypes.string
};

export function SearchComponent({ filterName, onFilterName, title }) {
  return (
    <SearchStyle
      value={filterName}
      onChange={onFilterName}
      placeholder={title}
      startAdornment={
        <InputAdornment position="start">
          <Box component={Icon} icon={searchFill} sx={{ color: 'text.disabled' }} />
        </InputAdornment>
      }
    />
  );
}
