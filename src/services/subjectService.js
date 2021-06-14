import axios from 'axios';

const KEYS = {
    subjects: 'subjects',
    subjectId: 'subjectId',
}

export const getDaysCollection = () => ([
    {id: '1', title: 'Poniedziałek'},
    {id: '2', title: 'Wtorek'},
    {id: '3', title: 'Środa'},
    {id: '4', title: 'Czwartek'},
    {id: '5', title: 'Piątek'},
    {id: '6', title: 'Sobota'},
    {id: '7', title: 'Niedziela'}
])

export const getSubjectTypesCollection = () => ([
    {id: '0', title: 'Wykład'},
    {id: '1', title: 'Laboratorium'},
    {id: '2', title: 'Ćwiczenia'},
    {id: '3', title: 'Seminarium'},
    {id: '4', title: 'Projekt'},
])

export const getParityCollection = () => ([
    {id: '0', title: 'Cotygodniowy'},
    {id: '1', title: 'Nieparzysty'},
    {id: '2', title: 'Parzysty'}
])

export function insertSubject(data){
    let subjects = getAllSubjects();
    let token;
    data['id'] = generateSubjectId();
    
    subjects.push(data)
    localStorage.setItem(KEYS.subjects, JSON.stringify(subjects));
    console.log(data)
    axios.get('http://localhost:22639/token?username=admin&password=admin')
    .then(resp => {
        token = resp.data.token;
        axios.post('http://localhost:22639/api/User/createsubject', {
            "subjectId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "courseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "typeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "dayEnum": 5,
            "parityEnum": 4,
            "startHour": {
                "ticks": 333000000000,
                "days": 0,
                "hours": 9,
                "milliseconds": 0,
                "minutes": 15,
                "seconds": 0,
                "totalDays": 0.3854166666666667,
                "totalHours": 9.25,
                "totalMilliseconds": 33300000,
                "totalMinutes": 555,
                "totalSeconds": 33300
            },
                "endHour": {
                "ticks": 387000000000,
                "days": 0,
                "hours": 10,
                "milliseconds": 0,
                "minutes": 45,
                "seconds": 0,
                "totalDays": 0.4479166666666667,
                "totalHours": 10.75,
                "totalMilliseconds": 38700000,
                "totalMinutes": 645,
                "totalSeconds": 38700
    }
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

    })

}

export function generateSubjectId(){
    if(localStorage.getItem(KEYS.subjectId) === null)
        localStorage.setItem(KEYS.subjectId, '0')
    var id = parseInt(localStorage.getItem(KEYS.subjectId))
    localStorage.setItem(KEYS.subjectId, (++id).toString())
    return id;
}

export function getAllSubjects(){
    if(localStorage.getItem(KEYS.subjects) === null)
        localStorage.setItem(KEYS.subjects, JSON.stringify([]));
    let subjects = JSON.parse(localStorage.getItem(KEYS.subjects));
    // let days = getDaysCollection();
    // let types = getSubjectTypesCollection();
    // let parities = getParityCollection();
    let token;
    let backSubjects;

    axios.get('http://localhost:22639/token?username=admin&password=admin')
    .then(resp => {
        token = resp.data.token;

        axios.get('http://localhost:22639/api/' + 'User/subjects', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => {
            backSubjects = res.data.subjects;
            console.log(backSubjects);
            // return backSubjects.map(x => ({
            //     ...x,
            // }))
        })
        .catch((error) => {
            console.error(error);
        })
    });
    
    console.log(subjects);
    
    return subjects.map(x => ({
        ...x,
        // day : days[parseInt(x.day-1, 10)].title,
        // type: types[x.id].title,
        // parity: parities[x.id].title,
    }))
}
