// Import the faculty model functions
import { getAllFaculty, getFacultyById, getSortedFaculty } from '../../models/faculty/faculty.js';

// Create a facultyListPage function that renders the faculty list page
const facultyListPage = (req, res) => {
    const faculty = getAllFaculty();

    res.render('faculty', {
        title: 'Faculty List',
        faculty: faculty
    });
};

// Create a facultyDetailPage function that uses route parameters to look up individual faculty
const facultyDetailPage = (req, res, next) => {
    const facultyId = req.params.facultyId;
    const facultyMember = getFacultyById(facultyId);

    // If faculty member doesn't exist, create 404 error
    if (!facultyMember) {
        const err = new Error(`Faculty member ${courseId} not found`);
        err.status = 404;
        return next(err);
    }

    // Handle sorting if requested
    const sortBy = req.query.sort;
    const sortedFaculty = getSortedFaculty(sortBy);

    // ?? WHAT DO I DO HERE ??
};

// Include proper error handling for invalid faculty IDs
// Export both functions
export { facultyListPage, facultyDetailPage }