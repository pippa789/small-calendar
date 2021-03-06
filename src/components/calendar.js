import React, {useState} from 'react';
import { render } from 'react-dom';
import Calendar from 'react-calendar';

const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());

const onChange = date => {
    setDate(date);
}

    return <div>
        <Calendar onChange={onChange} value={date} />
    </div>
};

render(<ReactCalendar />, document.querySelector('#root'));
//this #root may be why app is going to calendar first
export default ReactCalendar