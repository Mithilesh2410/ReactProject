import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput name="watchHref" label="First Name" value={course.watchHref} onChange={onChange} error={errors.title}/>
      <TextInput name="title" label="Last Name" value={course.title} onChange={onChange} error={errors.title}/>
      <TextInput name="authorId" label="Email" value={course.authorId} onChange={onChange} />

      <SelectInput name="category" label="Status" value={course.category} defaultOption="Status" options={allAuthors}
      onChange={onChange} error={errors.category}/>
      <TextInput  name="length" label="Length" value={course.length} onChange={onChange} error={errors.length}/>

      <input type="submit" disabled={saving} value={saving ? 'Saving...' : 'Save'} className="btn btn-primary" onClick={onSave}/>
    </form>
  );
};

CourseForm.propTypes = {
  course: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CourseForm;
