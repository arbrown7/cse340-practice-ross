import { getFacultyBySlug, getSortedFaculty } from '../../models/faculty/faculty.js';

// Route handler for the faculty list page
const facultyListPage = async (req, res) => {
    const sortBy = req.query.sort || 'department';
    const sortedFaculty = getSortedFaculty(sortBy);

    res.render('faculty/list', {
        title: 'Faculty List',
        faculty: { sortedFaculty} ,
        currentSort: sortBy
    });
};

// Route handler for the individual faculty detail page
const facultyDetailPage = async (req, res, next) => {
    const slugId = req.params.slugId;
    const facultyMember = getFacultyBySlug(slugId);

    // If member doesn't exist, create 404 error
    if (Object.keys(facultyMember).length === 0) {
        const err = new Error(`Faculty member "${slugId}" not found`);
        err.status = 404;
        return next(err);
    }

    res.render('faculty/detail', {
        title: `${facultyMember.name}`,
        faculty: facultyMember
    });

};

export { facultyListPage, facultyDetailPage }