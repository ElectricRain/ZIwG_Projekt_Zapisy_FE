import React, {useState} from 'react'
import PageHeader from '../../components/PageHeader'
import ListAltIcon from '@material-ui/icons/ListAlt';

import SubjectsTable from './SubjectsTable';
import CoursesTable from '../CoursesTable';

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
        </>
    )
}
