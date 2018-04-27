import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) => {
  return (
    <tr>
      <td>{course.firstName}</td>
      <td>{course.lastName}</td>
      <td>{course.email}</td>
      <td>{course.status}</td>
      <td>{course.phoneNumber}</td>
      <td><Link to={'/course/' + course.id}>Edit</Link></td>
      
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow;
