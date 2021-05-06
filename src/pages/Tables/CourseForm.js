import { Grid, TextField, makeStyles } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import Controls from '../../components/controls/Controls';
import {useForm, Form} from '../../components/controls/useForm'
import * as courseService from '../../services/courseService'


const initialValues = {
    id: 0,
    courseCode: '',
    courseName: ''
}

export default function CourseForm() {

    const {
        values,
        setValues,
        handleInputChange,
        resetForm
    } = useForm(initialValues);

    const handleSubmit = e => {
        // e.preventDefault();
        window.alert('Submit Course Form');
        courseService.insertCourse(values);
        resetForm();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Nazwa kursu:"
                        name="courseName"
                        value={values.courseName}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input 
                        label="Kod kursu:"
                        name="courseCode"
                        value={values.courseCode}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Dodaj"
                        />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm}
                        />
                    </div>
                </Grid>

            </Grid>
        </Form>
    )
}
