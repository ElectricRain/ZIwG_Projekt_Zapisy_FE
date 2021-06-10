import React, {useState} from 'react'
import SubjectForm from './SubjectForm';
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import useTable from '../../components/controls/useTable';
import * as subjectService from '../../services/subjectService';
import Controls from '../../components/controls/Controls';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width:'75%'
    }
}))

export default function SubjectsTable() {
    
    const classes = useStyles();
    const [records, setRecords] = useState(subjectService.getAllSubjects)
    const [filterFn, setFilterFn] = useState({fn: items => {return items;}});


    const headCells = [
        {id: 'lecturer', label:'Prowadzący'},
        {id:'courseId', label:'Id kursu'},
        {id:'type', label:'Typ zajęć'},
        {id:'day', label:'Dzień zajęć'},
        {id:'parity', label:'Tydzień zajęć', disableSorting: 'true'},
        {id:'startHour', label:'Godzina rozpoczęcia', disableSorting: 'true'},
        {id:'endHour', label:'Godzina zakończenia', disableSorting: 'true'}
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
                    return items.filter(x => x.courseId.toLowerCase().includes(target.value) ||
                                             x.day.toLowerCase().includes(target.value) ||
                                             x.type.toLowerCase().includes(target.value) ||
                                             x.parity.toLowerCase().includes(target.value) )
            }
        })
    }

    return (

        <>

            <Paper className={classes.pageContent}>
                <SubjectForm/>
                <Toolbar>
                    <Controls.Input
                        label="Wyszukaj zajęcia"
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
                                    <TableCell>{item.courseId}</TableCell>
                                    <TableCell>{item.type}</TableCell>
                                    <TableCell>{item.day}</TableCell>
                                    <TableCell>{item.parity}</TableCell>
                                    <TableCell>{item.startHour}</TableCell>
                                    <TableCell>{item.endHour}</TableCell>
                                </TableRow>))
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination/>
            </Paper>
        </>
    )
}
