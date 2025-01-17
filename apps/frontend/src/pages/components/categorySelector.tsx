import React from "react";
import {Autocomplete, Box, Chip, TextField} from "@mui/material";

// List of predefined category options
const categoryOptions = [
  "Single Short",
  "Sword & Board",
  "Flo",
  "Great",
  "Open",
  "Closed",
  "Single Long",
  "Great Sword",
  "Other"
];

interface CategorySelectorProps {
  onCategoriesChange?: (categories: string[]) => void; // Callback when categories change
  readOnly: boolean;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({onCategoriesChange, readOnly}) => {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);

  // Handle selection of a new category
  const handleAddCategory = (_: React.SyntheticEvent, newValue: string[]) => {
    setSelectedCategories(newValue);
    if (onCategoriesChange) {
      onCategoriesChange(newValue); // Notify parent of changes
    }
  };

  // Handle removal of a category pill
  const handleDeleteCategory = (categoryToDelete: string) => {
    const updatedCategories = selectedCategories.filter((category) => category !== categoryToDelete);
    setSelectedCategories(updatedCategories);
    if (onCategoriesChange) {
      onCategoriesChange(updatedCategories); // Notify parent of changes
    }
  };

  return (
    <Box>
      {/* AutoComplete dropdown with typeahead */}
      {readOnly || <Autocomplete
          multiple
          options={categoryOptions}
          value={selectedCategories}
          onChange={handleAddCategory}
          renderTags={() => null}
          size="small"
          sx={{mt: 4}}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Select Categories"
              placeholder="Type to search"
            />
          )}
          disableCloseOnSelect
      />}
      {/* Display selected categories as pills */}
      <Box mt={2}>
        {selectedCategories.map((category) => (
          <Chip
            key={category}
            label={category}
            onDelete={() => readOnly || handleDeleteCategory(category)}
            sx={{mr: 1, mb: 1}}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CategorySelector;