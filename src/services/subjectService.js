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
    data['id'] = generateSubjectId();
    subjects.push(data)
    localStorage.setItem(KEYS.subjects, JSON.stringify(subjects));
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
    let days = getDaysCollection();
    let types = getSubjectTypesCollection();
    let parities = getParityCollection();
    console.log(days);
    
    const ids = subjects.map(x => ({x}))

    console.log(ids);
    
    return subjects.map(x => ({
        ...x,
        // day : days[parseInt(x.day-1, 10)].title,
        // type: types[x.id].title,
        // parity: parities[x.id].title,
    }))
}
