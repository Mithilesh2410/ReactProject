import delay from './delay';

const courses = [
  {
    id: "1",
    title: "Mithilesh",
    watchHref: "Satpute",
    authorId: "mithil@gmail.com",
    length: "988776654",
    category: "Active"
  },
  {
    id: "2",
    title: "SYZ",
    watchHref: "SYZ",
    authorId: "mithil@gmail.com",
    length: "988776654",
    category: "Active"
  },
  {
    id: "3",
    title: "ABC",
    watchHref: "ABC",
    authorId: "mithil@gmail.com",
    length: "988776654",
    category: "Active"
  },
  {
    id: "4",
    title: "Prafull",
    watchHref: "Prafull",
    authorId: "mithil@gmail.com",
    length: "988776654",
    category: "Active"
  }

];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
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
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
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
