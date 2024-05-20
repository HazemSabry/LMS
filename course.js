class Course {
    lessons = Array;

    constructor() {
        const pageBody = document.getElementById('page-body');
        this.lessons = pageBody.querySelectorAll('.lesson');
    }

    changeLessonWidthOnScreenSize() {
        if (screen.width > MAX_MOBILE_SCREEN_WIDTH) return;
        this.lessons.forEach(lesson => {
            lesson.style.width = "100vw";
        });
    }
}

const course = new Course();

course.changeLessonWidthOnScreenSize();