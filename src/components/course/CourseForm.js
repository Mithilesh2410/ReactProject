import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import toastr from 'toastr';

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Add New Contact</h1>
      <TextInput name="firstName" label="First Name" value={course.firstName} onChange={onChange} error={errors.firstName}/>
      <TextInput name="lastName" label="Last Name" value={course.lastName} onChange={onChange} error={errors.lastName}/>
      <TextInput name="email" label="Email" value={course.email} onChange={onChange} error={errors.email} />

      <SelectInput name="status" label="Status" value={course.status} defaultOption="Status" options={allAuthors}
      onChange={onChange} error={errors.status}/>
      <TextInput name="phoneNumber" label="Phone Number" value={course.phoneNumber} onChange={onChange} error={errors.phoneNumber}/>

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
