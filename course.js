class Course {
    lessons = Array;

    constructor() {
        const pageBody = document.getElementById('page-body');
        this.lessons = pageBody.querySelectorAll('.lesson');
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Changes the width of each lesson element based on the screen size.
     * If the screen width is greater than the maximum mobile screen width,
     * the method does nothing. Otherwise, it sets the width of each lesson element to 100% of the viewport width.
     */
    changeLessonWidthOnScreenSize() {
        if (screen.width > MAX_MOBILE_SCREEN_WIDTH) return;
        this.lessons.forEach(lesson => {
            lesson.style.width = "100vw";
        });
    }
}

const course = new Course();

course.changeLessonWidthOnScreenSize();