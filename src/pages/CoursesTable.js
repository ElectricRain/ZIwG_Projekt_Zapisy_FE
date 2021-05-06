import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React, {useState} from 'react'
import Controls from '../components/controls/Controls';
import useTable from '../components/controls/useTable';
import * as courseService from '../services/courseService'
import CourseForm from './Tables/CourseForm';

// import CourseForm from './CourseForm';
// import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
// import useTable from '../../components/controls/useTable';
// import * as courseService from '../../services/subjectService';
// import Controls from '../../components/controls/Controls';
// import { Search } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width:'75%'
    }
}))

export default function CoursesTable() {
    
    const classes = useStyles();
    const [records, setRecords] = useState(courseService.getAllCourses)
    const [filterFn, setFilterFn] = useState({fn: items => {return items;}});


    const headCells = [
        {id: 'lecturer', label:'Prowadzący'},
        {id:'courseName', label:'Nazwa kursu'},
        {id:'courseCode', label:'Kod kursu'},

    ]

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if(target.value === "")
                    return items;
                else
                    return items.filter(x => x.courseCode.toLowerCase().includes(target.value) ||
                                             x.courseName.toLowerCase().includes(target.value))
            }
        })
    }

    return (

        <>

            <Paper className={classes.pageContent}>
                <CourseForm/>
                <Toolbar>
                    <Controls.Input
                        label="Wyszukaj kursy"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                </Toolbar>

                <TblContainer>
                    <TblHead/>
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>-</TableCell>
                                    <TableCell>{item.courseName}</TableCell>
                                    <TableCell>{item.courseCode}</TableCell>
                                </TableRow>))
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination/>
            </Paper>
        </>
    )
}
