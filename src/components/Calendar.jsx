import React from "react";
import Event from './Event'


const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <th></th>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thrusday</th>
                <th>Friday</th>
                <th>Saturday</th>
            <tr>
                <td className="time">8am</td>
                <Event event='Starbucks ☕️' location="646 Michigan Ave"  color ='green'/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event event='Yolk 🍳' location="355 E Ohio St" color ='green'/>
                <td></td>
                <td></td>
            </tr>  
            <tr>
                <td className="time">9am</td>
                <td></td>
                <td></td>
                <td></td>
                <Event event='Subway 🚊' location="Grand Station" color ='pink'/>
                <td></td>
                <td></td>
                <Event event='The Bean 🫘' location="Millennium Park" color ='blue'/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>  
            <tr>
                <td className="time">10am</td>
                <td></td>
                <Event event='River Cruise ⛵' location="Chicago River" color='blue'/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>  
            <tr>
                <td className="time">11am</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event event='Deep Dish 🍕' location="Giodano's" color='green'/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr> 
            <tr>
                <td className="time">12pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event event='Subway 🚊' location="Washington Station" color='pink'/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">1pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">2pm</td>
                <td></td>
                <td></td>
                <Event event='Art Institute 🖼️' location="111 S Michigan Ave" color='blue'/>
                <td></td>
                <Event event='Girl & the Goat' location="809 W Randolph St" color='green'/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">3pm</td>
                <Event event='Cubs Game ⚾' location="Wrigley Field" color='blue'/>
                <td></td>
                <td></td>
                <td></td>
                <Event event='Subway 🚊' location="Roosevelt Station" color='pink'/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">4pm</td>
                <td></td>
                <td></td>
                <Event event='Fancy Dinner 🎩' location="Maple & Ash" color='green'/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">5pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event event='Shopping 🛍️' location="Magnificent Mile" color='blue'/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
                <tbody>
                    </tbody>    
                    </table>
        </div>
        ) 
}

export default Calendar;
