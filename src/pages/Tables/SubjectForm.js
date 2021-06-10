import { Grid } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import Controls from '../../components/controls/Controls';
import {useForm, Form} from '../../components/controls/useForm';
import * as subjectService from '../../services/subjectService'

const parityItems = [
    {id: '0', title: 'Cotygodniowy'},
    {id: '1', title: 'Nieparzysty'},
    {id: '2', title: 'Parzysty'}
]

const initialValues = {
    id: 0,
    courseId: '',
    type: '',
    day: '',
    startHour: '',
    endHour: '',
    parity: '0'
    
}

export default function SubjectForm() {

    const {
        values,
        setValues,
        handleInputChange,
        resetForm
    } = useForm(initialValues);

    const handleSubmit = e => {
        // e.preventDefault();
        window.alert("Submit Subject Form");
        subjectService.insertSubject(values)
        resetForm();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input 
                        label="Godzina rozpoczęcia:"
                        name="startHour"
                        value={values.startHour}
                        onChange={handleInputChange}
                    />
                    <Controls.Input 
                        label="Godzina zakończenia:"
                        name="endHour"
                        value={values.endHour}
                        onChange={handleInputChange}
                    />
                    <Controls.RadioGroup
                        name="parity"
                        label="Parzystość"
                        value={values.parity}
                        onChange={handleInputChange}
                        items={parityItems}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input 
                        variant="outlined"
                        label="Id kursu:"
                        name="courseId"
                        value={values.courseId}
                        onChange={handleInputChange}
                    />
                    <Controls.Select
                        label="Typ zajęć"
                        name="type"
                        value={values.type}
                        onChange={handleInputChange}
                        options={subjectService.getSubjectTypesCollection()}
                    />
                    <Controls.Select
                        label="Dzień zajęć"
                        name="day"
                        value={values.day}
                        onChange={handleInputChange}
                        options={subjectService.getDaysCollection()}
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
