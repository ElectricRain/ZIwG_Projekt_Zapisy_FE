import React, {useState} from 'react'
import PageHeader from '../../components/PageHeader'
import ListAltIcon from '@material-ui/icons/ListAlt';
import axios from "axios";

import SubjectsTable from './SubjectsTable';
import CoursesTable from '../CoursesTable';
import ClassGrid from '../ClassGrid';

export default function TablesPage() {
    
    return (
        <>
        
            <PageHeader
                title="Wyszukiwanie zajęć" 
                subTitle="Tabele zawierające informacje o zajeciach"
                icon={<ListAltIcon fontSize="large" />}
            />
            <SubjectsTable/>
            <CoursesTable/>
            <ClassGrid/>
            <div>
                Axis Get:
                {
                    console.log(axios.get('http://localhost:22639/api/' + 'User/subjects'))
                }
            </div>
        </>
    )
}
