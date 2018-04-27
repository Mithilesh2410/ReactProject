import delay from './delay';

const courses = [
  {
    id: "1",
    lastName: "Mithilesh",
    firstName: "Satpute",
    email: "mithil@gmail.com",
    phoneNumber: "988776654",
    status: "Active"
  },
  {
    id: "2",
    lastName: "SYZ",
    firstName: "SYZ",
    email: "mithil@gmail.com",
    phoneNumber: "988776654",
    status: "Active"
  },
  {
    id: "3",
    lastName: "ABC",
    firstName: "ABC",
    email: "mithil@gmail.com",
    phoneNumber: "988776654",
    status: "Active"
  },
  {
    id: "4",
    lastName: "Prafull",
    firstName: "Prafull",
    email: "mithil@gmail.com",
    phoneNumber: "988776654",
    status: "Active"
  }

];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = (course) => {
  return replaceAll(course.firstName, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minCourseTitleLength = 1;
        if (course.lastName.length < minCourseTitleLength) {
          reject(`Name must be at least ${minCourseTitleLength} characters.`);
        }
        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          course.id = generateId(course);
          courses.push(course);
        }
        resolve(Object.assign({}, course));
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.courseId == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;
