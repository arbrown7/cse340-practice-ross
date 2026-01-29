// Import the faculty model functions
import { getAllFaculty, getFacultyById, getSortedFaculty } from '../../models/faculty/faculty.js';

// Create a facultyListPage function that renders the faculty list page
const facultyListPage = (req, res) => {
    const faculty = getAllFaculty();

    res.render('faculty/list', {
        title: 'Faculty List',
        faculty: faculty
    });
};

// Create a facultyDetailPage function that uses route parameters to look up individual faculty
const facultyDetailPage = (req, res, next) => {
    const facultyId = req.params.facultyId;
    const facultyMember = getFacultyById(facultyId);

    // Include proper error handling for invalid faculty IDs
    if (!facultyMember) {
        const err = new Error(`Faculty member ${facultyMember} not found`);
        err.status = 404;
        return next(err);
    }

    res.render('faculty/detail', {
        title: `${facultyMember.name}`,
        faculty: facultyMember
    });

};

// Export both functions
export { facultyListPage, facultyDetailPage }