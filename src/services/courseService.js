const KEYS = {
    courses: "courses",
    courseId: "courseId"
}

export function insertCourse(data){
    let courses = getAllCourses();
    data['id'] = generateCourseId();
    courses.push(data)
    localStorage.setItem(KEYS.courses, JSON.stringify(courses));
}

export function generateCourseId(){
    if(localStorage.getItem(KEYS.courseId) === null)
        localStorage.setItem(KEYS.courseId, '0')
    var id = parseInt(localStorage.getItem(KEYS.courseId))
    localStorage.setItem(KEYS.courseId, (++id).toString())
    return id;
}

export function getAllCourses(){
    if(localStorage.getItem(KEYS.courses) === null)
        localStorage.setItem(KEYS.courses, JSON.stringify([]));
    return JSON.parse(localStorage.getItem(KEYS.courses));
}