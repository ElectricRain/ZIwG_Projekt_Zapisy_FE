import React, { Component } from 'react';
import { Table } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/styles.css'

class ClassGrid extends Component {
    constructor (props) {
        super(props);

        this.state = {
            lessons: [ 
                {
                    id: 0,
                    day: 1,
                    start: '8:00',
                    finish: '9:00',
                    type: 'W'
                },
                {
                    id: 1,
                    day: 6,
                    start: '10:00',
                    finish: '11:15',
                    type: 'C'
                },
                {
                    id: 2,
                    day: 3,
                    start: '7:00',
                    finish: '9:00',
                    type: 'W'
                },
                {
                    id: 3,
                    day: 4,
                    start: '12:00',
                    finish: '15:00',
                    type: 'L'
                },
                {
                    id: 4,
                    day: 5,
                    start: '16:30',
                    finish: '18:00',
                    type: 'C'
                },
                {
                    id: 5,
                    day: 5,
                    start: '19:50',
                    finish: '21:00',
                    type: 'S'
                },
                {
                    id: 6,
                    day: 5,
                    start: '11:15',
                    finish: '13:45',
                    type: 'W'
                },
                {
                    id: 7,
                    day: 1,
                    start: '9:50',
                    finish: '12:00',
                    type: 'W'
                },
                {
                    id: 8,
                    day: 4,
                    start: '10:00',
                    finish: '11:45',
                    type: 'S'
                }
            ]
        }
    }

    render () {
        // console.log(this.props.records);
    
        const lessons = this.props.records.map((lesson) => {

            const day = lesson.day;

            const percentVer =  (day)/8*100

            const splittedTime = lesson.startHour.split(":");
            const hour = parseInt(splittedTime[0], 10);
            const minutes = parseInt(splittedTime[1], 10);

            const splittedTimeFinish = lesson.endHour.split(":");
            const hourFinish = parseInt(splittedTimeFinish[0], 10);
            const minutesFinish = parseInt(splittedTimeFinish[1], 10);

            const lasting = ((hourFinish - hour)+((minutesFinish - minutes)/60))*50;
            // console.log(lasting);
            // console.log(hour);
            // console.log(minutes);

            const percentHor = ((hour-7)+(minutes/60))*50;
            
            // console.log(percentHor);
            // console.log(percentVer);

            const mystyle = {
                marginTop : percentHor,
                marginLeft: percentVer+"%",
                height: lasting
            };

            switch(lesson.type) {
                case '0':
                    mystyle.backgroundColor = "#dada25";
                    break;
                case '1':
                    mystyle.backgroundColor = "#2525da";
                    break;
                case '2':
                    mystyle.backgroundColor = "#25dada";
                    break;
                default:
    
            }

            return(
                <div key={lesson.id} className="Child"
                    style={mystyle}>
                </div>
            );
        });

        return (
            <div className="AppBackgroundColor">
                Tygodniowa siatka zajęć
                <h4> </h4>
                <Table bordered striped className="MyTable mr-6">
                    <thead>
                        <tr>
                            <th className="TableRowElement"></th>
                            <th className="TableRowElement">Pn</th>
                            <th className="TableRowElement">Wt</th>
                            <th className="TableRowElement">Sr</th>
                            <th className="TableRowElement">Cz</th>
                            <th className="TableRowElement">Pt</th>
                            <th className="TableRowElement">Sb</th>
                            <th className="TableRowElement">N</th>
                        </tr>
                    </thead>
                    <tbody className="ParentGrid">
                    {lessons}
                    <tr>
                            <th className="TableHour">7:00</th>
                            
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>8:00</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>9:00</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>10:00</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>11:00</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>12:00</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>13:00</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>14:00</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>15:00</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>16:00</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>17:00</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>18:00</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>19:00</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>20:00</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>21:00</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ClassGrid;