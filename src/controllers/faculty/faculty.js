import { getFacultyById, validateSort, getSortedFaculty } from '../../models/faculty/faculty.js';

// Route handler for the faculty list page
const facultyListPage = (req, res) => {
    const sortBy = req.query.sort;
    const validSort = validateSort(sortBy);
    const sortedFaculty = getSortedFaculty(validSort);

    res.render('faculty/list', {
        title: 'Faculty List',
        faculty: sortedFaculty,
        currentSort: validSort
    });
};

// Route handler for the individual faculty detail page
const facultyDetailPage = (req, res, next) => {
    const facultyId = req.params.facultyId;
    const facultyMember = getFacultyById(facultyId);

    // If member doesn't exist, create 404 error
    if (!facultyMember) {
        const err = new Error(`Faculty member "${facultyMember}" not found`);
        err.status = 404;
        return next(err);
    }

    res.render('faculty/detail', {
        title: `${facultyMember.name}`,
        faculty: facultyMember
    });

};

export { facultyListPage, facultyDetailPage }